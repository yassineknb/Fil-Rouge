import authApi from './authApi';

const exercisesApi = {
    // Récupérer les exercices d'une séance (si besoin séparément)
    getAll: async (workoutId) => {
        const response = await authApi.get(`/workouts/${workoutId}/exercises`);
        return response.data;
    },

    // Ajouter un exercice
    create: async (workoutId, exerciseData) => {
        const response = await authApi.post(`/workouts/${workoutId}/exercises`, exerciseData);
        return response.data;
    },

    // Modifier un exercice
    update: async (id, exerciseData) => {
        const response = await authApi.put(`/exercises/${id}`, exerciseData);
        return response.data;
    },

    // Supprimer un exercice
    delete: async (id) => {
        const response = await authApi.delete(`/exercises/${id}`);
        return response.data;
    }
};

export default exercisesApi;
