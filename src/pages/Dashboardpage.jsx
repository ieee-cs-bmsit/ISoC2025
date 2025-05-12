import React, { useState, useEffect } from 'react';
import Sidebar from '../components/dashboardcomp/Sidebar';
import Repositories from '../components/dashboardcomp/Repositories';
// import Activity from '../components/dashboardcomp/Activity';
// import Performance from '../components/dashboardcomp/Performance';
import Commits from '../components/dashboardcomp/Commits';
import Profile from '../components/dashboardcomp/Profile';
// import Overview from '../components/dashboardcomp/Overview';
import axios from 'axios';
import { useAuth } from '../context/Authcontext';
import { toast } from 'react-hot-toast';
import { useDashboard } from '../context/Dashboardcontext';
import Loading from '../components/dashboardcomp/Loading';

const Dashboardpage = () => {
  const [open, setOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('profile');
  // const {dashboardData, setDashboardData} = useDashboard();


  //  useEffect(() => {
  //   const fetchDashboardData = async () => {
  //     try {
  //       const res = await axios.get(`https://isoc-backend-s21v.onrender.com/api/dashboard/${user._id}/dashboard`, {
  //         withCredentials: true,
  //       });
  //       console.log('Dashboard data:', res.data);
  //       setDashboardData(res.data);
  //     } catch (err) {
  //       console.error('Error fetching dashboard data', err);
  //       toast.error('Failed to load dashboard');
  //     }
  //   };

  //   if (user && !dashboardData) {
  //     fetchDashboardData();
  //   }
  // }, [user, dashboardData, setDashboardData]);

  const renderContent = () => {
    // if (!dashboardData) return <Loading />; 

    switch (activeItem) {
      // case 'overview':
      //   return <Overview />;
      case 'profile':
        return <Profile />;
      case 'repositories':
        return <Repositories />;
      // case 'activity':
      //   return <Activity/>;
      // case 'performance':
      //   return <Performance />;
      case 'commits':
        return <Commits/>;
      
      default:
        return <Profile />;
    }
  };

  return (
    <section className="flex w-full font-sans bg-[#eeeeee] text-[#000">
      <Sidebar open={open} setOpen={setOpen} activeItem={activeItem} setActiveItem={setActiveItem} />
      <main
        className={`transition-all duration-300 ease-in-out w-full ${
          open ? 'md:ml-[17%]' : 'md:ml-17'
        } md:pb-0 pb-14 pt-28`}
      >
        {renderContent()}
      </main>
    </section>
  );
};

export default Dashboardpage;
