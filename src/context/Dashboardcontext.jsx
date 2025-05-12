import { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState(null);

  return (
  <DashboardContext.Provider value={{ dashboardData, setDashboardData }}>
    {children}
  </DashboardContext.Provider>
);
};

