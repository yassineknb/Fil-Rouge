import React, { useState, useEffect } from 'react';
import { X, Save, Dumbbell, Activity, FileText, Plus, Trash2, Clock, Play } from 'lucide-react';
import { calculateExerciseCalories, CALORIE_REFERENCES } from '../../utils/calorieData';

const ExerciseFormModal = ({ isOpen, onClose, onSubmit, initialData, workoutType, maxBlocks = Infinity, currentUsedBlocks = 0 }) => {
    const [name, setName] = useState('');
    const [notes, setNotes] = useState('');
    const [calories, setCalories] = useState('');
    const [sets, setSets] = useState([]);



    // Filter available exercises based on workoutType
    const availableExercises = CALORIE_REFERENCES.filter(ex =>
        !workoutType || ex.category.toLowerCase() === workoutType.toLowerCase()
    );

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

    useEffect(() => {
        if (isOpen) {
            if (initialData) {
                setName(initialData.name || '');
                setNotes(initialData.notes || '');
                setCalories(initialData.calories || '');
                // Map existing sets or create default if migrating
                setSets(initialData.sets ? initialData.sets.map(s => ({ ...s })) : []);
            } else {
                setName('');
                setNotes('');
                setCalories('');
                setSets([{ reps: 10, weight: 0, rpe: '' }]); // Default 1 set
            }
        }
    }, [initialData, isOpen]);

    // REAL-TIME CALORIE CALCULATION
    useEffect(() => {
        if (name && sets.length > 0) {
            const calculated = calculateExerciseCalories(name, sets);
            setCalories(calculated);
        } else {
            setCalories(0);
        }
    }, [name, sets]); // Re-run when name or ANY set data changes

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAddSet = () => {
        setSets([...sets, { reps: 0, weight: 0, rpe: '' }]);
    };



    const handleSetChange = (index, field, value) => {
        const newSets = [...sets];
        newSets[index][field] = value;
        setSets(newSets);
    };

    const handleRemoveSet = (index) => {
        setSets(sets.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation: At least one set
        if (sets.length === 0) {
            alert("Veuillez ajouter au moins une série.");
            return;
        }

        // --- BLOCK LIMIT VALIDATION ---
        // If maxBlocks is finite (Cardio/Stretching)
        if (maxBlocks !== Infinity) {
            const newExerciseBlocks = sets.reduce((acc, s) => acc + (parseInt(s.reps) || 0), 0);
            const oldExerciseBlocks = initialData ? initialData.sets.reduce((acc, s) => acc + (parseInt(s.reps) || 0), 0) : 0;

            // Calculate potential total
            const projectedTotal = currentUsedBlocks - oldExerciseBlocks + newExerciseBlocks;

            if (projectedTotal > maxBlocks) {
                alert(`Impossible d'ajouter ces séries !\n\nVous avez utilisé ${currentUsedBlocks} blocs sur ${maxBlocks} autorisés.\nAvec cet ajout, vous arriveriez à ${projectedTotal} blocs.\n\nRéduisez le nombre de blocs ou augmentez la durée de la séance.`);
                return;
            }
        }

        // Format Payload
        const formattedSets = sets.map(s => ({
            reps: parseInt(s.reps) || 0,
            weight: parseFloat(s.weight) || 0,
            rpe: s.rpe === '' || s.rpe === null ? null : parseFloat(s.rpe)
        }));

        onSubmit({
            name,
            notes,
            calories: calories ? parseInt(calories) : 0,
            sets: formattedSets
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-200 my-8">

                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
                    <h2 className="text-xl font-bold text-blue-900">
                        {initialData ? 'Modifier l\'exercice' : 'Ajouter un exercice'}
                    </h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">

                    {/* Name, Calories & Notes */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-3">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nom de l'exercice</label>
                                {availableExercises.length > 0 ? (
                                    <select
                                        value={name}
                                        onChange={handleNameChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm bg-white"
                                    >
                                        <option value="">Sélectionner un exercice...</option>
                                        {availableExercises.map(ex => (
                                            <option key={ex.name} value={ex.name}>{ex.name}</option>
                                        ))}
                                        {/* Preserving existing value if not in list */}
                                        {name && !availableExercises.some(ex => ex.name === name) && (
                                            <option value={name}>{name}</option>
                                        )}
                                    </select>
                                ) : (
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        placeholder="Ex: Développé Couché"
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                                    />
                                )}
                            </div>
                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1 text-orange-600 flex items-center gap-1">
                                    <Activity size={14} /> Kcal
                                </label>
                                <input
                                    type="number"
                                    value={calories}
                                    readOnly
                                    placeholder="≈ 60"
                                    className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:outline-none bg-orange-50/10 text-sm font-medium text-orange-700 cursor-not-allowed"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Notes (Optionnel)</label>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                rows="1"
                                placeholder="Tempo, repos..."
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm resize-none"
                            ></textarea>
                        </div>
                    </div>



                    {/* Sets List */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium text-gray-700">Détail des séries</label>
                            <button type="button" onClick={handleAddSet} className="text-sm text-primary hover:text-emerald-700 font-medium flex items-center gap-1">
                                <Plus size={14} /> Une série vide
                            </button>
                        </div>

                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
                                    <tr>
                                        <th className="px-4 py-2 w-16 text-center">#</th>
                                        <th className="px-4 py-2">{uiConfig.repLabel}</th>
                                        {uiConfig.showWeight && <th className="px-4 py-2">{uiConfig.weightLabel}</th>}
                                        <th className="px-4 py-2">RPE (1-10)</th>
                                        <th className="px-4 py-2 w-10"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {sets.map((set, index) => (
                                        <tr key={index} className="group hover:bg-gray-50">
                                            <td className="px-4 py-2 text-center text-gray-400 font-medium">{index + 1}</td>
                                            <td className="px-4 py-2">
                                                <input
                                                    type="number"
                                                    value={set.reps}
                                                    onChange={(e) => handleSetChange(index, 'reps', e.target.value)}
                                                    className="w-full bg-transparent focus:bg-white border-none focus:ring-1 focus:ring-primary rounded px-2 py-1 text-center"
                                                />
                                            </td>
                                            {uiConfig.showWeight && (
                                                <td className="px-4 py-2">
                                                    <input
                                                        type="number"
                                                        value={set.weight}
                                                        onChange={(e) => handleSetChange(index, 'weight', e.target.value)}
                                                        className="w-full bg-transparent focus:bg-white border-none focus:ring-1 focus:ring-primary rounded px-2 py-1 text-center"
                                                    />
                                                </td>
                                            )}
                                            <td className="px-4 py-2">
                                                <input
                                                    type="number"
                                                    value={set.rpe}
                                                    onChange={(e) => handleSetChange(index, 'rpe', e.target.value)}
                                                    placeholder="-"
                                                    max="10"
                                                    className="w-full bg-transparent focus:bg-white border-none focus:ring-1 focus:ring-primary rounded px-2 py-1 text-center"
                                                />
                                            </td>
                                            <td className="px-4 py-2 text-right">
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveSet(index)}
                                                    className="text-gray-300 hover:text-red-500 p-1 opacity-0 group-hover:opacity-100 transition-all"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {sets.length === 0 && (
                                        <tr>
                                            <td colSpan={uiConfig.showWeight ? 5 : 4} className="px-4 py-8 text-center text-gray-400 italic">
                                                Aucune série ajoutée. Ajoutez-en manuellement.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition-colors text-sm"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-6 py-2 bg-primary hover:bg-emerald-600 text-white font-medium rounded-lg shadow-md transition-all text-sm"
                        >
                            <Save size={16} /> Enregistrer
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ExerciseFormModal;
