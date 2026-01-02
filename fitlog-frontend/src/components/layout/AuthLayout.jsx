import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AuthLayout = ({ children }) => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900">
            <Header />

            {/* --- Contenu Principal (Spécifique Auth) --- */}
            <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 relative">
                {/* Cercles décoratifs (simplifiés) */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

                {/* Carte du formulaire */}
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-10 z-10 relative">
                    {children}
                </div>

                {/* Citation */}
                <div className="mt-8 text-center max-w-lg z-10">
                    <p className="text-gray-400 italic font-medium">
                        “ {isLoginPage ? "Votre transformation commence par une connexion" : "Chaque grand voyage commence par un premier pas"} ”
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AuthLayout;
