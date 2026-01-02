import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const WorkoutBreadcrumb = ({ title }) => {
    return (
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/workouts" className="hover:text-primary transition-colors">Mes Séances</Link>
            <ChevronRight size={14} />
            <span className="text-gray-600 font-medium truncate">{title}</span>
        </div>
    );
};

export default WorkoutBreadcrumb;
