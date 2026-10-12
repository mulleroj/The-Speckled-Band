const { after, before, test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const root = path.resolve(__dirname, '..');
const pageUrl = 'http://m04.test/?chapter=ch02';
let browser;
before(async () => { browser = await chromium.launch({ headless:true, ...(process.platform==='win32'?{channel:'chrome'}:{}) }); });
after(async () => { if(browser) await browser.close(); });

async function open(contextOptions={}) {
  const context=await browser.newContext(contextOptions);
  await context.route('http://m04.test/**', route => {
    const url=new URL(route.request().url());
    if(url.pathname==='/'||url.pathname==='/index.html') return route.fulfill({status:200,contentType:'text/html; charset=utf-8',body:fs.readFileSync(path.join(root,'index.html'),'utf8')});
    const file=path.resolve(root,`.${decodeURIComponent(url.pathname)}`);
    if(!file.startsWith(root+path.sep)||!fs.existsSync(file)) return route.fulfill({status:404,body:'Not found'});
    const contentType=file.endsWith('.js')?'text/javascript; charset=utf-8':file.endsWith('.png')?'image/png':'application/octet-stream';
    return route.fulfill({status:200,contentType,body:fs.readFileSync(file)});
  });
  const page=await context.newPage();
  await page.goto(pageUrl);
  return {context,page};
}

async function completeChapterTwo(page, responseName) {
  await page.getByRole('button',{name:responseName}).click();
  await page.getByRole('button',{name:/The marks prove/}).click();
  await page.getByRole('button',{name:/Five marks are visible/}).click();
  await page.getByRole('button',{name:/Continue/}).click();
  await page.getByRole('button',{name:/The whistle caused Julia/}).click();
  await page.getByRole('button',{name:/The whistle and her last words/}).click();
  await page.getByRole('button',{name:/Continue/}).click();
  await page.getByRole('button',{name:/Say nothing/}).click();
  await page.getByRole('button',{name:/After Roylott leaves/}).click();
  await page.getByRole('button',{name:/A strong man must/}).click();
  await page.getByRole('button',{name:/Roylott bent the poker here/}).click();
  await page.getByRole('button',{name:/Wait for Holmes/}).click();
  await page.getByRole('button',{name:/The will proves/}).click();
  await page.getByRole('button',{name:/A daughter’s marriage could reduce the income/}).click();
  await page.getByRole('button',{name:/Continue/}).click();
  await page.getByRole('button',{name:/What can we observe for ourselves/}).click();
  assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('baker-street-save:v2:case.speckled-band')).chapters.ch02.completed),true);
}

