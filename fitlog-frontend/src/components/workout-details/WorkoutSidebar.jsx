import React from 'react';
import { Activity } from 'lucide-react';
import WorkoutSummary from './WorkoutSummary';

const WorkoutSidebar = ({ totalCalories, workoutCalories, summaryStats }) => {
    return (
        <div className="space-y-6">
            {/* Calories Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-4">
                <div className="p-3 bg-orange-50 text-orange-500 rounded-full">
                    <Activity size={24} />
                </div>
                <div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Calories Brûlées</div>
                    <div className="text-2xl font-extrabold text-blue-900">
                        {totalCalories > 0 ? totalCalories.toLocaleString() : (workoutCalories ? parseInt(workoutCalories).toLocaleString() : '-')}
                    </div>
                </div>
            </div>

            <WorkoutSummary stats={summaryStats} />
        </div>
    );
};

export default WorkoutSidebar;
