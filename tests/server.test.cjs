const { test } = require('node:test');
const assert = require('node:assert/strict');
const { EventEmitter } = require('node:events');
const path = require('node:path');

const serverModule = import('../tools/serve.mjs');

test('server uses PORT first, keeps the default and legacy port setting', async () => {
  const { getPort } = await serverModule;
  assert.equal(getPort({}), 4173);
  assert.equal(getPort({ M02_PORT: '4174' }), 4174);
  assert.equal(getPort({ PORT: '5180' }), 5180);
  assert.equal(getPort({ PORT: '5180', M02_PORT: '4174' }), 5180);
  assert.equal(getPort({ PORT: '' }), 4173);
});

test('server rejects invalid port values with a clear configuration error', async () => {
  const { getPort } = await serverModule;
  for (const value of ['abc', '0', '-1', '65536', '4173.5']) {
    assert.throws(() => getPort({ PORT: value }), /Invalid PORT value.*integer from 1 to 65535/);
  }
});

test('server reports occupied and access-denied ports without an unhandled listen error', async () => {
  const { listenWithDiagnostics } = await serverModule;
  class FakeServer extends EventEmitter {
    listen(port, host, callback) { this.listenArgs = { port, host, callback }; return this; }
  }
  for (const [code, expected] of [
    ['EADDRINUSE', /already in use.*PORT = '5180'/],
    ['EACCES', /Windows may have excluded\/reserved.*netsh interface ipv4 show excludedportrange/],
    ['EPERM', /Windows may have excluded\/reserved/]
  ]) {
    const server = new FakeServer();
    const errors = [];
    const exitCodes = [];
    listenWithDiagnostics(server, { port: 5180, errorLog: message => errors.push(message), setExitCode: code => exitCodes.push(code) });
    assert.deepEqual(server.listenArgs && { port: server.listenArgs.port, host: server.listenArgs.host }, { port: 5180, host: '127.0.0.1' });
    server.emit('error', Object.assign(new Error('bind failed'), { code }));
    assert.match(errors[0], expected);
    assert.deepEqual(exitCodes, [1]);
  }
});

test('server start message reports the actual listening port', async () => {
  const { listenWithDiagnostics } = await serverModule;
  class FakeServer extends EventEmitter {
    listen(port, host, callback) { this.callback = callback; return this; }
    address() { return { port: 5180, address: '127.0.0.1', family: 'IPv4' }; }
  }
  const server = new FakeServer();
  const messages = [];
  listenWithDiagnostics(server, { port: 0, log: message => messages.push(message) });
  server.callback();
  assert.deepEqual(messages, ['The Baker Street Cases: http://127.0.0.1:5180']);
});

test('request handler serves the entry page and ES modules with correct MIME types', async () => {
  const { createRequestHandler } = await serverModule;
  const handler = createRequestHandler(path.resolve(__dirname, '..'));
  async function request(url) {
    const result = { headers: {}, body: '' };
    const response = {
      writeHead(status, headers = {}) { result.status = status; result.headers = headers; return this; },
      end(body = '') { result.body = body.toString(); }
    };
    await handler({ url }, response);
    return result;
  }
  const page = await request('/');
  const module = await request('/src/main.js');
  const missing = await request('/not-a-file.js');
  assert.equal(page.status, 200);
  assert.equal(page.headers['content-type'], 'text/html; charset=utf-8');
  assert.match(page.body, /type="module"/);
  assert.equal(module.status, 200);
  assert.equal(module.headers['content-type'], 'text/javascript; charset=utf-8');
  assert.match(module.body, /mountChapterTwo/);
  assert.equal(missing.status, 404);
});