test('complete Chapter II browser path: six scenes, retries, four clues, Case File, reload and responsive layout', async () => {
  const {context,page}=await open({viewport:{width:390,height:844},reducedMotion:'reduce'});
  const pageErrors=[];page.on('pageerror',error=>pageErrors.push(error.message));
  try {
    assert.match(await page.locator('#panelTitle').textContent(),/The Hidden Bruises/);
    assert.equal(await page.evaluate(()=>matchMedia('(prefers-reduced-motion: reduce)').matches),true);
    if(await page.locator('#teacherToggle').getAttribute('aria-pressed')==='false') await page.locator('#teacherToggle').click();
    assert.doesNotMatch(await page.locator('#teacherNote').innerText(),/B records|C is the careful|C is supported|possible financial motive/i);
    const s01Ids=await page.locator('#storyCopy [data-content-id]').evaluateAll(nodes=>nodes.map(node=>node.dataset.contentId));
    assert.ok(s01Ids.includes('ch02.s01.narration.01'));assert.ok(s01Ids.includes('ch02.s01.holmes.01'));
    await page.getByRole('button',{name:/Case File 1/}).click();
    const earlyFile=await page.locator('#evidenceList').innerText();
    assert.match(earlyFile,/Marks on Helen’s wrist/);assert.doesNotMatch(earlyFile,/Roylott’s warning|bent poker|Holmes’s report about the will|Inference, not an evidence record/);
    const initialSave=await page.evaluate(()=>localStorage.getItem('baker-street-save:v2:case.speckled-band'));
    await page.getByRole('tab',{name:'Case File'}).focus();await page.keyboard.press('ArrowRight');
    assert.equal(await page.getByRole('tab',{name:'Evidence Board'}).getAttribute('aria-selected'),'true');
    assert.deepEqual(await page.locator('#evidenceBoard [data-evidence-id]').evaluateAll(nodes=>nodes.map(node=>node.dataset.evidenceId)),['helen-wrist-marks']);
    assert.match(await page.locator('#evidenceBoard [data-evidence-id="helen-wrist-marks"]').innerText(),/Observation.*Origin: Chapter II · The Hidden Bruises/s);
    assert.doesNotMatch(await page.locator('#evidenceBoard').innerText(),/Roylott’s warning|bent poker|report about the will|Watson’s working hypothesis/);
    assert.equal(await page.evaluate(()=>localStorage.getItem('baker-street-save:v2:case.speckled-band')),initialSave,'switching board tabs must not mutate saved progress');
    await page.getByRole('button',{name:'Close ×'}).click();
    await page.getByRole('button',{name:/You may take your time/}).focus();
    await page.keyboard.press('Enter');
    await page.getByRole('button',{name:/Helen says her stepfather/}).click();
    await page.getByRole('button',{name:/The marks prove/}).click();
    await page.getByRole('button',{name:/Five marks are visible/}).click();
    await page.getByRole('button',{name:/Continue/}).click();
    assert.match(await page.locator('#panelTitle').textContent(),/A Difficult Puzzle/);
    await page.getByRole('button',{name:/The whistle caused Julia/}).click();
    await page.reload();
    assert.match(await page.locator('#panelTitle').textContent(),/A Difficult Puzzle/);
    assert.equal(await page.locator('#badge').textContent(),'1');
    assert.match(await page.locator('#feedback').textContent(),/has not shown a cause/);
    await page.getByRole('button',{name:/Julia’s last words tell us exactly/}).click();
    await page.getByRole('button',{name:/The whistle and her last words/}).click();
    await page.getByRole('button',{name:/Continue/}).click();
    assert.match(await page.locator('#panelTitle').textContent(),/The Unwelcome Visitor/);
    await page.getByRole('button',{name:/made your warning clear/}).click();
    assert.equal(await page.locator('#badge').textContent(),'3');
    await page.getByRole('button',{name:/After Roylott leaves/}).click();
    assert.match(await page.locator('#panelTitle').textContent(),/The Bent Poker/);
    assert.equal(await page.getByText(/We saw what he did here/).count(),0,'Holmes must wait for Watson’s answer');
    await page.getByRole('button',{name:/A strong man must/}).click();
    await page.getByRole('button',{name:/Roylott bent the poker here/}).click();
    await page.getByRole('button',{name:/The poker shows what happened/}).click();
    await page.getByRole('button',{name:/Roylott bent the poker here/}).click();
    await page.getByRole('button',{name:/Wait for Holmes/}).click();
    assert.match(await page.locator('#panelTitle').textContent(),/The Price of Marriage/);
    await page.getByRole('button',{name:/Case File/}).click();
    await page.getByRole('tab',{name:'Evidence Board'}).click();
    assert.match(await page.locator('#evidenceBoard [data-evidence-id="marriage-income"]').innerText(),/Reported research.*The Price of Marriage/s);
    assert.equal(await page.locator('#evidenceBoard [data-hypothesis="true"]').filter({hasText:'Watson’s reading of the figures'}).count(),0,'the motive hypothesis stays hidden before Watson attempts it');
    await page.getByRole('button',{name:'Close ×'}).click();
    await page.getByRole('button',{name:/The will proves/}).click();
    await page.getByRole('button',{name:/Case File/}).click();await page.getByRole('tab',{name:'Evidence Board'}).click();
    assert.match(await page.locator('#evidenceBoard [data-hypothesis="true"]').filter({hasText:'Watson’s reading of the figures'}).innerText(),/not confirmed.*The will proves Roylott killed Julia/s);
    await page.getByRole('button',{name:'Close ×'}).click();
    await page.getByRole('button',{name:/The figures show that marriage/}).click();
    assert.equal(await page.getByRole('button',{name:/Prepare to leave/}).count(),0);
    assert.equal(await page.getByText(/Either marriage would reduce/).count(),0,'Holmes must wait for Watson’s answer');
    await page.getByRole('button',{name:/A daughter’s marriage could reduce the income/}).click();
    assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('baker-street-save:v2:case.speckled-band')).chapters.ch02.choices['answer.4']),'ch02.s05.answer.motive-not-proof');
    await page.getByRole('button',{name:/Continue/}).click();
    assert.match(await page.locator('#panelTitle').textContent(),/The Journey Begins/);
    await page.getByRole('button',{name:/What should we check first/}).click();
    await page.getByRole('button',{name:/What can we observe for ourselves/}).click();
    await page.getByRole('button',{name:/Which parts of Helen’s account/}).click();
    await page.reload();
    assert.match(await page.locator('#panelTitle').textContent(),/The Journey Begins/);
    await page.getByRole('button',{name:'Review the Case File'}).click();
    const caseText=await page.locator('#evidenceList').innerText();
    for(const text of ['Prior account','Marks on Helen’s wrist','Roylott’s warning','The bent poker','Holmes’s report about the will']) assert.ok(caseText.includes(text),`missing ${text}`);
    await page.getByRole('button',{name:'Close ×'}).click();
    await page.setViewportSize({width:390,height:844});
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
    const saved=await page.evaluate(()=>JSON.parse(localStorage.getItem('baker-street-save:v2:case.speckled-band')));
    assert.equal(saved.version,3);assert.equal(saved.activeChapterId,'ch02');assert.equal(saved.chapters.ch02.completed,true);
    assert.deepEqual(saved.chapters.ch02.clues,['helen-wrist-marks','roylott-threat','bent-poker','marriage-income']);
    assert.deepEqual(pageErrors,[]);
  } finally { await context.close(); }
});

