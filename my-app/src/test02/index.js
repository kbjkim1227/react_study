import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Library from './test01/Library';
import Clock from './test02/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));

    setInterval( ()=> {
    root.render(

    <Clock />
  
    );
    },1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();