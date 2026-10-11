import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(fileURLToPath(new URL('../', import.meta.url)));
const host = '127.0.0.1';
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png' };

export function getPort(env = process.env) {
  const configured = env.PORT ?? env.M02_PORT;
  if (configured == null || String(configured).trim() === '') return 4173;
  const port = Number(configured);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new RangeError(`Invalid PORT value ${JSON.stringify(configured)}. Choose an integer from 1 to 65535.`);
  }
  return port;
}

export function getMimeType(path) {
  return mime[extname(path)] || 'application/octet-stream';
}

export function formatListenError(error, bindHost, port) {
  const address = `${bindHost}:${port}`;
  if (error?.code === 'EADDRINUSE') {
    return `Unable to start The Baker Street Cases on ${address}: the address is already in use. Choose a free port, for example in PowerShell: $env:PORT = '5180'; npm start.`;
  }
  if (error?.code === 'EACCES' || error?.code === 'EPERM') {
    return `Unable to bind The Baker Street Cases to ${address} (${error.code}). Windows may have excluded/reserved this port or denied access. Check with: netsh interface ipv4 show excludedportrange protocol=tcp`;
  }
  return `Unable to start The Baker Street Cases on ${address}${error?.code ? ` (${error.code})` : ''}: ${error?.message || 'unknown listen error'}.`;
}

export function listenWithDiagnostics(server, { bindHost = host, port, log = console.log, errorLog = console.error, setExitCode = code => { process.exitCode = code; } }) {
  server.on('error', error => {
    errorLog(formatListenError(error, bindHost, port));
    setExitCode(1);
  });
  server.listen(port, bindHost, () => {
    const address = server.address();
    const listeningPort = address && typeof address === 'object' ? address.port : port;
    log(`The Baker Street Cases: http://${bindHost}:${listeningPort}`);
  });
  return server;
}

export function createRequestHandler(projectRoot = root) {
  return async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
      const target = resolve(projectRoot, `.${pathname === '/' ? '/index.html' : pathname}`);
      if (target !== projectRoot && !target.startsWith(projectRoot + sep)) { response.writeHead(403).end('Forbidden'); return; }
      const body = await readFile(target);
      response.writeHead(200, { 'content-type': getMimeType(target), 'x-content-type-options': 'nosniff' });
      response.end(body);
    } catch {
      response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('Not found');
    }
  };
}

function main() {
  let port;
  try {
    port = getPort();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
    return;
  }
  listenWithDiagnostics(createServer(createRequestHandler()), { port });
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) main();
