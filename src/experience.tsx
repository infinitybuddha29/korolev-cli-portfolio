import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/inter';
import '@fontsource-variable/jetbrains-mono';
import './styles/tokens.css';
import './styles/reset.css';
import './styles/global.css';
import { Experience } from './pages/Experience';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Experience />
  </StrictMode>,
);
