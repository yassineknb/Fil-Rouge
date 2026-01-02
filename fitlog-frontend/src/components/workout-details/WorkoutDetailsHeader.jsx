import React from 'react';
import { ChevronRight, Calendar, Clock, Dumbbell, Edit2, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkoutDetailsHeader = ({ workout }) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Link to="/workouts" className="hover:text-primary transition-colors">Séances</Link>
                <ChevronRight size={14} />
                <span className="text-gray-400">Séance du {workout.date}</span>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-blue-900 mb-4">{workout.title}</h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-emerald-500" />
                            {workout.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} className="text-emerald-500" />
                            {workout.duration}
                        </div>
                        <div className="flex items-center gap-2">
                            <Dumbbell size={18} className="text-emerald-500" />
                            {workout.type}
                        </div>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-lg transition-colors shadow-sm">
                        <Edit2 size={16} /> Modifier
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-bold rounded-lg transition-colors shadow-sm">
                        <Trash2 size={16} /> Supprimer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailsHeader;
