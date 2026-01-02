import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser, clearError } from '../../store/authSlice';
import Input from '../ui/Input';
import Button from '../ui/Button';
import ErrorMessage from '../ui/ErrorMessage';
import { UserPlus, Mail, Lock, User, ShieldCheck, Shield } from 'lucide-react';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [validationError, setValidationError] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status, error, user } = useSelector((state) => state.auth);
    const isLoading = status === 'loading';

    useEffect(() => {
        if (user) {
            navigate('/');
        }
        return () => {
            dispatch(clearError());
            setValidationError(null);
        };
    }, [user, navigate, dispatch]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (validationError) setValidationError(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.password_confirmation) {
            setValidationError("Les mots de passe ne correspondent pas.");
            return;
        }
        dispatch(registerUser(formData));
    };

    return (
        <div className="flex flex-col items-center">
            <div className="bg-blue-900 p-3 rounded-md mb-4 shadow-lg">
                <UserPlus className="text-white w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-blue-900 mb-2">Créer un compte</h1>
            <p className="text-gray-500 text-sm mb-8 text-center">
                Commencez votre parcours fitness aujourd'hui
            </p>

            <form onSubmit={handleSubmit} className="w-full space-y-4">
                <ErrorMessage message={error || validationError} />

                <Input
                    label="Nom complet"
                    name="name"
                    icon={User}
                    placeholder="Entrez votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <Input
                    label="Email"
                    type="email"
                    name="email"
                    icon={Mail}
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <Input
                    label="Mot de passe"
                    type="password"
                    name="password"
                    icon={Lock}
                    placeholder="•••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <Input
                    label="Confirmer le mot de passe"
                    type="password"
                    name="password_confirmation"
                    icon={Lock}
                    placeholder="•••••"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    required
                />

                <Button type="submit" isLoading={isLoading} className="mt-2">
                    Créer un compte
                </Button>

                <div className="text-center text-sm text-gray-500 mt-4">
                    Vous avez déjà un compte ?{' '}
                    <Link to="/login" className="text-primary font-bold hover:underline">
                        Se connecter
                    </Link>
                </div>

                {/* Security badges */}
                <div className="flex justify-center gap-6 mt-6 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                        <ShieldCheck size={14} /> Sécurisé
                    </div>
                    <div className="flex items-center gap-1">
                        <Shield size={14} /> Confidentialité
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
