import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
    fetchWorkoutDetails,
    addExercise,
    updateExercise,
    deleteExercise,
    deleteWorkout,
    updateWorkout,
    clearCurrentWorkout
} from '../store/workoutSlice';

export const useWorkoutDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentWorkout, loading, error } = useSelector((state) => state.workouts);

    // Modal States
    const [isExerciseModalOpen, setIsExerciseModalOpen] = useState(false);
    const [editingExercise, setEditingExercise] = useState(null);
    const [isWorkoutModalOpen, setIsWorkoutModalOpen] = useState(false);

    // Fetch on mount
    useEffect(() => {
        if (id) {
            dispatch(fetchWorkoutDetails(id));
        }
        return () => {
            dispatch(clearCurrentWorkout());
        };
    }, [dispatch, id]);

    // Derived Stats
    const exercises = currentWorkout?.exercises || [];
    const allSets = exercises.flatMap(ex => ex.sets || []);
    const totalVolume = allSets.reduce((acc, set) => acc + (set.reps * set.weight), 0);
    const totalSets = allSets.length;
    const totalCalories = exercises.reduce((acc, ex) => acc + (parseInt(ex.calories) || 0), 0);
    const rpeSets = allSets.filter(s => s.rpe && s.rpe > 0);
    const avgRpe = rpeSets.length > 0
        ? (rpeSets.reduce((acc, s) => acc + parseFloat(s.rpe), 0) / rpeSets.length).toFixed(1)
        : '-';

    // Duration & Block Logic
    const isBlockBased = ['Cardio', 'Stretching'].includes(currentWorkout?.type);
    let maxBlocks = Infinity;
    let usedBlocks = 0;

    if (isBlockBased) {
        let durationMinutes = 0;
        const durationStr = currentWorkout.duration || '';
        if (durationStr.includes('h')) {
            const parts = durationStr.split('h');
            durationMinutes += parseInt(parts[0]) * 60;
            if (parts[1]) durationMinutes += parseInt(parts[1]);
        } else {
            durationMinutes = parseInt(durationStr) || 0;
        }

        maxBlocks = Math.floor(durationMinutes / 10);
        usedBlocks = exercises.reduce((acc, ex) => {
            return acc + (ex.sets?.reduce((sAcc, s) => sAcc + (parseInt(s.reps) || 0), 0) || 0);
        }, 0);
    }

    const limitReached = isBlockBased && usedBlocks >= maxBlocks;

    // Handlers
    const handleSaveExercise = async (formData) => {
        try {
            if (editingExercise) {
                await dispatch(updateExercise({
                    id: editingExercise.id,
                    exerciseData: formData
                })).unwrap();
            } else {
                await dispatch(addExercise({
                    workoutId: id,
                    exerciseData: formData
                })).unwrap();
            }
            dispatch(fetchWorkoutDetails(id));
            handleCloseExerciseModal();
        } catch (err) {
            console.error('Failed to save exercise:', err);
            alert(`Erreur: ${err}`);
        }
    };

    const handleEditExerciseClick = (exercise) => {
        setEditingExercise(exercise);
        setIsExerciseModalOpen(true);
    };

    const handleDeleteExerciseClick = async (exerciseId) => {
        if (window.confirm('Supprimer cet exercice ?')) {
            await dispatch(deleteExercise(exerciseId));
            dispatch(fetchWorkoutDetails(id));
        }
    };

    const handleCloseExerciseModal = () => {
        setIsExerciseModalOpen(false);
        setEditingExercise(null);
    };

    const handleUpdateWorkout = async (formData) => {
        await dispatch(updateWorkout({
            id: id,
            workoutData: {
                title: formData.title,
                scheduled_at: formData.date,
                type: formData.type,
                duration: formData.duration,
                calories_burned: formData.calories_burned,
                exercises_count: formData.exercises_count,
                description: formData.description
            }
        }));
        dispatch(fetchWorkoutDetails(id));
        setIsWorkoutModalOpen(false);
    };

    const handleDeleteWorkout = async () => {
        if (window.confirm('Voulez-vous vraiment supprimer toute la séance ?')) {
            await dispatch(deleteWorkout(id));
            navigate('/workouts');
        }
    };

    return {
        // Data & State
        currentWorkout,
        loading,
        error,
        exercises,
        // Stats
        totalVolume,
        totalSets,
        totalCalories,
        avgRpe,
        limitReached,
        usedBlocks,
        maxBlocks,
        isBlockBased,
        // UI State
        isExerciseModalOpen,
        isWorkoutModalOpen,
        editingExercise,
        setIsExerciseModalOpen,
        setIsWorkoutModalOpen,
        // Handlers
        handleSaveExercise,
        handleEditExerciseClick,
        handleDeleteExerciseClick,
        handleCloseExerciseModal,
        handleUpdateWorkout,
        handleDeleteWorkout
    };
};
