// import React, { useState } from 'react';
// import {
//     BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
//     PieChart, Pie, Cell
// } from 'recharts';
// import classNames from 'classnames';
// import { useAuth } from '../../context/Authcontext';

// const Performance = () => {
//     const { user } = useAuth();
//     const [activeTab, setActiveTab] = useState('commits');

//     // Monthly Commit Data
//     const allCommits = user?.commitStats?.flatMap(repo => repo.commits) || [];
//     const monthlyGrouped = {};
//     allCommits.forEach(commit => {
//         const month = new Date(commit.date).toLocaleString('default', { month: 'short', year: 'numeric' });
//         if (!monthlyGrouped[month]) {
//             monthlyGrouped[month] = { month, commits: 0 };
//         }
//         monthlyGrouped[month].commits += 1;
//     });
//     const monthlyChartData = Object.values(monthlyGrouped).sort(
//         (a, b) => new Date(a.month) - new Date(b.month)
//     );

//     // Quality Metrics
//     const qualityMetrics = user?.qualityData || {
//         repoCount: 0,
//         popularity: 0,
//         activeProjects: 0,
//         communityEngagement: 0
//     };

//     const normalizedMetrics = [
//         {
//             label: 'Repository Count',
//             value: Math.min((qualityMetrics.repoCount / 50) * 100, 100),
//             color: 'bg-purple-500'
//         },
//         {
//             label: 'Popularity',
//             value: Math.min((qualityMetrics.popularity / 100) * 100, 100),
//             color: 'bg-blue-500'
//         },
//         {
//             label: 'Active Projects',
//             value: Math.min(((qualityMetrics.activeProjects / qualityMetrics.repoCount) || 0) * 100, 100),
//             color: 'bg-yellow-500'
//         },
//         {
//             label: 'Community Engagement',
//             value: Math.min((qualityMetrics.communityEngagement / 50) * 100, 100),
//             color: 'bg-red-500'
//         }
//     ];

//     // PR Stats
//     const pullRequests = user?.pullRequests || [];

//     const mergedPRs = pullRequests.filter(pr => pr.merged_at);
//     const openPRs = pullRequests.filter(pr => pr.state === 'open');
//     const closedPRs = pullRequests.filter(pr => pr.state === 'closed' && !pr.merged_at);
//     const totalPRs = pullRequests.length;

//     const prPieData = [
//         { name: 'Merged', value: mergedPRs.length, color: '#22c55e' },
//         { name: 'Open', value: openPRs.length, color: '#3b82f6' },
//         { name: 'Closed', value: closedPRs.length, color: '#f97316' },
//     ].filter(entry => entry.value > 0);

//     // Average merge time calculation
//     const averageMergeTime = (() => {
//         if (mergedPRs.length === 0) return null;
//         const totalDays = mergedPRs.reduce((acc, pr) => {
//             const created = new Date(pr.created_at);
//             const merged = new Date(pr.merged_at);
//             return acc + (merged - created) / (1000 * 60 * 60 * 24);
//         }, 0);
//         return totalDays / mergedPRs.length;
//     })();

//     // Format duration nicely
//     const formatDuration = (daysFloat) => {
//         const totalSeconds = daysFloat * 86400;

//         if (totalSeconds < 60) {
//             return `${totalSeconds.toFixed(1)} sec`;
//         } else if (totalSeconds < 3600) {
//             const minutes = totalSeconds / 60;
//             return `${minutes.toFixed(1)} min`;
//         } else if (totalSeconds < 86400) {
//             const hours = totalSeconds / 3600;
//             return `${hours.toFixed(1)} hrs`;
//         } else {
//             return `${daysFloat.toFixed(1)} days`;
//         }
//     };

//     const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
//         const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//         const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
//         const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

//         return (
//             <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12}>
//                 {`${name} ${(percent * 100).toFixed(0)}%`}
//             </text>
//         );
//     };

//     return (
//         <div className='w-full h-screen bg-[#1a1f2c] px-4 py-7 text-white'>
//             <div className='text-2xl font-bold mb-6'>Performance Metrics</div>

