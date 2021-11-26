import Express from 'express';
import serveStatic from "serve-static";
import App from "./client/app";
import ReactDOMServer from 'react-dom/server';
import React from 'react';

export default async function startServer({ port = 5000} = {}) {

    const app = new Express();

    app.get('/', (req, res, next) => {
        res.send(`
            <html>
                <head>
                    <title>Rollup test</title>
                    <link href="/assets/script.js" crossorigin as="script" rel="preload">
                </head>
                <script src="/assets/script.js" type="module" crossorigin defer></script>
                <body>
                    <h1>Hello world</h1>
                    <main id="root">${ReactDOMServer.renderToString(<App/>)}</main>
                </body>
            </html>        
        `);
    });

    app.use('/assets', serveStatic('./dist'));

    await app.listen(port);
}
