import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

const ExerciseCard = ({ exercise }) => {

    const getRPEColor = (rpe) => {
        if (rpe >= 9) return 'bg-red-100 text-red-700';
        if (rpe >= 8) return 'bg-orange-100 text-orange-700';
        if (rpe >= 7) return 'bg-yellow-100 text-yellow-700';
        return 'bg-emerald-100 text-emerald-700';
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">

            {/* Card Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <h3 className="font-bold text-blue-900 text-lg">{exercise.name}</h3>
                <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-emerald-500 transition-colors p-1"><Edit2 size={16} /></button>
                    <button className="text-gray-400 hover:text-red-500 transition-colors p-1"><Trash2 size={16} /></button>
                </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-4 px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                <div>Série</div>
                <div>Répétitions</div>
                <div>Poids (kg)</div>
                <div className="text-right">RPE</div>
            </div>

            {/* Sets List */}
            <div className="px-6 py-2">
                {exercise.sets.map((set, index) => (
                    <div key={index} className="grid grid-cols-4 py-3 items-center text-sm border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors rounded-lg px-2 -mx-2">
                        <div className="font-bold text-blue-900">{set.setNumber}</div>
                        <div className="text-gray-600">{set.reps}</div>
                        <div className="font-bold text-gray-900">{set.weight}</div>
                        <div className="text-right">
                            <span className={`inline-block w-6 h-6 leading-6 text-center rounded-md text-xs font-bold ${getRPEColor(set.rpe)}`}>
                                {set.rpe}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ExerciseCard;
