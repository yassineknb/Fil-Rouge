import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, clearError } from '../../store/authSlice';
import Input from '../ui/Input';
import Button from '../ui/Button';
import ErrorMessage from '../ui/ErrorMessage';
import { User, Mail, Lock } from 'lucide-react';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status, error, user } = useSelector((state) => state.auth);

    const isLoading = status === 'loading';

    useEffect(() => {
        // Redirect if already logged in (optional, usually handled by route protection, but good UX)
        if (user) {
            navigate('/'); // or home
        }
        return () => {
            dispatch(clearError());
        };
    }, [user, navigate, dispatch]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            // Basic validation, could be improved
            return;
        }
        dispatch(loginUser({
            email: formData.email,
            password: formData.password,
            remember: formData.remember
        }));
    };

    return (
        <div className="flex flex-col items-center">
            {/* Icon & Title */}
            <div className="bg-blue-900 p-3 rounded-full mb-4 shadow-lg">
                <User className="text-white w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-blue-900 mb-2">Connexion</h1>
            <p className="text-gray-500 text-sm mb-8 text-center">
                Connectez-vous à votre compte FitLog pour continuer votre parcours fitness
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full">
                <ErrorMessage message={error} />

                <Input
                    label="Adresse email"
                    type="email"
                    name="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <Input
                    label="Mot de passe"
                    type="password"
                    name="password"
                    placeholder="Votre mot de passe"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <div className="flex items-center mb-6">
                    <input
                        id="remember"
                        name="remember"
                        type="checkbox"
                        checked={formData.remember}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-500">
                        Se souvenir de moi
                    </label>
                </div>

                <Button type="submit" isLoading={isLoading} className="mb-6">
                    Se connecter
                </Button>

                <div className="text-center text-sm text-gray-500">
                    Pas encore de compte ?{' '}
                    <Link to="/register" className="text-primary font-bold hover:underline">
                        S'inscrire gratuitement
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
