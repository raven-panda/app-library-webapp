import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.tsx';
import I18nextInit from './_i18n/I18nextInit.tsx';
import { getInitialTheme } from './hook/Theme.tsx';

// Initializing i18next for language management
I18nextInit();

// Initializing theme to avoid color flash
document.body.classList.toggle('dark', getInitialTheme() === 'dark');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
