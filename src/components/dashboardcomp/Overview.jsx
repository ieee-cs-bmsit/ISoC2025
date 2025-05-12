// import React, { useState } from 'react';
// import { useAuth } from '../../context/Authcontext';
// import {
//     AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
// } from 'recharts';
// import dayjs from 'dayjs';
// import classNames from 'classnames';
// import ProfileComp from '../ProfileComp';

// const Overview = () => {
//     const { user } = useAuth();
//     const [mode, setMode] = useState('activity'); 

//     // All Commits (for both charts)
//     const allCommits = user?.commitStats?.flatMap(repo => repo.commits) || [];

//     // Group by Day (Commit Activity)
//     const grouped = {};
//     allCommits.forEach(commit => {
//         const date = dayjs(commit.date).format('MMM D');
//         if (!grouped[date]) {
//             grouped[date] = { date, additions: 0, deletions: 0, commits: 0 };
//         }
//         grouped[date].additions += commit.additions;
//         grouped[date].deletions += commit.deletions;
//         grouped[date].commits += 1;
//     });
//     const chartData = Object.values(grouped).sort((a, b) =>
//         dayjs(a.date, 'MMM D').isAfter(dayjs(b.date, 'MMM D')) ? 1 : -1
//     );
//     const maxY = Math.max(
//         ...chartData.map(item =>
//             mode === 'activity' ? item.commits : mode === 'added' ? item.additions : item.deletions
//         ),
//         0
//     );
//     const roundedMaxY = Math.ceil(maxY / 10) * 10 || 10;

//     // Group by Month (Monthly Commit Bar Chart)
//     const monthlyGrouped = {};
//     allCommits.forEach(commit => {
//         const month = dayjs(commit.date).format('MMM YYYY');
//         if (!monthlyGrouped[month]) {
//             monthlyGrouped[month] = { month, commits: 0 };
//         }
//         monthlyGrouped[month].commits += 1;
//     });

//     // Gradient colors for commit activity chart
//     const gradientColors = {
//         activity: { color: '#a993ec' },
//         added: { color: '#00ff90' },
//         removed: { color: '#ff5c5c' }
//     };
//     const currentColor = gradientColors[mode].color;

//     return (
//         <div className='w-full h-full bg-[#1a1f2c] flex flex-col py-7 px-4 text-white space-y-5'>
//             <div className='text-white text-2xl font-bold mb-6'>Overview</div>
//             <ProfileComp />

//             {/* Commit Activity Chart (full width) */}
//             <div className='w-full h-fit mx-auto bg-[#21293b] p-6 rounded-md mb-6'>
//                 <div className='flex justify-between items-center mb-4'>
//                     <h2 className='text-white text-xl font-semibold'>Commit Activity</h2>
//                     <div className='bg-[#21293b] p-1 rounded-md flex gap-1'>
//                         {['activity', 'added', 'removed'].map(m => (
//                             <button
//                                 key={m}
//                                 onClick={() => setMode(m)}
//                                 className={classNames(
//                                     'px-3 py-1 rounded text-sm font-medium',
//                                     mode === m ? 'bg-[#a993ec] text-[#1a1f2c]' : 'text-[#9aaab3] hover:bg-[#2e3651]'
//                                 )}
//                             >
//                                 {m.charAt(0).toUpperCase() + m.slice(1)}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {chartData.length > 0 ? (
//                     <ResponsiveContainer width="100%" height={300}>
//                         <AreaChart data={chartData}>
//                             <defs>
//                                 <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
//                                     <stop offset="0%" stopColor={currentColor} stopOpacity={0.6} />
//                                     <stop offset="75%" stopColor={currentColor} stopOpacity={0.1} />
//                                     <stop offset="100%" stopColor={currentColor} stopOpacity={0} />
//                                 </linearGradient>
//                             </defs>

//                             <CartesianGrid strokeDasharray="3 3" stroke="#2c334b" />
//                             <XAxis dataKey="date" stroke="#ccc" />
//                             <YAxis stroke="#ccc" domain={[0, roundedMaxY]} />
//                             <Tooltip contentStyle={{ backgroundColor: '#2c334b', color: 'white', borderRadius: '5px', border: '0.5px solid rgba(255, 255, 255, 0.25)' }} />
//                             <Legend />

//                             <Area
//                                 type="monotone"
//                                 dataKey={mode === 'activity' ? 'commits' : mode === 'added' ? 'additions' : 'deletions'}
//                                 stroke={currentColor}
//                                 fill="url(#fadeGradient)"
//                                 strokeWidth={2}
//                                 dot={{ r: 2 }}
//                                 activeDot={{ r: 4 }}
//                             />
//                         </AreaChart>
//                     </ResponsiveContainer>
//                 ) : (
//                     <div className='text-white text-center'>No commit data available</div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Overview;
