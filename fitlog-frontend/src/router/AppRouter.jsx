import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Workouts from '../pages/Workouts';
import WorkoutDetails from '../pages/WorkoutDetails';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

// 🔒 Protected Route
const ProtectedRoute = ({ children }) => {
    const token = useSelector((state) => state.auth.token);
    return token ? children : <Navigate to="/login" replace />;
};

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/workouts"
                    element={
                        <ProtectedRoute>
                            <Workouts />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/workouts/:id"
                    element={
                        <ProtectedRoute>
                            <WorkoutDetails />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
