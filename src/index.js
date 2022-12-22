import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ContextProvider from "./context/ContextProvider.js"

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ContextProvider>

    <App />
 </ContextProvider>
);
