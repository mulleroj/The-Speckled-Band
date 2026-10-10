const { after, before, test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const root = path.resolve(__dirname, '..');
const storageKey = 'baker-street-save:v2:case.speckled-band';
const pageUrl = 'http://m02.test/';
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
let browser;

before(async () => {
  const executablePath = process.env.BROWSER_EXECUTABLE;
  const options = executablePath ? { executablePath } : process.platform === 'win32' ? { channel: 'chrome' } : {};
  browser = await chromium.launch({ headless: true, ...options });
});

after(async () => {
  if (browser) await browser.close();
});

async function openFresh(options = {}) {
  const context = await browser.newContext(options);
  await serveLocalApp(context);
  const page = await context.newPage();
  await page.goto(pageUrl);
  return { context, page };
}

test('legacy JavaScript is not rendered below the footer on desktop or mobile', async () => {
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
    const { context, page } = await openFresh({ viewport });
    const visibleText = await page.locator('body').innerText();
    assert.doesNotMatch(visibleText, /storageKey|evidenceCatalog|function\s+restore\s*\(/);
    const footerBounds = await page.locator('footer').boundingBox();
    const bodyBounds = await page.locator('body').boundingBox();
    assert.ok(footerBounds && bodyBounds);
    assert.ok(Math.abs(footerBounds.y + footerBounds.height - bodyBounds.height) <= 1, 'footer should end the page');
    await context.close();
  }
});

async function serveLocalApp(context) {
  await context.route('http://m02.test/**', route => {
    const url = new URL(route.request().url());
    if (url.pathname === '/' || url.pathname === '/index.html') return route.fulfill({ status: 200, contentType: 'text/html; charset=utf-8', body: html });
    const file = path.resolve(root, `.${decodeURIComponent(url.pathname)}`);
    if (!file.startsWith(root + path.sep) || !fs.existsSync(file)) return route.fulfill({ status: 404, body: 'Not found' });
    const contentType = file.endsWith('.js') ? 'text/javascript; charset=utf-8' : 'application/octet-stream';
    return route.fulfill({ status: 200, contentType, body: fs.readFileSync(file) });
  });
}

async function reachObservations(page, reply) {
  await page.getByRole('button', { name: 'Open the book' }).click();
  await page.getByRole('button', { name: reply }).click();
  assert.match(await page.locator('#panelTitle').textContent(), /Woman in Black/);
}

async function solveDeduction(page) {
  await page.getByRole('button', { name: 'Look at the glove' }).click();
  await page.getByRole('button', { name: 'Examine the left sleeve' }).click();
  assert.equal(await page.getByRole('button', { name: 'Make a deduction' }).isDisabled(), false);
  await page.getByRole('button', { name: 'Make a deduction' }).click();
}

async function interviewAndClose(page) {
  await page.getByRole('button', { name: /Did Julia notice anything unusual/ }).click();
  await page.getByRole('button', { name: /Tell us about Stoke Moran/ }).click();
  await page.getByRole('button', { name: /What happened to your sister/ }).click();
  await page.getByRole('button', { name: /Listen to Julia’s last words/ }).click();
}

test('both Watson replies lead to the same clue-free, solvable observation scene', async () => {
  const a = await openFresh();
  const b = await openFresh();
  try {
    await reachObservations(a.page, /Who is she, Holmes/);
    await reachObservations(b.page, /Give me a moment/);
    assert.equal(await a.page.locator('#badge').textContent(), '0');
    assert.equal(await b.page.locator('#badge').textContent(), '0');
    assert.equal(await a.page.getByRole('button', { name: 'Make a deduction' }).isDisabled(), true);
    assert.equal(await b.page.getByRole('button', { name: 'Make a deduction' }).isDisabled(), true);
  } finally { await a.context.close(); await b.context.close(); }
});

test('full chapter path supports retry, three questions in any order, seven unique clues, and Case File', async () => {
  const { context, page } = await openFresh();
  const requests = [];
  page.on('request', request => requests.push(request.url()));
  try {
    await reachObservations(page, /Give me a moment/);
    await page.getByRole('button', { name: 'Look at the glove' }).click();
    await page.getByRole('button', { name: 'Examine the left sleeve' }).click();
    await page.getByRole('button', { name: 'Watch her expression' }).click();
    await page.getByRole('button', { name: 'Look at the glove' }).click();
    assert.equal(await page.locator('#badge').textContent(), '3');
    await page.getByRole('button', { name: 'Make a deduction' }).click();
    await page.getByRole('button', { name: 'She must be hiding a crime.' }).click();
    assert.match(await page.locator('#feedback').textContent(), /Try again/);
    await page.getByRole('button', { name: 'She came by train and travelled along a muddy road.' }).click();
    assert.match(await page.locator('#feedback').textContent(), /reasonable inference/);
    await page.getByRole('button', { name: /Hear the visitor’s story/i }).click();
    await interviewAndClose(page);
    assert.match(await page.locator('#panelTitle').textContent(), /Words She Cannot Forget/);
    assert.equal(await page.locator('#badge').textContent(), '7');
    await page.locator('#caseBtn').click();
    assert.equal(await page.getByRole('dialog').getByRole('heading', { name: 'Dr Watson’s Case File' }).count(), 1);
    assert.equal(await page.locator('#caseJournalPanel .evidence-item').count(), 7);
    assert.doesNotMatch(await page.locator('#storyCopy').innerText(), /the snake|the killer|the solution/i);
    assert.deepEqual(requests.filter(url => !url.startsWith('http://m02.test/')), []);
  } finally { await context.close(); }
});

test('progress and Teacher Mode restore after reload; toggling does not change clues', async () => {
  const { context, page } = await openFresh();
  try {
    await reachObservations(page, /Give me a moment/);
    await page.getByRole('button', { name: 'Look at the glove' }).click();
    await page.getByRole('button', { name: 'Examine the left sleeve' }).click();
    await page.getByRole('button', { name: 'Make a deduction' }).click();
    await page.getByRole('button', { name: 'She came by train and travelled along a muddy road.' }).click();
    await page.getByRole('button', { name: /Hear the visitor’s story/ }).click();
    await page.getByRole('button', { name: /Teacher Mode: OFF/ }).click();
    assert.equal(await page.locator('#badge').textContent(), '2');
    await page.reload();
    assert.match(await page.locator('#panelTitle').textContent(), /Terrible Family Secret/);
    assert.equal(await page.getByRole('button', { name: /Teacher Mode: ON/ }).getAttribute('aria-pressed'), 'true');
    assert.equal(await page.locator('#badge').textContent(), '2');
    assert.doesNotMatch(await page.locator('#teacherNote').innerText(), /correct inference|came by train and travelled/i);
    await page.getByRole('button', { name: /Teacher Mode: ON/ }).click();
    assert.equal(await page.getByRole('button', { name: /Teacher Mode: OFF/ }).getAttribute('aria-pressed'), 'false');
    assert.equal(await page.locator('#badge').textContent(), '2');
  } finally { await context.close(); }
});

test('invalid saved state rewinds safely and cannot expose a later clue', async () => {
  const context = await browser.newContext();
  await serveLocalApp(context);
  const page = await context.newPage();
  try {
    await page.goto(pageUrl);
    await page.evaluate(({ key, value }) => localStorage.setItem(key, JSON.stringify(value)), { key: storageKey, value: { format: 'baker-street-save', version: 2, caseId: 'case.speckled-band', chapterId: 'ch01', teacherMode: true, progress: { sceneId: 'ch01.closing', answer: 'correct', clues: ['ticket', 'mud', 'lastwords'], interviews: ['family'] } } });
    await page.reload();
    assert.match(await page.locator('#panelTitle').textContent(), /Terrible Family Secret/);
    assert.equal(await page.locator('#badge').textContent(), '2');
    assert.equal(await page.getByRole('button', { name: /Teacher Mode: ON/ }).getAttribute('aria-pressed'), 'true');
    await page.getByRole('button', { name: /Case File/ }).click();
    assert.doesNotMatch(await page.locator('#evidenceList').innerText(), /final words/i);
    await page.evaluate(key => localStorage.setItem(key, '{not json'), storageKey);
    await page.reload();
    assert.match(await page.locator('#panelTitle').textContent(), /An Early Visitor/);
  } finally { await context.close(); }
});

test('M01 saves migrate to v3 per-chapter stable IDs while preserving safe progress and Teacher Mode', async () => {
  const context = await browser.newContext();
  await serveLocalApp(context);
  const page = await context.newPage();
  try {
    await page.goto(pageUrl);
    await page.evaluate(() => localStorage.setItem('sherlock-speckled-band-ch01-v1', JSON.stringify({ scene: 4, teacher: true, approach: 'ready', clues: ['ticket','mud','fear','family'], interviews: ['family'], answer: 'correct', feedback: '' })));
    await page.reload();
    assert.match(await page.locator('#panelTitle').textContent(), /Terrible Family Secret/);
    assert.equal(await page.locator('#badge').textContent(), '4');
    assert.equal(await page.getByRole('button', { name: /Teacher Mode: ON/ }).getAttribute('aria-pressed'), 'true');
    const migrated = await page.evaluate(() => JSON.parse(localStorage.getItem('baker-street-save:v2:case.speckled-band')));
    assert.equal(migrated.version, 3);
    assert.equal(migrated.chapters.ch01.sceneId, 'ch01.testimony');
    assert.equal(await page.evaluate(() => localStorage.getItem('sherlock-speckled-band-ch01-v1') !== null), true);
  } finally { await context.close(); }
});

test('chapter menu enables Chapter II and preserves the Chapter I reading state', async () => {
  const { context, page } = await openFresh();
  try {
    await page.getByRole('button', { name: 'Chapters' }).click();
    assert.equal(await page.getByRole('dialog', { name: 'Choose a chapter' }).getByRole('button', { name: /Chapter 1/ }).isDisabled(), false);
    assert.equal(await page.getByRole('dialog').getByRole('button', { name: /Chapter 2/ }).isDisabled(), false);
    for (const chapter of ['Chapter 3','Chapter 4','Chapter 5']) assert.equal(await page.getByRole('dialog').getByRole('button', { name: new RegExp(chapter) }).isDisabled(), true);
    await page.getByRole('button', { name: /Chapter 1/ }).click();
    assert.match(await page.locator('#panelTitle').textContent(), /An Early Visitor/);
  } finally { await context.close(); }
});

test('blocked storage does not prevent the book opening or progression', async () => {
  const context = await browser.newContext();
  await serveLocalApp(context);
  await context.addInitScript(() => Object.defineProperty(window, 'localStorage', { configurable: true, get() { throw new DOMException('Blocked', 'SecurityError'); } }));
  const page = await context.newPage();
  try {
    await page.goto(pageUrl);
    await page.getByRole('button', { name: 'Open the book' }).click();
    assert.match(await page.locator('#panelTitle').textContent(), /Watson’s Bedroom/);
  } finally { await context.close(); }
});

test('core text and control color pairs meet WCAG AA contrast for normal text', async () => {
  const { context, page } = await openFresh();
  try {
    await reachObservations(page, /Give me a moment/);
    const pairs = await page.evaluate(() => {
      const pair = selector => {
        const style = getComputedStyle(document.querySelector(selector));
        return { selector, foreground: style.color, background: style.backgroundColor };
      };
      return [pair('body'), pair('.brand-txt small'), pair('.choice'), pair('.instruction'), pair('.footnote'), pair('.mini-btn')];
    });
    await page.getByRole('button', { name: 'Look at the glove' }).click();
    await page.getByRole('button', { name: /Case File/ }).click();
    await page.getByRole('tab', { name: 'Evidence Board' }).click();
    const boardPairs = await page.evaluate(() => {
      const effectiveBackground = element => {
        for (let current = element; current; current = current.parentElement) {
          const color = getComputedStyle(current).backgroundColor;
          if (color !== 'rgba(0, 0, 0, 0)' && color !== 'transparent') return color;
        }
        return getComputedStyle(document.body).backgroundColor;
      };
      return ['.case-tab[aria-selected="true"]','.case-tab[aria-selected="false"]','.board-intro','.board-section h3','.board-evidence','.board-evidence b','.board-evidence p','.evidence-type']
        .map(selector => { const element=document.querySelector(selector);const style=getComputedStyle(element);return {selector,foreground:style.color,background:effectiveBackground(element)}; });
    });
    const luminance = color => {
      const channels = color.match(/[\d.]+/g).slice(0, 3).map(value => Number(value) / 255).map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
      return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
    };
    for (const item of [...pairs,...boardPairs]) {
      const values = [luminance(item.foreground), luminance(item.background)].sort((a, b) => b - a);
      const ratio = (values[0] + 0.05) / (values[1] + 0.05);
      assert.ok(ratio >= 4.5, `${item.selector} contrast is ${ratio.toFixed(2)}:1`);
    }
  } finally { await context.close(); }
});

test('restart paths both require confirmation and preserve the Teacher Mode setting', async () => {
  const { context, page } = await openFresh();
  try {
    await reachObservations(page, /Give me a moment/);
    await page.getByRole('button', { name: 'Look at the glove' }).click();
    await page.getByRole('button', { name: 'Examine the left sleeve' }).click();
    await page.getByRole('button', { name: 'Watch her expression' }).click();
    await page.getByRole('button', { name: /Teacher Mode: OFF/ }).click();
    page.once('dialog', dialog => dialog.dismiss());
    await page.getByRole('button', { name: /Restart/ }).click();
    assert.match(await page.locator('#panelTitle').textContent(), /Woman in Black/);
    assert.equal(await page.locator('#badge').textContent(), '3');
    await solveDeduction(page);
    await page.getByRole('button', { name: 'She came by train and travelled along a muddy road.' }).click();
    await page.getByRole('button', { name: /Hear the visitor’s story/ }).click();
    await interviewAndClose(page);
    page.once('dialog', dialog => dialog.dismiss());
    await page.getByRole('button', { name: 'Play Chapter I again' }).click();
    assert.match(await page.locator('#panelTitle').textContent(), /Words She Cannot Forget/);
    assert.equal(await page.locator('#badge').textContent(), '7');
    page.once('dialog', dialog => dialog.accept());
    await page.getByRole('button', { name: 'Play Chapter I again' }).click();
    assert.match(await page.locator('#panelTitle').textContent(), /An Early Visitor/);
    assert.equal(await page.locator('#badge').textContent(), '0');
    assert.equal(await page.getByRole('button', { name: /Teacher Mode: ON/ }).getAttribute('aria-pressed'), 'true');
  } finally { await context.close(); }
});

test('keyboard navigation, case dialog Escape, small mobile layout, and reduced motion', async () => {
  const context = await browser.newContext({ viewport: { width: 375, height: 812 }, reducedMotion: 'reduce' });
  await serveLocalApp(context);
  const page = await context.newPage();
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  const noOverflow = async () => {
    const size = await page.evaluate(() => ({ width: document.documentElement.clientWidth, scrollWidth: document.documentElement.scrollWidth, viewport: innerWidth, media: matchMedia('(max-width:930px)').matches, offenders: [...document.querySelectorAll('body *')].map(el => ({ tag: el.tagName, id: el.id, className: el.className, right: Math.round(el.getBoundingClientRect().right), width: Math.round(el.getBoundingClientRect().width) })).filter(el => el.right > innerWidth + 1).slice(0,10) }));
    assert.equal(size.scrollWidth, size.width, JSON.stringify(size));
  };
  const tab = () => page.keyboard.press('Tab');
  const enter = () => page.keyboard.press('Enter');
  const tabUntil = async pattern => {
    const seen = [];
    for (let i = 0; i < 18; i++) {
      const focused = await page.evaluate(() => ({ tag: document.activeElement.tagName, text: document.activeElement.innerText || document.activeElement.textContent || '' }));
      seen.push(`${focused.tag}:${focused.text}`);
      if (focused.tag === 'BUTTON' && pattern.test(focused.text)) return;
      await tab();
    }
    assert.fail(`Keyboard focus did not reach ${pattern}; saw ${seen.join(' -> ')}`);
  };
  try {
    await page.goto(pageUrl);
    await tabUntil(/Open the book/i);
    assert.match(await page.evaluate(() => document.activeElement.textContent), /Open the book/);
    await enter();
    assert.equal(await page.evaluate(() => document.activeElement.id), 'panelTitle');
    assert.match(await page.locator('#panelTitle').textContent(), /Watson’s Bedroom/);
    await noOverflow();
    await tabUntil(/Who is she, Holmes/); await enter();
    assert.match(await page.locator('#panelTitle').textContent(), /A Woman in Black/);
    await tabUntil(/Look at the glove/); await enter();
    assert.equal(await page.evaluate(() => document.activeElement.innerText.includes('Look at the glove')), true);
    await noOverflow();
    await tabUntil(/Examine the left sleeve/); await enter();
    await tabUntil(/Watch her expression/); await enter();
    await noOverflow();
    await tabUntil(/Make a deduction/i); await enter();
    assert.match(await page.locator('#panelTitle').textContent(), /What Can You Conclude/);
    await tabUntil(/She came by train and travelled along a muddy road/); await enter();
    assert.equal(await page.evaluate(() => document.activeElement.classList.contains('action')), true);
    await noOverflow();
    await enter();
    await tabUntil(/Tell us about Stoke Moran/); await enter();
    await tabUntil(/What happened to your sister/); await enter();
    await tabUntil(/Did Julia notice anything unusual/); await enter();
    await tabUntil(/Listen to Julia’s last words/i); await enter();
    assert.match(await page.locator('#panelTitle').textContent(), /Words She Cannot Forget/);
    await noOverflow();
    await tabUntil(/Review Watson’s Case File/i); await enter();
    assert.equal(await page.locator('#caseDialog').evaluate(el => el.open), true);
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#caseDialog').evaluate(el => el.open), false);
    assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Review Watson’s Case File');
    assert.equal(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches), true);
    await noOverflow();
    assert.deepEqual(pageErrors, []);
  } finally { await context.close(); }
});
