/// <reference path='../types/forge-viewer/index.d.ts' />

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function getToken(callback: (token: string, expires_in: number) => void) {
    console.debug(`getToken`);
    fetch('api/services/auth/viewtoken', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        response.json().then((token) => {
            callback(token.access_token, token.expires_in);
        });
    });
}

function init() {
    return new Promise((resolve, reject) => {
        const options = {
            getAccessToken: getToken
        };

        Autodesk.Viewing.Initializer(options, () => {
            resolve();
        });
    })
}

function initApp() {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

init().then(() => {
    initApp();
});
