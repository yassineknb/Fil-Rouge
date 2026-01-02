import axios from 'axios';

const authApi = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// ✅ Always read token at request time (VERY IMPORTANT)
authApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Custom method for profile update (requires multipart/form-data if image included)
authApi.updateProfile = (formData) => {
  return authApi.post('/profile', formData, {
    headers: {
      'Content-Type': undefined,
    },
  });
};

export default authApi;
