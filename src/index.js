import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './navbar.js';
import App from './App.js';
import Feature from './feature.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './product.js'
import SlideShow from './carousel.js'

ReactDOM.render(
  <React.StrictMode>
    <Header  />

    <SlideShow />

    <Feature />

  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
