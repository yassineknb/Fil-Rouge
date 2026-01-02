import React from 'react';
import { Search } from 'lucide-react';

const WorkoutFilters = ({ filterType, setFilterType, sortOrder, setSortOrder, searchTerm, setSearchTerm }) => {

    const types = ['Tous', 'Musculation', 'HIIT', 'Cardio', 'Stretching'];

    return (
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                    type="text"
                    placeholder="Rechercher une séance..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all"
                />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 text-sm font-medium rounded-lg border border-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                    {types.map(type => (
                        <option key={type} value={type === 'Tous' ? '' : type}>{type}</option>
                    ))}
                </select>

                <button
                    onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
                    className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 text-sm font-medium rounded-lg border border-gray-200 transition-colors"
                >
                    Date {sortOrder === 'desc' ? '↓' : '↑'}
                </button>
            </div>
        </div>
    );
};

export default WorkoutFilters;
