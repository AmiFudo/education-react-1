import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Create from './Create';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Create />
    <App />
  </React.StrictMode>
);
reportWebVitals();
