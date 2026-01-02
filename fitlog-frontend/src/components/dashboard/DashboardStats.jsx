import React, { useMemo } from 'react';
import { TrendingUp, Calendar, Zap, BarChart2 } from 'lucide-react';
import { calculateExerciseCalories } from '../../utils/calorieData';

const DashboardStats = ({ workouts = [] }) => {

   // --- STATISTICS CALCULATION ---
   const stats = useMemo(() => {
      const now = new Date();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();

      // Helper: Get Week Number
      const getWeek = (date) => {
         const d = new Date(date);
         d.setHours(0, 0, 0, 0);
         d.setDate(d.getDate() + 4 - (d.getDay() || 7));
         const yearStart = new Date(d.getFullYear(), 0, 1);
         return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
      };
      const currentWeek = getWeek(now);

      // Filter Workouts
      const currentMonthWorkouts = workouts.filter(w => {
         const d = new Date(w.scheduled_at);
         return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
      });

      const prevDate = new Date(now);
      prevDate.setMonth(now.getMonth() - 1);
      const prevMonth = prevDate.getMonth();
      const prevYear = prevDate.getFullYear();

      const prevMonthWorkouts = workouts.filter(w => {
         const d = new Date(w.scheduled_at);
         return d.getMonth() === prevMonth && d.getFullYear() === prevYear;
      });

      // 1. Sessions Count (Month)
      const sessionsCount = currentMonthWorkouts.length;
      const prevSessionsCount = prevMonthWorkouts.length;


      // 2. Sessions Count (Week)
      const currentWeekWorkouts = workouts.filter(w => {
         const d = new Date(w.scheduled_at);
         return getWeek(d) === currentWeek && d.getFullYear() === currentYear;
      });
      const weekSessionsCount = currentWeekWorkouts.length;

      // 3. Volume (Month) - approximation
      const volumeCount = currentMonthWorkouts.reduce((acc, w) => {
         if (w.exercises) {
            return acc + w.exercises.reduce((eAcc, ex) => {
               return eAcc + (ex.sets?.reduce((sAcc, s) => sAcc + (parseInt(s.reps) * parseFloat(s.weight || 0)), 0) || 0);
            }, 0);
         }
         return acc;
      }, 0);

      // 4. Calories (Month Scope)
      const calculateTotalCalories = (workoutList) => {
         return workoutList.reduce((acc, w) => {
            const stored = parseInt(w.calories_burned) || 0;
            if (stored > 0) return acc + stored;

            if (w.exercises) {
               return acc + w.exercises.reduce((eAcc, ex) => {
                  return eAcc + calculateExerciseCalories(ex.name, ex.sets);
               }, 0);
            }
            return acc;
         }, 0);
      };

      const caloriesCount = calculateTotalCalories(currentMonthWorkouts);
      const prevCaloriesCount = calculateTotalCalories(prevMonthWorkouts);



      // Chart Data (Weeks 1-4)
      const weeks = [0, 0, 0, 0];
      currentMonthWorkouts.forEach(w => {
         const d = new Date(w.scheduled_at);
         const date = d.getDate();
         if (date <= 7) weeks[0]++;
         else if (date <= 14) weeks[1]++;
         else if (date <= 21) weeks[2]++;
         else weeks[3]++;
      });

      return {
         weekSessionsCount,
         sessionsCount,
         volumeCount,
         caloriesCount,
         weeks
      };
   }, [workouts]);

   // --- CHART SCALING LOGIC ---
   const maxVal = Math.max(...stats.weeks, 5);
   const scaleY = (val) => 100 - (val / maxVal) * 80;
   const p1 = `${scaleY(stats.weeks[0])}`;
   const p2 = `${scaleY(stats.weeks[1])}`;
   const p3 = `${scaleY(stats.weeks[2])}`;
   const p4 = `${scaleY(stats.weeks[3])}`;
   const pathLine = `M100,${p1} L433,${p2} L766,${p3} L1100,${p4}`;
   const pathArea = `${pathLine} V150 H100 Z`;

   return (
      <div className="space-y-6 mb-12">
         {/* Stats Cards Row */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sessions Week */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 relative overflow-hidden group hover:shadow-md transition-shadow">
               <div className="w-1.5 h-12 bg-emerald-400 rounded-full"></div>
               <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Séances cette semaine</div>
                  <div className="text-3xl font-bold text-blue-900">{stats.weekSessionsCount}</div>
               </div>
               <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-emerald-50 p-3 rounded-xl text-emerald-500 opacity-80 group-hover:scale-110 transition-transform">
                  <Calendar size={24} />
               </div>
            </div>

            {/* Séances ce mois */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center group hover:shadow-md transition-shadow relative overflow-hidden">
               <div className="w-1.5 h-12 bg-blue-400 rounded-full absolute left-6 top-1/2 -translate-y-1/2"></div>
               <div className="pl-6">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Séances ce mois</div>
                  <div className="text-3xl font-bold text-blue-900 mb-1">{stats.sessionsCount}</div>
               </div>
               <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                  <Calendar size={20} />
               </div>
            </div>

            {/* Volume Total */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 relative overflow-hidden group hover:shadow-md transition-shadow">
               <div className="w-1.5 h-12 bg-purple-400 rounded-full"></div>
               <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Volume (mois)</div>
                  <div className="text-3xl font-bold text-blue-900">{stats.volumeCount.toLocaleString()} <span className="text-sm font-normal text-gray-400">kg</span></div>
               </div>
               <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-50 p-3 rounded-xl text-purple-500 opacity-80 group-hover:scale-110 transition-transform">
                  <BarChart2 size={24} />
               </div>
            </div>

            {/* Calories Brûlées */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center group hover:shadow-md transition-shadow relative overflow-hidden">
               <div className="w-1.5 h-12 bg-orange-400 rounded-full absolute left-6 top-1/2 -translate-y-1/2"></div>
               <div className="pl-6">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Calories (mois)</div>
                  <div className="text-3xl font-bold text-blue-900 mb-1">{stats.caloriesCount.toLocaleString()}</div>
               </div>
               <div className="bg-orange-50 p-3 rounded-xl text-orange-500">
                  <Zap size={20} />
               </div>
            </div>
         </div>

         {/* Chart Container Big */}
         <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-8">
               <h3 className="text-lg font-bold text-blue-900">Progression Mensuelle</h3>
               <div className="text-xs text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-full">Ce mois</div>
            </div>

            <div className="relative h-64 w-full bg-emerald-50/20 rounded-xl overflow-hidden group">
               {/* Grille de fond */}
               <div className="absolute inset-0 grid grid-rows-4 w-full h-full">
                  <div className="border-b border-gray-100 w-full"></div>
                  <div className="border-b border-gray-100 w-full"></div>
                  <div className="border-b border-gray-100 w-full"></div>
                  <div className="border-b border-gray-100 w-full"></div>
               </div>

               {/* Axe Y (Dynamic labels) */}
               <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-gray-400 py-2 pl-2">
                  <span>{Math.round(maxVal)}</span>
                  <span>{Math.round(maxVal * 0.75)}</span>
                  <span>{Math.round(maxVal * 0.5)}</span>
                  <span>{Math.round(maxVal * 0.25)}</span>
                  <span>0</span>
               </div>

               {/* Chart Line & Area */}
               <svg className="absolute top-0 left-8 right-0 h-full w-[calc(100%-2rem)]" viewBox="0 0 1200 150" preserveAspectRatio="none">
                  <defs>
                     <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                     </linearGradient>
                  </defs>
                  <path
                     d={pathLine}
                     vectorEffect="non-scaling-stroke"
                     fill="none"
                     stroke="#10B981"
                     strokeWidth="3"
                     className="drop-shadow-sm"
                  />
                  <path
                     d={pathArea}
                     fill="url(#chartGradient)"
                  />
               </svg>

               {/* Axe X */}
               <div className="absolute bottom-0 left-8 right-0 flex justify-between px-10 pb-2 text-[10px] text-gray-400">
                  <span>Sem 1</span><span>Sem 2</span><span>Sem 3</span><span>Sem 4</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default DashboardStats;
