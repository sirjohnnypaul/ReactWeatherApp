import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//importing component from App.js
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Grab div from app.js and render it in div of class "root"
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
