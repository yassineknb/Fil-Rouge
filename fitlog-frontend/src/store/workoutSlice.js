import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import workoutsApi from '../services/workoutsApi';
import exercisesApi from '../services/exercisesApi';

// Thunks
export const fetchWorkouts = createAsyncThunk(
    'workouts/fetchWorkouts',
    async (_, { rejectWithValue }) => {
        try {
            const data = await workoutsApi.getAll();
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Erreur lors du chargement des séances');
        }
    }
);

export const createWorkout = createAsyncThunk(
    'workouts/createWorkout',
    async (workoutData, { rejectWithValue }) => {
        try {
            const data = await workoutsApi.create(workoutData);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Erreur lors de la création de la séance');
        }
    }
);

export const updateWorkout = createAsyncThunk(
    'workouts/updateWorkout',
    async ({ id, workoutData }, { rejectWithValue }) => {
        try {
            const data = await workoutsApi.update(id, workoutData);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Erreur lors de la modification');
        }
    }
);

export const deleteWorkout = createAsyncThunk(
    'workouts/deleteWorkout',
    async (id, { rejectWithValue }) => {
        try {
            await workoutsApi.delete(id);
            return id;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Erreur lors de la suppression');
        }
    }
);

// New Thunks for Details & Exercises
export const fetchWorkoutDetails = createAsyncThunk(
    'workouts/fetchWorkoutDetails',
    async (id, { rejectWithValue }) => {
        try {
            const data = await workoutsApi.getById(id);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Erreur chargement détails');
        }
    }
);

export const addExercise = createAsyncThunk(
    'workouts/addExercise',
    async ({ workoutId, exerciseData }, { rejectWithValue }) => {
        try {
            const data = await exercisesApi.create(workoutId, exerciseData);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Erreur ajout exercice');
        }
    }
);

export const updateExercise = createAsyncThunk(
    'workouts/updateExercise',
    async ({ id, exerciseData }, { rejectWithValue }) => {
        try {
            const data = await exercisesApi.update(id, exerciseData);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Erreur modification exercice');
        }
    }
);

export const deleteExercise = createAsyncThunk(
    'workouts/deleteExercise',
    async (id, { rejectWithValue }) => {
        try {
            await exercisesApi.delete(id);
            return id;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Erreur suppression exercice');
        }
    }
);

const workoutSlice = createSlice({
    name: 'workouts',
    initialState: {
        workouts: [],
        currentWorkout: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearWorkoutError: (state) => {
            state.error = null;
        },
        clearCurrentWorkout: (state) => {
            state.currentWorkout = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Fetch Workouts (List)
            .addCase(fetchWorkouts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWorkouts.fulfilled, (state, action) => {
                state.loading = false;
                state.workouts = action.payload;
            })
            .addCase(fetchWorkouts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            
            // Fetch Details
            .addCase(fetchWorkoutDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWorkoutDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.currentWorkout = action.payload;
            })
            .addCase(fetchWorkoutDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Create Workout
            .addCase(createWorkout.fulfilled, (state, action) => {
                state.workouts.unshift(action.payload);
            })
            // Update Workout
            .addCase(updateWorkout.fulfilled, (state, action) => {
                const index = state.workouts.findIndex(w => w.id === action.payload.id);
                if (index !== -1) {
                    state.workouts[index] = action.payload;
                }
                if (state.currentWorkout?.id === action.payload.id) {
                    state.currentWorkout = { ...state.currentWorkout, ...action.payload };
                }
            })
            // Delete Workout
            .addCase(deleteWorkout.fulfilled, (state, action) => {
                state.workouts = state.workouts.filter(w => w.id !== action.payload);
                if (state.currentWorkout?.id === action.payload) {
                    state.currentWorkout = null;
                }
            })

            // Exercise Actions (Optimistic Updates or Refresh trigger)
            .addCase(addExercise.fulfilled, (state, action) => {
                if (state.currentWorkout) {
                    state.currentWorkout.exercises.unshift(action.payload);
                    // Update counts locally or rely on re-fetch
                }
            })
            .addCase(updateExercise.fulfilled, (state, action) => {
                if (state.currentWorkout) {
                    const index = state.currentWorkout.exercises.findIndex(e => e.id === action.payload.id);
                    if (index !== -1) {
                        state.currentWorkout.exercises[index] = action.payload;
                    }
                }
            })
            .addCase(deleteExercise.fulfilled, (state, action) => {
                if (state.currentWorkout) {
                    state.currentWorkout.exercises = state.currentWorkout.exercises.filter(e => e.id !== action.payload);
                }
            });
    }
});

export const { clearWorkoutError, clearCurrentWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;
