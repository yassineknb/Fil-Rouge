import React from 'react';

const WorkoutSummary = ({ stats }) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
            <h3 className="font-bold text-blue-900 mb-6 text-lg">Résumé de la séance</h3>

            <div className="space-y-6">
                <SummaryItem label="Volume total" value={stats.totalVolume} highlight />
                <SummaryItem label="Exercices" value={stats.totalExercises} />
                <SummaryItem label="Séries totales" value={stats.totalSets} />
                <SummaryItem label="RPE moyen" value={stats.avgRpe} />
            </div>
        </div>
    );
};

const SummaryItem = ({ label, value, highlight }) => (
    <div className="flex justify-between items-center border-b border-gray-50 pb-4 last:border-0 last:pb-0">
        <span className="text-sm text-gray-500">{label}</span>
        <span className={`font-bold ${highlight ? 'text-xl text-blue-900' : 'text-gray-900'}`}>{value}</span>
    </div>
);

export default WorkoutSummary;
