import React from 'react';
import { Activity, Plus } from 'lucide-react';
import ExerciseList from '../exercises/ExerciseList';

const WorkoutExercises = ({
    exercises,
    workoutType,
    limitReached,
    usedBlocks,
    maxBlocks,
    onAdd,
    onEdit,
    onDelete
}) => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold text-blue-900">Exercices de la séance</h2>
                {limitReached ? (
                    <div className="flex items-center gap-2 text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100 text-sm font-medium">
                        <Activity size={16} />
                        Durée max atteinte ({usedBlocks}/{maxBlocks} blocs)
                    </div>
                ) : (
                    <button
                        onClick={onAdd}
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg shadow-md transition-all text-sm"
                    >
                        <Plus size={18} /> Ajouter un exercice
                    </button>
                )}
            </div>

            <ExerciseList
                exercises={exercises}
                onEdit={onEdit}
                onDelete={onDelete}
                workoutType={workoutType}
            />
        </div>
    );
};

export default WorkoutExercises;