test('all six approved Chapter II illustrations use the shared stage at requested desktop and mobile viewports', async () => {
  const scenes=[
    ['ch02.s01.hidden-bruises','scene.case01.ch02-s01.hidden-bruises__v01__approved.png','The Man from Stoke Moran','The Hidden Bruises','A quiet moment in the Baker Street sitting room.','221B Baker Street · Morning'],
    ['ch02.s02.difficult-puzzle','scene.case01.ch02-s02.difficult-puzzle__v01__approved.png','The Man from Stoke Moran','A Difficult Puzzle','Helen has left. The questions remain.','221B Baker Street · Morning'],
    ['ch02.s03.unwelcome-visitor','scene.case01.ch02-s03.unwelcome-visitor__v01__approved.png','The Man from Stoke Moran','The Unwelcome Visitor','The door opens without warning.','221B Baker Street · Morning'],
    ['ch02.s04.bent-poker','scene.case01.ch02-s04.holmes-straightens-poker__v01__approved.png','The Man from Stoke Moran','The Bent Poker','Holmes straightens the iron.','221B Baker Street · Morning'],
    ['ch02.s05.price-of-marriage','scene.case01.ch02-s05.price-of-marriage__v01__approved.png','The Man from Stoke Moran','The Price of Marriage','Holmes has returned with the figures.','221B Baker Street · Near one o’clock'],
    ['ch02.s06.journey-begins','scene.case01.ch02-s06.journey-begins__v01__approved.png','DEPARTURE FROM WATERLOO','The Journey Begins','The investigation moves beyond London.','Waterloo → Leatherhead']
  ];
  for(const viewport of [{width:1440,height:900},{width:1920,height:1080},{width:1024,height:768},{width:390,height:844}]){
    const {context,page}=await open({viewport,reducedMotion:'reduce'});const errors=[];page.on('pageerror',error=>errors.push(error.message));page.on('console',message=>{if(message.type()==='error')errors.push(message.text());});
    try{
      for(let index=0;index<scenes.length;index++){
        const [sceneId,file,eyebrow,title,subtitle,clock]=scenes[index];await page.locator('#awakeningArt').evaluate(image=>image.decode());
        const image=await page.locator('#awakeningArt').evaluate(node=>({src:node.getAttribute('src'),alt:node.alt,visible:!node.hidden&&getComputedStyle(node).display!=='none',loaded:node.complete&&node.naturalWidth===1536&&node.naturalHeight===1024,fit:getComputedStyle(node).objectFit,stage:(()=>{const r=document.querySelector('#visualStage').getBoundingClientRect();return {width:r.width,height:r.height,position:getComputedStyle(document.querySelector('#visualStage')).position};})(),blurredFill:getComputedStyle(document.querySelector('#visualStage .stage-art'),'::before').display,heading:getComputedStyle(document.querySelector('#visualStage .scene-heading')).display,title:document.querySelector('#panelTitle').textContent,stageTitle:document.querySelector('#stageTitle').textContent,eyebrow:document.querySelector('#stageEyebrow').textContent,subtitle:document.querySelector('#stageSubtitle').textContent,clock:document.querySelector('#stageClock').textContent}));
        assert.equal(image.visible,true,`${sceneId} visible at ${viewport.width}`);assert.equal(image.loaded,true,`${sceneId} original dimensions`);assert.ok(image.src.endsWith(file),`${sceneId} selects the approved illustration`);assert.ok(image.alt.length>15,`${sceneId} descriptive alt`);assert.equal(image.title,title);assert.notEqual(image.heading,'none','the shared scene overlay is visible');assert.equal(image.stageTitle,image.title,`${sceneId} stage title matches the reading-panel title`);assert.equal(image.eyebrow,eyebrow,`${sceneId} receives its own upper label`);assert.equal(image.subtitle,subtitle,`${sceneId} receives its own subtitle`);assert.equal(image.clock,clock,`${sceneId} location and time match the scene`);
        assert.equal(await page.locator('#artCredit').count(),0,`${sceneId} does not render the technical production caption`);assert.doesNotMatch(await page.locator('body').innerText(),/Approved scene illustration · v01/);
        const folder=index===5?'waterloo-station':'baker-street';const response=await page.evaluate(async path=>{const result=await fetch(path);return {status:result.status,type:result.headers.get('content-type')};},`/assets/visual/variants/scenes/${folder}/${file}`);
        assert.equal(response.status,200,`${sceneId} fixture asset response`);assert.match(response.type,/image\/png/);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth===document.documentElement.clientWidth),true,`${sceneId} no horizontal overflow`);
        if(viewport.width>930){assert.equal(image.fit,'cover');assert.ok(Math.abs(image.stage.width/image.stage.height-1.5)<.01,`${sceneId} desktop stage is 3:2`);assert.equal(image.stage.position,'sticky','desktop stage is conditionally sticky');}
        else{assert.equal(image.fit,'contain',`${sceneId} mobile keeps the complete approved frame`);assert.equal(image.stage.position,'relative');assert.equal(image.blurredFill,'none','the decorative blur does not cover the approved mobile image');}
        if(index===0&&(viewport.width===1440||viewport.width===1024)){
          const before=await page.evaluate(()=>({height:document.documentElement.scrollHeight,width:document.documentElement.scrollWidth}));
          await page.evaluate(()=>scrollTo(0,Math.min(260,document.documentElement.scrollHeight-innerHeight)));
          const scrolled=await page.locator('#visualStage').evaluate(node=>({top:node.getBoundingClientRect().top,bottom:node.getBoundingClientRect().bottom}));
          assert.ok(scrolled.top>0,'the long Chapter II scene can be scrolled');assert.ok(Math.abs(scrolled.top-12)<1,'the image stage stays sticky at its top offset');assert.ok(scrolled.bottom<=viewport.height,'the full image stage remains in the viewport');
          assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth),before.width,'sticky scrolling adds no horizontal overflow');await page.evaluate(()=>scrollTo(0,0));
        }
        if(index===0){await page.getByRole('button',{name:/Does your wrist need care/}).click();await page.getByRole('button',{name:/Five marks are visible/}).click();await page.getByRole('button',{name:/Continue/}).click();}
        else if(index===1){await page.getByRole('button',{name:/The whistle and her last words/}).click();await page.getByRole('button',{name:/Continue/}).click();}
        else if(index===2){await page.getByRole('button',{name:/Say nothing/}).click();await page.getByRole('button',{name:/After Roylott leaves/}).click();}
        else if(index===3){await page.getByRole('button',{name:/Roylott bent the poker here/}).click();await page.getByRole('button',{name:/Wait for Holmes/}).click();}
        else if(index===4){await page.getByRole('button',{name:/A daughter’s marriage could reduce the income/}).click();await page.getByRole('button',{name:/Continue/}).click();}
        if(index===5&&viewport.width===1440){const output=path.join(root,'artifacts','m06.3-visual-integration','s06-overlay-audit-1440x900.png');fs.mkdirSync(path.dirname(output),{recursive:true});await page.screenshot({path:output});}
      }
      assert.deepEqual(errors,[],'no uncaught browser errors');
    }finally{await context.close();}
  }
});

