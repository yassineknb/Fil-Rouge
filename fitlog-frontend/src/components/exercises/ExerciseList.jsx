import React from 'react';
import { Edit2, Trash2, Dumbbell, Activity, Plus } from 'lucide-react';

const ExerciseList = ({ exercises, onEdit, onDelete, workoutType }) => {
    if (!exercises || exercises.length === 0) {
        return (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200">
                <Dumbbell className="mx-auto h-12 w-12 text-gray-300 mb-3" />
                <h3 className="text-lg font-medium text-gray-600">Aucun exercice</h3>
                <p className="text-gray-400 text-sm">Ajoutez votre premier exercice pour commencer la séance.</p>
            </div>
        );
    }

    // Dynamic Labels & Config
    const getUiConfig = (type) => {
        switch (type) {
            case 'Cardio': return { repLabel: 'Blocs (10min)', showWeight: false, weightLabel: '' };
            case 'Stretching': return { repLabel: 'Blocs (10min)', showWeight: false, weightLabel: '' };
            case 'HIIT': return { repLabel: 'Répétitions', showWeight: true, weightLabel: 'Poids (opt)' };
            default: return { repLabel: 'Répétitions', showWeight: true, weightLabel: 'Poids (kg)' };
        }
    };

    const uiConfig = getUiConfig(workoutType);

    // Helper des couleurs RPE
    const getRpeColor = (rpe) => {
        if (!rpe) return 'bg-gray-100 text-gray-500';
        if (rpe >= 9) return 'bg-red-50 text-red-600 font-bold';
        if (rpe >= 7) return 'bg-orange-50 text-orange-600 font-medium';
        return 'bg-green-50 text-green-600 font-medium';
    };

    return (
        <div className="space-y-6">
            {exercises.map((exercise) => (
                <div key={exercise.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">

                    {/* Header: Title + Actions */}
                    <div className="flex justify-between items-center p-5 border-b border-gray-50 bg-gray-50/30">
                        <div className="flex items-center gap-3">
                            <h3 className="text-lg font-bold text-blue-900">{exercise.name}</h3>
                            {exercise.calories && (
                                <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-full border border-orange-100 flex items-center gap-1">
                                    <Activity size={10} /> {exercise.calories} kcal
                                </span>
                            )}
                            {exercise.notes && (
                                <span className="text-xs text-gray-400 bg-white px-2 py-1 rounded-full border border-gray-100">
                                    {exercise.notes}
                                </span>
                            )}
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => onEdit(exercise)}
                                className="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            >
                                <Edit2 size={16} />
                            </button>
                            <button
                                onClick={() => onDelete(exercise.id)}
                                className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Table of Sets */}
                    <div className="p-0">
                        <table className="w-full text-sm">
                            <thead className="bg-white text-gray-400 text-xs uppercase tracking-wider font-semibold border-b border-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left w-20">#</th>
                                    <th className="px-6 py-3 text-left">{uiConfig.repLabel}</th>
                                    {uiConfig.showWeight && (
                                        <th className="px-6 py-3 text-left">{uiConfig.weightLabel}</th>
                                    )}
                                    <th className="px-6 py-3 text-right">RPE</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {exercise.sets && exercise.sets.map((set, index) => (
                                    <tr key={set.id || index} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-3 text-blue-900 font-bold">{set.set_number || index + 1}</td>
                                        <td className="px-6 py-3 text-gray-700">{set.reps}</td>
                                        {uiConfig.showWeight && (
                                            <td className="px-6 py-3 text-gray-900 font-bold">
                                                {parseFloat(set.weight) > 0 ? parseFloat(set.weight) : '-'}
                                            </td>
                                        )}
                                        <td className="px-6 py-3 text-right">
                                            {set.rpe ? (
                                                <span className={`inline-block px-2.5 py-0.5 rounded-md text-xs ${getRpeColor(set.rpe)}`}>
                                                    {set.rpe}
                                                </span>
                                            ) : '-'}
                                        </td>
                                    </tr>
                                ))}
                                {(!exercise.sets || exercise.sets.length === 0) && (
                                    <tr>
                                        <td colSpan={uiConfig.showWeight ? 4 : 3} className="px-6 py-4 text-center text-gray-300 italic">
                                            Aucune série enregistrée.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExerciseList;
