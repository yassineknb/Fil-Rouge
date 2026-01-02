import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkouts, createWorkout, deleteWorkout, updateWorkout } from '../store/workoutSlice';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import WorkoutStats from '../components/workouts/WorkoutStats';
import WorkoutFilters from '../components/workouts/WorkoutFilters';
import WorkoutCard from '../components/workouts/WorkoutCard';
import WorkoutList from '../components/workouts/WorkoutList';
import WorkoutFormModal from '../components/workouts/WorkoutFormModal';
import { Plus } from 'lucide-react';

const Workouts = () => {
    const dispatch = useDispatch();
    const { workouts, loading, error } = useSelector((state) => state.workouts);

    // UI State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingWorkout, setEditingWorkout] = useState(null);

    // Filter State
    const [filterType, setFilterType] = useState('');
    const [sortOrder, setSortOrder] = useState('desc');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(fetchWorkouts());
    }, [dispatch]);

    // Handle Create OR Update
    const handleSaveWorkout = async (formData) => {
        try {
            if (editingWorkout) {
                // Update existing
                await dispatch(updateWorkout({
                    id: editingWorkout.id,
                    workoutData: {
                        title: formData.title,
                        scheduled_at: formData.date,
                        type: formData.type,
                        duration: formData.duration,
                        description: formData.description
                    }
                })).unwrap(); // Unwrap to catch error
            } else {
                // Create new
                await dispatch(createWorkout({
                    title: formData.title,
                    scheduled_at: formData.date,
                    type: formData.type,
                    duration: formData.duration,
                    description: formData.description
                })).unwrap();
            }
            dispatch(fetchWorkouts());
            handleCloseModal();
        } catch (err) {
            console.error("Failed to save workout:", err);
            // Optionally set error state to show in UI
        }
    };

    const handleEditClick = (workout) => {
        setEditingWorkout(workout);
        setIsModalOpen(true);
    };

    const handleDeleteClick = async (id) => {
        const resultAction = await dispatch(deleteWorkout(id));
        if (deleteWorkout.fulfilled.match(resultAction)) {
            // FORCE RELOAD TO DEBUG
            window.location.reload();
        } else {
            alert(`Erreur suppression: ${resultAction.payload || 'Erreur inconnue'}`);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingWorkout(null);
    };

    // Filter Logic
    const filteredWorkouts = workouts.filter(workout => {
        const matchType = filterType ? workout.type === filterType : true;
        const matchSearch = searchTerm ? workout.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;
        return matchType && matchSearch;
    });

    // Sort Logic
    const sortedWorkouts = [...filteredWorkouts].sort((a, b) => {
        const dateA = new Date(a.scheduled_at);
        const dateB = new Date(b.scheduled_at);
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    return (
        <div className="font-sans text-gray-900 bg-gray-50 min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow max-w-7xl mx-auto w-full px-6 md:px-12 py-10">

                {/* Page Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-blue-900">Mes Séances</h1>
                        <p className="text-gray-500 mt-1">Gérez toutes vos séances d'entraînement en un seul endroit</p>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-primary hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all flex items-center gap-2"
                    >
                        <Plus size={20} /> Nouvelle Séance
                    </button>
                </div>

                {/* Pass full list for accurate stats */}
                <WorkoutStats workouts={workouts} />

                <WorkoutFilters
                    filterType={filterType}
                    setFilterType={setFilterType}
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />

                {/* Workouts List */}
                <WorkoutList
                    workouts={sortedWorkouts}
                    loading={loading}
                    error={error}
                    onEdit={handleEditClick}
                    onDelete={handleDeleteClick}
                />

            </main>

            <WorkoutFormModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSaveWorkout}
                initialData={editingWorkout}
            />

            <Footer />
        </div>
    );
};

export default Workouts;
