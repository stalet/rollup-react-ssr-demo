import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app";

window.addEventListener('DOMContentLoaded', function () {
    const rootPanel = document.getElementById('root');

    if (rootPanel) {
        console.log('Hydrating');
        ReactDOM.hydrateRoot(rootPanel,<App/>);
        console.log('Hydrated');
    }
});
