import './index.css'
import App from './App.tsx'
import { HelmetProvider } from 'react-helmet-async'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage.tsx'
import { createRoot } from 'react-dom/client'
import { TestPage } from './pages/AIGenPages/TestPage.tsx'

const router1 = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '',
      element: <MainPage />
    },
    {
path: 'test',
element: <TestPage />
    }
  ]

}])

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <HelmetProvider>
      <React.StrictMode>
        <RouterProvider router={router1} />
      </React.StrictMode>
    </HelmetProvider>
  );
}