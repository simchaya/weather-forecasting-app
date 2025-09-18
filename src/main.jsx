// src/main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css'; // Global styles for the app
import App from './App.jsx';  // Main app component

// Find the root div in index.html where React will mount the app
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render the app inside StrictMode
// StrictMode helps detect potential problems in development
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
