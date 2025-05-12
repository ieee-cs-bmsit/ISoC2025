import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/Authcontext';
import { GitBranch } from 'lucide-react';
import moment from 'moment';
import Loading from './Loading';
import { useDashboard } from '../../context/Dashboardcontext';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Commits = () => {
  const { user } = useAuth();
  const { dashboardData, setDashboardData } = useDashboard();
  const [filterState, setFilterState] = useState('closed'); // Default to closed PRs

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await axios.get(`https://isoc-backend-s21v.onrender.com/api/dashboard/${user._id}/dashboard`, {
          withCredentials: true,
        });
        setDashboardData(res.data);
      } catch (err) {
        console.error('Error fetching dashboard data', err);
        toast.error('Failed to load dashboard');
      }
    };

    if (user && !dashboardData) {
      fetchDashboardData();
    }
  }, [user, dashboardData, setDashboardData]);

  if (!dashboardData) return <Loading />;

  const pullRequests = user.pullRequests || [];
  const filteredPRs = pullRequests.filter(pr => pr.state === filterState);

  return (
    <div
      className="min-h-screen space-grotesk-regular w-full bg-fixed bg-cover bg-center px-4 py-10 md:px-20"
      style={{
        backgroundImage: "url('/images/repopagebg2.png')",
      }}
    >
      <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-center text-[#ee540e]"
      style={{
        fontFamily: "CameraObscuraDEMO, sans-serif",
        letterSpacing: 2,
        textShadow: `
          -2px -2px 0 #fff,
          2px -2px 0 #fff,
          -2px 2px 0 #fff,
          2px 2px 0 #fff,
          0px 2px 0 #fff,
          2px 0px 0 #fff,
          0px -2px 0 #fff,
          -2px 0px 0 #fff
        `,
      }}

      >Recent PRs</h2>
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md p-4 md:p-6 border rounded-md shadow-md">

        <div className="flex justify-center mb-6 gap-4">
          <button
            onClick={() => setFilterState('closed')}
            className={`px-4 py-2 rounded-md border cursor-pointer text-sm md:text-base ${filterState === 'closed'
              ? 'bg-[#1f3cfc] text-white'
              : 'bg-white text-gray-700 border-gray-300'
              }`}
          >
            Closed
          </button>
          <button
            onClick={() => setFilterState('open')}
            className={`px-4 py-2 rounded-md border cursor-pointer text-sm md:text-base ${filterState === 'open'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 border-gray-300'
              }`}
          >
            Open
          </button>
        </div>

        {filteredPRs.length === 0 ? (
          <p className="text-gray-500 text-center">No {filterState} PRs available.</p>
        ) : (
          filteredPRs.map((pr, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start justify-between py-4 border-b border-gray-300 last:border-b-0 gap-2 md:gap-0"
            >
              <div>
                <div className="flex flex-wrap gap-2 items-center">
                  <p className="text-gray-700 md:text-lg text-sm">#{pr.number}</p>
                  <a
                    href={pr.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold md:text-lg text-sm text-[#1f3cfc] hover:underline"
                  >
                    {pr.title}
                  </a>
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600 border border-gray-300">
                    {pr.repo.split('/')[1]}
                  </span>
                </div>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <GitBranch className="mr-1 text-purple-600" size={16} />
                  {user.displayName || user.username}
                  <span className="mx-2">•</span>
                  Created {moment(pr.created_at).fromNow()}
                </div>
              </div>
              <div className="text-right text-xs md:text-sm text-gray-500">
                {pr.merged_at ? `Merged ${moment(pr.merged_at).fromNow()}` : 'Not merged'}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Commits;
