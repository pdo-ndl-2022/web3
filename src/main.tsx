import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/index.css';

declare global {
  interface Window {
      ethereum:any;
  }
}


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
