import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { calculateExerciseCalories } from '../../utils/calorieData';

const DetailedStats = () => {
    const { workouts } = useSelector((state) => state.workouts);

    const stats = useMemo(() => {
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        const currentMonthWorkouts = workouts.filter(w => {
            const d = new Date(w.scheduled_at);
            return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
        });

        // 1. Time (Duration)
        let totalMinutes = 0;
        currentMonthWorkouts.forEach(w => {
            const str = w.duration || '';
            if (str.includes('h')) {
                const parts = str.split('h');
                totalMinutes += (parseInt(parts[0]) || 0) * 60;
                if (parts[1]) totalMinutes += parseInt(parts[1]) || 0;
            } else {
                totalMinutes += parseInt(str) || 0;
            }
        });
        const hours = Math.floor(totalMinutes / 60);
        const mins = totalMinutes % 60;
        const timeDisplay = `${hours}h ${mins}m`;

        // 2. Calories
        const calories = currentMonthWorkouts.reduce((acc, w) => {
            let val = parseInt(w.calories_burned) || 0;
            if (val === 0 && w.exercises) {
                val = w.exercises.reduce((eAcc, ex) => eAcc + calculateExerciseCalories(ex.name, ex.sets), 0);
            }
            return acc + val;
        }, 0);

        // 3. Frequency
        // Calculate based on days passed in the current month to get the *current* weekly pace.
        const daysInMonth = now.getDate();
        // Avoid division by zero or effectively infinite frequency on day 1
        // We consider at least 1 week logic to stabilize the start of the month or just use days/7
        const weeksPassed = Math.max(1, daysInMonth / 7);
        const freq = (currentMonthWorkouts.length / weeksPassed).toFixed(1);

        return {
            time: timeDisplay,
            calories: calories.toLocaleString(),
            frequency: `${freq}/semaine`
        };
    }, [workouts]);

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full">
            <h3 className="text-xl font-bold text-[#1e293b] mb-8 border-b border-gray-100 pb-4">Statistiques détaillées</h3>

            <div className="max-w-xl">
                <h4 className="text-sm font-bold text-gray-400 uppercase mb-6 tracking-wide">Résumé du mois</h4>
                <div className="space-y-6">

                    <div className="flex justify-between items-center py-2">
                        <span className="text-gray-500 font-medium text-sm">Temps d'entraînement total</span>
                        <span className="font-extrabold text-[#1e293b] text-lg">{stats.time}</span>
                    </div>

                    <div className="flex justify-between items-center py-2">
                        <span className="text-gray-500 font-medium text-sm">Calories brûlées</span>
                        <span className="font-extrabold text-[#1e293b] text-lg">{stats.calories}</span>
                    </div>

                    <div className="flex justify-between items-center py-2">
                        <span className="text-gray-500 font-medium text-sm">Fréquence d'entraînement</span>
                        <span className="font-extrabold text-[#1e293b] text-lg">{stats.frequency}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DetailedStats;
