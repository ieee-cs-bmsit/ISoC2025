import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { DashboardProvider } from './context/Dashboardcontext.jsx';

createRoot(document.getElementById('root')).render(
    <Router>
      <DashboardProvider>
      <App />
      </DashboardProvider>
    </Router>
);
