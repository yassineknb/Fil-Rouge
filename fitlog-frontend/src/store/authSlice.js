import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authApi from '../services/authApi';

// --- Helpers ---
const getUserFromStorage = () => {
  try {
    // Check persistent first
    let user = localStorage.getItem('user');
    if (user && user !== 'undefined') return JSON.parse(user);

    // Check session second
    user = sessionStorage.getItem('user');
    if (user && user !== 'undefined') return JSON.parse(user);
    
    return null;
  } catch {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    return null;
  }
};

const getTokenFromStorage = () => {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
};

const getRoleFromStorage = () => {
    return localStorage.getItem('role') || sessionStorage.getItem('role');
};

// --- Initial State ---
const initialState = {
  user: getUserFromStorage(),
  token: getTokenFromStorage(),
  role: getRoleFromStorage(),
  status: 'idle',
  error: null,
};

// --- Thunks ---
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await authApi.post('/login', credentials);
      // Pass the remember flag along with the response data
      return { ...res.data, remember: credentials.remember };
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || 'Erreur de connexion'
      );
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (data, { rejectWithValue }) => {
    try {
      const res = await authApi.post('/register', data);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Erreur d'inscription"
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async () => {
    try {
      await authApi.post('/logout');
    } catch {
      // even if backend fails, frontend logs out
    }
    return true;
  }
);

export const updateUserProfile = createAsyncThunk(
  'auth/updateUserProfile',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await authApi.updateProfile(formData);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || 'Erreur mise à jour profil'
      );
    }
  }
);

// --- Slice ---
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;

        // Laratrust roles come from user.roles[]
        state.role = action.payload.user?.roles?.[0]?.name || null;

        const role = state.role;
        const userStr = JSON.stringify(action.payload.user);
        const token = action.payload.token;

        // Conditional Storage Logic
        if (action.payload.remember) {
            // Persistent
            localStorage.setItem('token', token);
            localStorage.setItem('user', userStr);
            if (role) localStorage.setItem('role', role);
            
            // Clear session to be clean
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('role');
        } else {
            // Session only
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('user', userStr);
            if (role) sessionStorage.setItem('role', role);

            // Clear persistent
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('role');
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.user?.roles?.[0]?.name || null;

        // REGISTER DEFAULT: Session Only (as per user requirement "default unauthenticated")
        sessionStorage.setItem('token', action.payload.token);
        sessionStorage.setItem('user', JSON.stringify(action.payload.user));
        if (state.role) sessionStorage.setItem('role', state.role);
        
        // Ensure no leftover persistent data
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('role');
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      // LOGOUT
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.role = null;
        state.status = 'idle';

        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('role');
        
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('role');
      })

      // UPDATE PROFILE
      .addCase(updateUserProfile.fulfilled, (state, action) => {
          state.user = action.payload; // Update user with new data from backend
          
          // Update whichever storage is currently in use
          if (localStorage.getItem('user')) {
              localStorage.setItem('user', JSON.stringify(action.payload));
          } else {
              sessionStorage.setItem('user', JSON.stringify(action.payload));
          }
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
