import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './component/header';
import Body from './component/body';
import Footer from './component/footer';
import config from './config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header/>
    <Body information={config.information} education={config.education} about={config.discription} certificate={config.certificate} confrenses={config.confrenses} project={config.project} gallery={config.gallery}/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

