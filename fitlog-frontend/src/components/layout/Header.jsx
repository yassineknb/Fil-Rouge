import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Dumbbell, Home, Calendar, LayoutDashboard, LogOut, User } from 'lucide-react';
import { logoutUser } from '../../store/authSlice';

const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <header className="bg-white py-4 px-6 md:px-12 flex justify-between items-center shadow-sm sticky top-0 z-50">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-800">
                <Dumbbell className="text-primary w-8 h-8" strokeWidth={2.5} />
                <span className="text-blue-900">FitLog</span>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Home size={16} /> Accueil
                </Link>
                <Link to="/workouts" className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Calendar size={16} /> Séances
                </Link>
                {user && (
                    <>
                        <Link to="/dashboard" className="flex items-center gap-1 hover:text-primary transition-colors">
                            <LayoutDashboard size={16} /> Dashboard
                        </Link>
                        <Link to="/profile" className="flex items-center gap-2 hover:text-primary transition-colors ml-4">
                            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
                                <img
                                    src={user.avatar_url ? `http://localhost:8000${user.avatar_url}` : "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"}
                                    alt="Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-xs font-semibold">{user.name}</span>
                        </Link>
                    </>
                )}
            </nav>

            {/* Boutons d'action */}
            <div className="flex gap-4">
                {user ? (
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
                    >
                        <LogOut size={16} /> Déconnexion
                    </button>
                ) : (
                    <>
                        {isLoginPage && (
                            <Link
                                to="/register"
                                className="bg-primary hover:bg-emerald-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
                            >
                                S'inscrire
                            </Link>
                        )}

                        {isRegisterPage && (
                            <Link
                                to="/login"
                                className="bg-blue-900 hover:bg-blue-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
                            >
                                Se connecter
                            </Link>
                        )}

                        {!isLoginPage && !isRegisterPage && (
                            <Link
                                to="/login"
                                className="bg-blue-900 hover:bg-blue-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
                            >
                                Se connecter
                            </Link>
                        )}
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
