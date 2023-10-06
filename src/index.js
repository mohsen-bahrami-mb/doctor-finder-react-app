import '@styles/index.css';

import App from './App';
import { BrowserRouter } from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

axios.defaults.baseURL = 'https://doctor-finder.iran.liara.run';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
