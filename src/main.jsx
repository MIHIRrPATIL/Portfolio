import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './themeContext'
import './index.css'; // Your global CSS
import { BrowserRouter } from 'react-router-dom';

// Create a root element for React to manage
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render your App component wrapped in ThemeProvider
root.render(
 <BrowserRouter>
  <ThemeProvider>
    <App/>
  </ThemeProvider>
 </BrowserRouter>
);
