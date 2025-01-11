import React from 'react';
import ReactDom from 'react-dom/client';

import App from './App';
function Hello(){
    return (
    <a href = "https://cricinfo.com">Cricket</a>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        <Hello/>
    </React.StrictMode>
);