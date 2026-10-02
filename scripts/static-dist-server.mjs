/**
 * Minimal static file server for dist/ (Playwright checks). Closes cleanly via closeAllConnections.
 */
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.mp4': 'video/mp4',
};

function safePath(rootDir, urlPath) {
  let p = decodeURIComponent(urlPath.split('?')[0]);
  if (p === '/' || p === '') p = '/index.html';
  if (p.endsWith('/')) p = `${p}index.html`;
  const normalized = path.normalize(p).replace(/^(\.\.[/\\])+/, '');
  const file = path.join(rootDir, normalized.replace(/^\//, ''));
  const root = path.resolve(rootDir);
  if (!file.startsWith(root)) return null;
  return file;
}

/**
 * @param {string} rootDir absolute path to dist
 * @param {number} port
 */
export function startStaticDistServer(rootDir, port) {
  const root = path.resolve(rootDir);
  const server = http.createServer((req, res) => {
    const file = safePath(root, req.url || '/');
    if (!file) {
      res.statusCode = 403;
      res.end('Forbidden');
      return;
    }
    fs.readFile(file, (err, data) => {
      if (err) {
        res.statusCode = err.code === 'ENOENT' ? 404 : 500;
        res.end(err.code === 'ENOENT' ? 'Not found' : 'Error');
        return;
      }
      const ext = path.extname(file).toLowerCase();
      res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
      res.end(data);
    });
  });

  return new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, '127.0.0.1', () => {
      resolve({
        port,
        async close() {
          if (typeof server.closeAllConnections === 'function') {
            server.closeAllConnections();
          }
          await new Promise((done) => server.close(() => done()));
        },
      });
    });
  });
}

export function waitForHttpPort(port, attempts = 40) {
  return new Promise((resolve, reject) => {
    let tries = 0;
    const tick = () => {
      const req = http.get(`http://127.0.0.1:${port}/index.html`, (res) => {
        res.resume();
        resolve();
      });
      req.on('error', () => {
        tries += 1;
        if (tries >= attempts) reject(new Error(`Port ${port} not ready`));
        else setTimeout(tick, 250);
      });
    };
    tick();
  });
}
