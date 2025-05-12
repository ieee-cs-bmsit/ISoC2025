// import React, { useMemo } from 'react';
// import { useAuth } from '../../context/Authcontext';
// import moment from 'moment';

// const getDateKey = (date) => moment(date).format('YYYY-MM-DD');

// const getColor = (count) => {
//     if (count === 0) return 'bg-gray-800';
//     if (count < 2) return 'bg-green-900';
//     if (count < 4) return 'bg-green-700';
//     if (count < 6) return 'bg-green-500';
//     return 'bg-green-400';
// };

// const generateHeatmapData = (commits) => {
//     const contributions = {};
//     commits.forEach((commit) => {
//         const date = getDateKey(commit.date);
//         contributions[date] = (contributions[date] || 0) + 1;
//     });

//     const startDate = moment().subtract(35, 'weeks').startOf('isoWeek');
//     const weeks = [];

//     for (let i = 0; i < 36; i++) {
//         const week = [];
//         for (let j = 0; j < 7; j++) {
//             const date = moment(startDate).add(i, 'weeks').add(j, 'days');
//             const key = getDateKey(date);
//             week.push({
//                 date,
//                 count: contributions[key] || 0,
//             });
//         }
//         weeks.push(week);
//     }

//     return weeks;
// };

// const calculateStreaks = (contributionsMap) => {
//     const today = moment().startOf('day');
//     let currentStreak = 0;
//     let longestStreak = 0;
//     let streak = 0;

//     for (let i = 0; i <= 365; i++) {
//         const date = moment(today).subtract(i, 'days');
//         const key = getDateKey(date);
//         if (contributionsMap[key]) {
//             streak += 1;
//             if (streak > longestStreak) longestStreak = streak;
//             if (i === 0) currentStreak = streak;
//         } else {
//             if (i === 0) currentStreak = 0;
//             streak = 0;
//         }
//     }

//     return { currentStreak, longestStreak };
// };

// const Activity = () => {
//     const { user } = useAuth();
//     const commits = user?.commitStats?.[0]?.commits || [];

//     const heatmapData = useMemo(() => generateHeatmapData(commits), [commits]);

//     const contributionsMap = useMemo(() => {
//         const map = {};
//         commits.forEach((commit) => {
//             const date = getDateKey(commit.date);
//             map[date] = (map[date] || 0) + 1;
//         });
//         return map;
//     }, [commits]);

//     const total = commits.length;
//     const thisMonth = commits.filter((c) =>
//         moment(c.date).isSame(new Date(), 'month')
//     ).length;

//     const { currentStreak, longestStreak } = calculateStreaks(contributionsMap);

//     return (
//         <div className="px-4 py-7 w-full bg-[#1C2230] min-h-screen text-white font-sans">
//             <h1 className="text-2xl font-bold mb-6">Activity Streak</h1>

//             <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 gap-y-2 gap-x-6 text-center text-sm font-medium">
//                 <div>
//                     <div className="text-purple-400 text-3xl">{currentStreak}</div>
//                     <div className="text-gray-400">Current Streak</div>
//                 </div>
//                 <div>
//                     <div className="text-purple-400 text-3xl">{longestStreak}</div>
//                     <div className="text-gray-400">Longest Streak</div>
//                 </div>
//                 <div>
//                     <div className="text-purple-400 text-3xl">{thisMonth}</div>
//                     <div className="text-gray-400">This Month</div>
//                 </div>
//                 <div>
//                     <div className="text-purple-400 text-3xl">{total}</div>
//                     <div className="text-gray-400">Total</div>
//                 </div>
//             </div>

//             {/* Heatmap */}
//             <div className="w-full overflow-hidden">
//                 {/* Month Labels */}
//                 <div className="hidden md:grid grid-cols-[repeat(36,minmax(0,1fr))] gap-[2px] ml-[28px] text-xs text-gray-400 mb-1">
//                     {heatmapData.map((_, weekIndex) => {
//                         const sunday = heatmapData[weekIndex][0];
//                         return (
//                             <div key={weekIndex} className="text-center">
//                                 {sunday.date.date() <= 7 ? sunday.date.format('MMM') : ''}
//                             </div>
//                         );
//                     })}
//                 </div>

//                 <div className="flex flex-col sm:flex-col w-full">
//                     {/* Desktop (weekday rows) */}
//                     <div className="hidden md:flex flex-col w-full">
//                         {Array.from({ length: 7 }).map((_, dayIndex) => (
//                             <div key={dayIndex} className="flex items-center gap-[2px]">
//                                 <div className="w-[28px] text-right pr-1 text-xs text-gray-200">
//                                     {moment().day(dayIndex).format('ddd')}
//                                 </div>
//                                 <div className="grid grid-cols-[repeat(36,minmax(0,1fr))] gap-[2px] w-full">
//                                     {heatmapData.map((week, weekIndex) => {
//                                         const day = week[dayIndex];
//                                         return (
//                                             <div
//                                                 key={weekIndex}
//                                                 title={`${day.date.format('MMM D')}: ${day.count} commits`}
//                                                 className={`w-full aspect-square m-[2px] md:rounded-sm rounded-md ${getColor(day.count)}`}
//                                             />
//                                         );
//                                     })}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Mobile (weekday columns) */}
//                     {/* Mobile (rotated: weekdays as columns, months as row labels) */}
//                     <div className="md:hidden w-full overflow-auto">
//                         {/* Weekday Headers */}
//                         <div className="flex items-center ml-[40px] mb-1 gap-[2px]">
//                             {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
//                                 <div key={i} className="w-[40px] text-center text-xs text-gray-400">
//                                     {day}
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Grid with Month Labels */}
//                         <div className="flex flex-col gap-[2px]">
//                             {heatmapData.map((week, weekIndex) => (
//                                 <div key={weekIndex} className="flex items-center gap-[2px]">
//                                     {/* Month Label */}
//                                     <div className="w-[40px] text-right pr-1 text-xs text-gray-400">
//                                         {week[0].date.date() <= 7 ? week[0].date.format('MMM') : ''}
//                                     </div>

//                                     {/* Days */}
//                                     {week.map((day, dayIndex) => (
//                                         <div
//                                             key={dayIndex}
//                                             title={`${day.date.format('MMM D')}: ${day.count} commits`}
//                                             className={`w-[40px] aspect-square m-[1px] rounded-sm ${getColor(day.count)}`}
//                                         />
//                                     ))}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Legend */}
//                 <div className="mt-4 flex items-center justify-end gap-1 text-xs text-gray-400">
//                     <span>Less</span>
//                     <div className="md:w-[20px] md:h-[20px] w-[15px] h-[15px] bg-gray-800" />
//                     <div className="md:w-[20px] md:h-[20px] w-[15px] h-[15px] bg-green-900" />
//                     <div className="md:w-[20px] md:h-[20px] w-[15px] h-[15px] bg-green-700" />
//                     <div className="md:w-[20px] md:h-[20px] w-[15px] h-[15px] bg-green-500" />
//                     <div className="md:w-[20px] md:h-[20px] w-[15px] h-[15px] bg-green-400" />
//                     <span>More</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Activity;
