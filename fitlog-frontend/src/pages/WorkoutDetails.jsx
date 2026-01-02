import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ExerciseFormModal from '../components/exercises/ExerciseFormModal';
import WorkoutFormModal from '../components/workouts/WorkoutFormModal';
import WorkoutHeader from '../components/workout-details/WorkoutHeader';
import WorkoutExercises from '../components/workout-details/WorkoutExercises';
import WorkoutSidebar from '../components/workout-details/WorkoutSidebar';
import WorkoutBreadcrumb from '../components/workout-details/WorkoutBreadcrumb';
import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';
import { useWorkoutDetails } from '../hooks/useWorkoutDetails';

const WorkoutDetails = () => {
    const {
        currentWorkout,
        loading,
        error,
        exercises,
        totalVolume,
        totalSets,
        totalCalories,
        avgRpe,
        limitReached,
        usedBlocks,
        maxBlocks,
        isBlockBased,
        isExerciseModalOpen,
        isWorkoutModalOpen,
        editingExercise,
        setIsExerciseModalOpen,
        setIsWorkoutModalOpen,
        handleSaveExercise,
        handleEditExerciseClick,
        handleDeleteExerciseClick,
        handleCloseExerciseModal,
        handleUpdateWorkout,
        handleDeleteWorkout
    } = useWorkoutDetails();

    if (loading && !currentWorkout) {
        return <Loading />;
    }

    if (error || !currentWorkout) {
        return (
            <ErrorMessage
                title="Séance introuvable"
                message="Cette séance n'existe pas ou a été supprimée."
                backLink="/workouts"
                backText="Retour aux séances"
            />
        );
    }

    return (
        <div className="font-sans text-gray-900 bg-gray-50 min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-8">

                <WorkoutBreadcrumb title={currentWorkout.title} />

                <WorkoutHeader
                    workout={currentWorkout}
                    onEdit={() => setIsWorkoutModalOpen(true)}
                    onDelete={handleDeleteWorkout}
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Left Column: Exercises List */}
                    <div className="lg:col-span-2">
                        <WorkoutExercises
                            exercises={exercises}
                            workoutType={currentWorkout?.type}
                            limitReached={limitReached}
                            usedBlocks={usedBlocks}
                            maxBlocks={maxBlocks}
                            onAdd={() => setIsExerciseModalOpen(true)}
                            onEdit={handleEditExerciseClick}
                            onDelete={handleDeleteExerciseClick}
                        />
                    </div>

                    {/* Right Column: Summary Card */}
                    <div className="lg:col-span-1">
                        <WorkoutSidebar
                            totalCalories={totalCalories}
                            workoutCalories={currentWorkout.calories_burned}
                            summaryStats={{
                                totalVolume: `${totalVolume.toLocaleString()} kg`,
                                totalExercises: exercises.length,
                                totalSets: totalSets,
                                avgRpe: avgRpe
                            }}
                        />
                    </div>

                </div>

            </main>

            <Footer />

            {/* Modals */}
            <ExerciseFormModal
                isOpen={isExerciseModalOpen}
                onClose={handleCloseExerciseModal}
                onSubmit={handleSaveExercise}
                initialData={editingExercise}
                workoutType={currentWorkout?.type}
                maxBlocks={isBlockBased ? maxBlocks : Infinity}
                currentUsedBlocks={usedBlocks}
            />

            <WorkoutFormModal
                isOpen={isWorkoutModalOpen}
                onClose={() => setIsWorkoutModalOpen(false)}
                onSubmit={handleUpdateWorkout}
                initialData={currentWorkout}
            />

        </div>
    );
};

export default WorkoutDetails;
