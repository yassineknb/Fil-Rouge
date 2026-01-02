import React from 'react';
import WorkoutCard from './WorkoutCard';

const WorkoutList = ({ workouts, loading, error, onEdit, onDelete }) => {
    if (loading) {
        return <p className="text-center py-8 text-gray-500">Chargement des séances...</p>;
    }

    if (error) {
        return <p className="text-center py-8 text-red-500">{error}</p>;
    }

    if (workouts.length === 0) {
        return (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
                <h3 className="text-lg font-bold text-gray-700 mb-2">Aucune séance trouvée</h3>
                <p className="text-gray-500 mb-6">Commencez par créer votre première séance d'entraînement !</p>
            </div>
        );
    }

    return (
        <div>
            {workouts.map(workout => (
                <WorkoutCard
                    key={workout.id}
                    workout={workout}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default WorkoutList;
