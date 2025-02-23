import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { render } from './main.ssr.tsx';
import '../App.css';
import '../index.css';
const app = express();
const PORT = 9000;
const __dirname = path.resolve();

// app.get('/', (_req, res) => {
//   res.send('Hello World!');
// });

// 静的ファイルの提供
app.use('/React.js-kiso-4-v4', express.static(path.join(__dirname, 'dist/client'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.set('Content-Type', 'application/javascript');
    } else if (path.endsWith('.css')) {
      res.set('Content-Type', 'text/css');
    } else if (path.endsWith('.svg')) {
      res.set('Content-Type', 'image/svg+xml');
    }
  }
}));

// favicon.icoのリクエストを無視する
app.get('/favicon.ico', (_req, res) => {
  res.status(204).end(); // 204 No Content 応答でアイコンのリクエストを無視
});

app.get('*', (_req, res) => {
  console.log(_req.url);
  // ReactコンポーネントをSSRでレンダリング
  const html = ReactDOMServer.renderToString(render({ url: _req.url }));

  const result = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My SSR App</title>
        <link rel="stylesheet" href="/React.js-kiso-4-v4/styles.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/React.js-kiso-4-v4/assets/index-CFHJ3z3p.js" type="module"></script>
      </body>
    </html>
  `;
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});