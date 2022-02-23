import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { AlertProvider } from './context/AlertContext';

ReactDOM.render(
  <AlertProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AlertProvider>,
  document.getElementById('root'),
);
