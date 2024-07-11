import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import { HashRouter } from 'react-router-dom';
import App from './app/App';
import { ResizeProvider } from './app/providers/ResizeProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
   // <React.StrictMode>
   <HashRouter>
      <ResizeProvider>
         <App />
      </ResizeProvider>
   </HashRouter>,
   // </React.StrictMode>,
);
