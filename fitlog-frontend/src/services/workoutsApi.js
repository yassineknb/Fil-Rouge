import authApi from './authApi';

const workoutsApi = {
    // Récupérer toutes les séances
    getAll: async () => {
        const response = await authApi.get('/workouts');
        return response.data;
    },

    // Récupérer une séance par ID
    getById: async (id) => {
        const response = await authApi.get(`/workouts/${id}`);
        return response.data;
    },

    // Créer une nouvelle séance
    create: async (workoutData) => {
        const response = await authApi.post('/workouts', workoutData);
        return response.data;
    },

    // Mettre à jour une séance
    update: async (id, workoutData) => {
        const response = await authApi.put(`/workouts/${id}`, workoutData);
        return response.data;
    },

    // Supprimer une séance
    delete: async (id) => {
        const response = await authApi.delete(`/workouts/${id}`);
        return response.data;
    }
};

export default workoutsApi;