test('Chapter II overlay typography and spacing match the Chapter I shared stage', async () => {
  for(const viewport of [{width:1440,height:900},{width:390,height:844}]){
    const {context,page}=await open({viewport,reducedMotion:'reduce'});
    try{
      const chapterTwoStyle=await page.evaluate(()=>{
        const selectors=['.scene-top','#stageIndex','.clock','.scene-heading','.scene-heading .eyebrow','#stageTitle','#stageSubtitle'];
        return selectors.map(selector=>{const node=document.querySelector(selector),style=getComputedStyle(node);return [selector,...['display','position','flexDirection','gap','fontFamily','fontSize','fontWeight','letterSpacing','lineHeight','marginTop','marginBottom','paddingTop','paddingRight','paddingBottom','paddingLeft','color','textShadow'].map(key=>style[key])];});
      });
      await page.goto('http://m04.test/?chapter=ch01');
      await page.locator('#awakeningArt').evaluate(image=>image.decode());
      const chapterOneStyle=await page.evaluate(()=>{
        const selectors=['.scene-top','#stageIndex','.clock','.scene-heading','.scene-heading .eyebrow','#stageTitle','#stageSubtitle'];
        return selectors.map(selector=>{const node=document.querySelector(selector),style=getComputedStyle(node);return [selector,...['display','position','flexDirection','gap','fontFamily','fontSize','fontWeight','letterSpacing','lineHeight','marginTop','marginBottom','paddingTop','paddingRight','paddingBottom','paddingLeft','color','textShadow'].map(key=>style[key])];});
      });
      assert.deepEqual(chapterTwoStyle,chapterOneStyle,`Chapter II stage overlay uses the same visual rules at ${viewport.width}px`);
    }finally{await context.close();}
  }
});

