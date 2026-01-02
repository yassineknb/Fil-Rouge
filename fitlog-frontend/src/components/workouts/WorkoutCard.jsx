import React from 'react';
import { Clock, Dumbbell, Edit2, Trash2, ChevronDown, Droplet, Zap, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkoutCard = ({ workout, onEdit, onDelete }) => {

    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette séance ?')) {
            onDelete(workout.id);
        }
    };

    // Helper des couleurs...
    const getBadgeColor = (type) => {
        switch (type) {
            case 'Musculation': return 'bg-indigo-100 text-indigo-700';
            case 'Cardio': return 'bg-emerald-100 text-emerald-700';
            case 'HIIT': return 'bg-purple-100 text-purple-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 mb-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                {/* Badge & Date */}
                <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getBadgeColor(workout.type)}`}>
                        {workout.type || 'N/A'}
                    </span>
                    <span className="text-gray-400 text-sm font-medium">
                        {workout.scheduled_at ? new Date(workout.scheduled_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Date inconnue'}
                    </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => onEdit(workout)}
                        className="p-2 text-emerald-500 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors"
                        title="Modifier"
                    >
                        <Edit2 size={16} />
                    </button>
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="p-2 text-red-500 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                        title="Supprimer"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>

            {/* Title & Stats */}
            <div className="mb-3">
                <Link to={`/workouts/${workout.id}`} className="text-xl font-bold text-blue-900 mb-2 hover:text-primary transition-colors block">
                    {workout.title}
                </Link>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                        <Clock size={16} className="text-gray-400" />
                        {workout.duration || 'N/A'}
                    </div>
                    <div className="flex items-center gap-1.5">
                        {workout.type === 'Cardio' ? <Activity size={16} className="text-gray-400" /> : <Dumbbell size={16} className="text-gray-400" />}
                        {workout.exercises_count || (workout.exercises ? workout.exercises.length : 0)} exercices
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed">
                {workout.description}
            </p>
        </div>
    );
};

export default WorkoutCard;
