import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RepoProvider } from './context/Repocontext.jsx';

createRoot(document.getElementById('root')).render(
    <Router>
      <RepoProvider><App /></RepoProvider>
      
    </Router>
);
