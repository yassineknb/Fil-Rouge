import React from 'react';
import { Calendar, TrendingUp, Clock, Activity } from 'lucide-react';

const WorkoutStats = ({ workouts = [] }) => {

    // Helper to parse duration string (e.g. "1h 30min", "45min") to minutes
    const parseDuration = (durationStr) => {
        if (!durationStr) return 0;
        let totalMinutes = 0;
        const hoursMatch = durationStr.match(/(\d+)h/);
        const minutesMatch = durationStr.match(/(\d+)min/);

        if (hoursMatch) totalMinutes += parseInt(hoursMatch[1]) * 60;
        if (minutesMatch) totalMinutes += parseInt(minutesMatch[1]);

        // Fallback for just numbers (assuming minutes)
        if (!hoursMatch && !minutesMatch && !isNaN(parseInt(durationStr))) {
            totalMinutes += parseInt(durationStr);
        }

        return totalMinutes;
    };

    // Helper to format minutes back to "Xh Ym"
    const formatDuration = (totalMinutes) => {
        if (totalMinutes === 0) return "0h";
        const h = Math.floor(totalMinutes / 60);
        const m = totalMinutes % 60;
        if (h > 0 && m > 0) return `${h}h ${m}m`;
        if (h > 0) return `${h}h`;
        return `${m}m`;
    };

    // Logic Calculations
    const totalSessions = workouts.length;

    // This week
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() + 1); // Monday
    startOfWeek.setHours(0, 0, 0, 0);

    const sessionsThisWeek = workouts.filter(w => {
        const d = new Date(w.scheduled_at);
        return d >= startOfWeek;
    }).length;

    // Total Time
    const totalMinutes = workouts.reduce((acc, curr) => acc + parseDuration(curr.duration), 0);
    const totalTimeDisplay = formatDuration(totalMinutes);

    // Avg per week (Simplified: Total / (Unique Weeks or 1)) or just hardcode logic if needed
    // Let's rely on unique weeks found in data
    const uniqueWeeks = new Set(workouts.map(w => {
        const d = new Date(w.scheduled_at);
        return `${d.getFullYear()}-${Math.floor(d.getDate() / 7)}`; // Rought week identifier
    })).size || 1;

    const avgPerWeek = totalSessions > 0 ? (totalSessions / uniqueWeeks).toFixed(1) : "0";

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard
                label="Total Séances"
                value={totalSessions}
                icon={<Calendar size={18} />}
                color="text-blue-900"
            />
            <StatCard
                label="Cette Semaine"
                value={sessionsThisWeek}
                icon={<Activity size={18} />}
                color="text-emerald-500"
                highlight={sessionsThisWeek > 0}
            />
            <StatCard
                label="Temps Total"
                value={totalTimeDisplay}
                icon={<Clock size={18} />}
                color="text-blue-900"
            />
            <StatCard
                label="Moyenne/Sem"
                value={avgPerWeek}
                icon={<TrendingUp size={18} />}
                color="text-emerald-500"
                highlight={parseFloat(avgPerWeek) > 0}
            />
        </div>
    );
};

const StatCard = ({ label, value, icon, color, highlight }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-start">
        <div>
            <div className="text-sm text-gray-500 mb-2">{label}</div>
            <div className={`text-3xl font-bold ${highlight ? 'text-emerald-500' : 'text-blue-900'}`}>{value}</div>
        </div>
        <div className={`p-2 rounded-lg ${highlight ? 'bg-emerald-50 text-emerald-500' : 'bg-blue-50 text-blue-900'}`}>
            {icon}
        </div>
    </div>
);

export default WorkoutStats;