test('alternate Watson responses and challenge retries remain available in browser', async () => {
  const {context,page}=await open();
  try {
    await page.getByRole('button',{name:/Does your wrist need care/}).click();
    await page.getByRole('button',{name:/The marks prove/}).click();
    assert.match(await page.locator('#feedback').textContent(),/do not tell us how Julia died/);
    await page.getByRole('button',{name:/Five marks are visible/}).click();
    await page.getByRole('button',{name:/Continue/}).click();
    await page.getByRole('button',{name:/The whistle and her last words/}).click();
    await page.getByRole('button',{name:/Continue/}).click();
    await page.getByRole('button',{name:/Say nothing/}).focus();
    await page.keyboard.press('Enter');
    assert.match(await page.evaluate(()=>document.activeElement.textContent),/After Roylott leaves/);
    await page.getByRole('button',{name:/After Roylott leaves/}).click();
    assert.match(await page.locator('#panelTitle').textContent(),/The Bent Poker/);
  } finally { await context.close(); }
});

test('Chapter I can open Chapter II and Chapter III remains inactive', async () => {
  const {context,page}=await open({});
  try {
    await page.goto('http://m04.test/');
    await page.evaluate(()=>localStorage.setItem('baker-street-save:v2:case.speckled-band',JSON.stringify({format:'baker-street-save',version:3,caseId:'case.speckled-band',activeChapterId:'ch01',teacherMode:true,chapters:{ch01:{sceneId:'ch01.closing',approach:'ready',clues:['ticket','mud','fear','family','sister','whistle','lastwords'],interviews:['family','sister','whistle'],answer:'correct',feedback:'',choices:{},completed:true}}})));
    await page.reload();
    await page.getByRole('button',{name:'Chapters'}).click();
    await page.getByRole('dialog').getByRole('button',{name:/Chapter 2/}).click();
    await page.waitForURL(/chapter=ch02/);
    assert.match(await page.locator('#panelTitle').textContent(),/The Hidden Bruises/);
    assert.equal(await page.getByRole('button',{name:/Teacher Mode: ON/}).getAttribute('aria-pressed'),'true');
    await page.getByRole('button',{name:/Case File/}).first().click();
    const historical=await page.locator('#evidenceList').innerText();
    assert.match(historical,/Earlier Case File records/);assert.match(historical,/A return train ticket/);assert.match(historical,/Julia’s final words/);
    assert.doesNotMatch(historical,/Holmes’s report about the will|Roylott’s warning|bent poker|Inference, not an evidence record/);
    await page.getByRole('button',{name:'Close ×'}).click();
    await page.getByRole('button',{name:'Chapters'}).click();
    assert.equal(await page.getByRole('dialog').getByRole('button',{name:/Chapter 3/}).isDisabled(),true);
  } finally { await context.close(); }
});