//             {/* Tab Selector */}
//             <div className='flex gap-2 mb-6'>
//                 {['commits', 'quality', 'prs'].map(tab => (
//                     <button
//                         key={tab}
//                         onClick={() => setActiveTab(tab)}
//                         className={classNames(
//                             'w-full px-4 py-2 rounded text-sm font-medium',
//                             activeTab === tab ? 'bg-[#a993ec] text-black' : 'bg-[#2e3651] text-white hover:bg-[#3e4b6b]'
//                         )}
//                     >
//                         {tab === 'commits' ? 'Monthly Commits' : tab === 'quality' ? 'Code Quality' : 'PR Stats'}
//                     </button>
//                 ))}
//             </div>

//             {/* Tab Content */}
//             {activeTab === 'commits' && (
//                 <div className='bg-[#21293b] p-6 rounded-md'>
//                     {monthlyChartData.length > 0 ? (
//                         <ResponsiveContainer width="100%" height={450}>
//                             <BarChart data={monthlyChartData}>
//                                 <CartesianGrid strokeDasharray="3 3" stroke="#2c334b" />
//                                 <XAxis dataKey="month" stroke="#ccc" />
//                                 <YAxis stroke="#ccc" />
//                                 <Tooltip contentStyle={{
//                                     backgroundColor: '#2c334b',
//                                     color: 'white',
//                                     borderRadius: '5px',
//                                     border: '0.5px solid rgba(255, 255, 255, 0.25)'
//                                 }} />
//                                 <Bar dataKey="commits" fill="#a993ec" />
//                             </BarChart>
//                         </ResponsiveContainer>
//                     ) : (
//                         <div className='text-center'>No commit data available</div>
//                     )}
//                 </div>
//             )}

//             {activeTab === 'quality' && (
//                 <div className='bg-[#21293b] p-6 rounded-md'>
//                     {normalizedMetrics.map(item => (
//                         <div key={item.label} className='mb-4'>
//                             <div className='flex justify-between'>
//                                 <span>{item.label}</span>
//                                 <span>{Math.round(item.value)}%</span>
//                             </div>
//                             <div className='w-full h-2 bg-gray-700 rounded-full mt-1'>
//                                 <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.value}%` }} />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}

//             {activeTab === 'prs' && (
//                 <div className='flex flex-col md:flex-row gap-6'>
//                     {/* Pie Chart */}
//                     <div className='bg-[#21293b] p-6 rounded-md flex-1 flex flex-col items-center justify-center'>
//                         {prPieData.length > 0 ? (
//                             <PieChart width={300} height={300}>
//                                 <Pie
//                                     data={prPieData}
//                                     dataKey="value"
//                                     nameKey="name"
//                                     cx="50%"
//                                     cy="50%"
//                                     innerRadius={0}
//                                     outerRadius={80}
//                                     label={renderCustomLabel}
//                                 >
//                                     {prPieData.map((entry, index) => (
//                                         <Cell key={`cell-${index}`} fill={entry.color} />
//                                     ))}
//                                 </Pie>
//                             </PieChart>
//                         ) : (
//                             <div className='text-gray-400 text-sm'>No PR data to display</div>
//                         )}
//                     </div>

//                     {/* Stats Summary */}
//                     <div className='bg-[#21293b] p-6 rounded-md flex-1 flex flex-col items-center justify-center text-center'>
//                         <div className='text-3xl font-bold mb-2'>{totalPRs}</div>
//                         <div className='text-sm mb-4'>Total Pull Requests</div>
//                         {averageMergeTime !== null ? (
//                             <>
//                                 <div className='text-xl font-semibold'>
//                                     ~{formatDuration(averageMergeTime)}
//                                 </div>
//                                 <div className='text-sm'>Average Time to Merge</div>
//                             </>
//                         ) : (
//                             <>
//                                 <div className='text-xl font-semibold'>—</div>
//                                 <div className='text-sm'>No Merged PRs</div>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Performance;
