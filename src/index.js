import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import './App.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);