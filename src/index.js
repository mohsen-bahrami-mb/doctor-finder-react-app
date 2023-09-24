import '@styles/index.css';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
  <BrowserRouter>
    <App />
  </BrowserRouter>
=======
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
>>>>>>> c125d013098694fa3017597e16e3c2d5a44f3d18
);