test('Chapter I to Chapter II preserves history and completes the full second chapter', async () => {
  const {context,page}=await open({});
  try {
    await page.goto('http://m04.test/');
    await page.evaluate(()=>localStorage.clear());
    await page.reload();
    await page.getByRole('button',{name:'Open the book'}).click();
    await page.getByRole('button',{name:/Give me a moment/}).click();
    await page.getByRole('button',{name:'Look at the glove'}).click();
    await page.getByRole('button',{name:'Examine the left sleeve'}).click();
    await page.getByRole('button',{name:'Make a deduction'}).click();
    await page.getByRole('button',{name:/She came by train and travelled along a muddy road/}).click();
    await page.getByRole('button',{name:/Hear the visitor’s story/}).click();
    await page.getByRole('button',{name:/Did Julia notice anything unusual/}).click();
    await page.getByRole('button',{name:/Tell us about Stoke Moran/}).click();
    await page.getByRole('button',{name:/What happened to your sister/}).click();
    await page.getByRole('button',{name:/Listen to Julia’s last words/}).click();
    await page.getByRole('button',{name:/Review Watson’s Case File/}).click();
    await page.getByRole('tab',{name:'Evidence Board'}).click();
    assert.equal(await page.locator('#evidenceBoard [data-evidence-id]').count(),6);
    assert.equal(await page.locator('#evidenceBoard .evidence-type').filter({hasText:'Observation'}).count(),2);
    assert.equal(await page.locator('#evidenceBoard .evidence-type').filter({hasText:'Witness testimony'}).count(),4);
    assert.equal(await page.locator('#evidenceBoard [data-hypothesis="true"]').count(),1);
    assert.match(await page.locator('#evidenceBoard [data-hypothesis="true"]').innerText(),/not confirmed/);
    assert.doesNotMatch(await page.locator('#evidenceBoard').innerText(),/Holmes’s report about the will|Roylott’s warning|bent poker/);
    await page.getByRole('button',{name:'Close ×'}).click();
    await page.getByRole('button',{name:/Continue to Chapter II/}).click();
    await page.waitForURL(/chapter=ch02/);
    assert.match(await page.locator('#panelTitle').textContent(),/The Hidden Bruises/);
    assert.match(await page.locator('#teacherToggle').getAttribute('aria-pressed'),/^(true|false)$/);
    await completeChapterTwo(page,/Does your wrist need care/);
    await page.getByRole('button',{name:'Review the Case File'}).click();
    const history=await page.locator('#evidenceList').innerText();
    assert.match(history,/Earlier Case File records/);
    assert.match(history,/A return train ticket/);
    for(const clue of ['Marks on Helen’s wrist','Roylott’s warning','The bent poker','Holmes’s report about the will']) assert.ok(history.includes(clue),`missing ${clue}`);
    assert.doesNotMatch(history,/Inference, not an evidence record/);
    await page.getByRole('tab',{name:'Evidence Board'}).click();
    assert.equal(await page.locator('#evidenceBoard [data-evidence-id]').count(),10,'the board includes only the six earlier and four current records');
    assert.equal(await page.locator('#evidenceBoard [data-hypothesis="true"]').count(),3);
    assert.equal(await page.locator('#evidenceBoard .hypothesis-type').count(),3);
  } finally { await context.close(); }
});

test('blocked browser storage keeps Chapter II playable and shows a save warning', async () => {
  const {context,page}=await open();
  try {
    await context.addInitScript(()=>Object.defineProperty(window,'localStorage',{configurable:true,get(){throw new DOMException('Blocked','SecurityError');}}));
    await page.reload();
    assert.match(await page.locator('#panelTitle').textContent(),/The Hidden Bruises/);
    assert.match(await page.locator('#storyCopy').getByRole('status').innerText(),/browser could not save it/);
    await page.getByRole('button',{name:/You may take your time/}).click();
    await page.getByRole('button',{name:/Five marks are visible/}).click();
    assert.match(await page.locator('#storyCopy').getByRole('status').innerText(),/browser could not save it/);
  } finally { await context.close(); }
});
