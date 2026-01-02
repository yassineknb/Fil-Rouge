import React from 'react';
import { Calendar, Clock, Edit2, Trash2 } from 'lucide-react';

const WorkoutHeader = ({ workout, onEdit, onDelete }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
                <h1 className="text-3xl font-extrabold text-blue-900 mb-2">{workout.title}</h1>
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-1.5">
                        <Calendar size={16} className="text-primary" />
                        {new Date(workout.scheduled_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock size={16} className="text-primary" />
                        {workout.duration || 'N/A'}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-xs font-bold uppercase ${workout.type === 'Musculation' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                        {workout.type}
                    </span>
                </div>
            </div>

            <div className="flex gap-3">
                <button
                    onClick={onEdit}
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors shadow-sm text-sm"
                >
                    <Edit2 size={16} /> Modifier
                </button>
                <button
                    onClick={onDelete}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors shadow-sm text-sm"
                >
                    <Trash2 size={16} /> Supprimer
                </button>
            </div>
        </div>
    );
};

export default WorkoutHeader;
