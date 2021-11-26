import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app";

window.addEventListener('DOMContentLoaded', function () {
    const rootPanel = document.getElementById('root');

    if (rootPanel) {
        console.log('Hydrating');
        ReactDOM.hydrate(<App/>, rootPanel);
        console.log('Hydrated');
    }
});
