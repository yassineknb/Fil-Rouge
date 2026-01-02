import React, { useState, useEffect } from 'react';
import { X, Save, Calendar, Clock, Dumbbell, AlignLeft, Hash, Activity } from 'lucide-react';

const WorkoutFormModal = ({ isOpen, onClose, onSubmit, initialData }) => {
    const [formData, setFormData] = useState({
        title: '',
        date: new Date().toISOString().split('T')[0],
        type: 'Musculation',
        duration: '',
        calories_burned: '',
        description: ''
    });

    useEffect(() => {
        if (isOpen) { // Only update when modal is open or just opened
            if (initialData) {
                setFormData({
                    title: initialData.title || '',
                    date: initialData.scheduled_at ? initialData.scheduled_at.split('T')[0] : new Date().toISOString().split('T')[0],
                    type: initialData.type || 'Musculation',
                    duration: initialData.duration || '',
                    calories_burned: initialData.calories_burned || '',
                    description: initialData.description || ''
                });
            } else {
                setFormData({
                    title: '',
                    date: new Date().toISOString().split('T')[0],
                    type: 'Musculation',
                    duration: '',
                    calories_burned: '',
                    description: ''
                });
            }
        }
    }, [initialData, isOpen]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">

                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gray-50/50">
                    <h2 className="text-xl font-bold text-blue-900">{initialData ? 'Modifier la Séance' : 'Nouvelle Séance'}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom de la séance</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="Ex: Séance Jambes, Run Matinal..."
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                                <Calendar size={14} /> Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                            />
                        </div>

                        {/* Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                                <Activity size={14} /> Type
                            </label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm bg-white"
                            >
                                <option value="Musculation">Musculation</option>
                                <option value="HIIT">HIIT</option>
                                <option value="Cardio">Cardio</option>
                                <option value="Stretching">Stretching</option>
                            </select>
                        </div>
                    </div>

                    {/* Duration */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                            <Clock size={14} /> Durée
                        </label>
                        <input
                            type="text"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            placeholder="Ex: 1h 30min"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                            <AlignLeft size={14} /> Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="3"
                            placeholder="Notes sur la séance, ressenti..."
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm resize-none"
                        ></textarea>
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

export default WorkoutFormModal;
