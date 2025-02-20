import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <HelmetProvider>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </HelmetProvider>
  );
}