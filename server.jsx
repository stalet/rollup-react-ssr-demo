import Express from 'express';
import serveStatic from "serve-static";
import App from "./client/app";
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import template from "./template";

export default async function startServer({ port = 5000} = {}) {

    const app = new Express();

    app.get('/', (req, res, next) => {
        res.send(template(`
            <div id="root">${ReactDOMServer.renderToString(<App/>)}</div>
        `));
    });

    app.use('/assets', serveStatic('./dist'));

    await app.listen(port);
}
