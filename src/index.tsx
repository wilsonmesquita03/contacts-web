import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalSyle from './styles/GlobalStyle';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalSyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
