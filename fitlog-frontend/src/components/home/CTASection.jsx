import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto bg-blue-900 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">

                {/* Glow effect CSS only */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-gradient-to-r from-blue-800 to-blue-900 opacity-50 z-0"></div>

                <div className="relative z-10 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">Prêt à Commencer Votre <br /> Transformation ?</h2>
                    <p className="text-blue-100 max-w-lg mx-auto">
                        Rejoignez des milliers d'utilisateurs qui atteignent leurs objectifs avec FitLog
                    </p>
                    <div className="pt-4">
                        <Link to="/register" className="inline-block bg-primary hover:bg-emerald-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-transform hover:scale-105">
                            S'inscrire Gratuitement
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
