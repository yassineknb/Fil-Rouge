import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TrendingUp, Target, Zap } from 'lucide-react';

const HeroSection = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <section className="bg-blue-900 text-white pt-20 pb-20 md:pt-32 md:pb-32 px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Contenu Texte */}
                <div className="flex-1 md:pr-12 pointer-events-none z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 pointer-events-auto">
                        Transformez Vos <span className="text-primary">Objectifs</span> en Réalité
                    </h1>
                    <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-xl pointer-events-auto">
                        Suivez chaque séance, analysez vos progrès et dépassez vos limites avec FitLog, votre journal d'entraînement personnel intelligent.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12 pointer-events-auto">
                        {user ? (
                            <Link to="/dashboard" className="bg-primary hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center">
                                Aller au Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link to="/register" className="bg-primary hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center">
                                    S'inscrire Gratuitement
                                </Link>
                                <Link to="/login" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all text-center border border-blue-700">
                                    Se connecter
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Icones Features Hero */}
                    <div className="flex gap-8 text-sm text-blue-200 pointer-events-auto">
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-800/50 p-1.5 rounded text-primary">
                                <TrendingUp size={16} />
                            </div>
                            <span>Suivi en temps réel</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-800/50 p-1.5 rounded text-primary">
                                <Target size={16} />
                            </div>
                            <span>Objectifs personnalisés</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-800/50 p-1.5 rounded text-primary">
                                <Zap size={16} />
                            </div>
                            <span>Motivation quotidienne</span>
                        </div>
                    </div>
                </div>

                {/* Illustration Mobile (Mockup à droite) */}
                <div className="flex-1 relative z-10 flex justify-center md:justify-end">
                    <div className="w-64 md:w-72 bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-800 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                        <div className="bg-white rounded-[2rem] overflow-hidden h-[500px] relative">
                            {/* Top Bar Mockup */}
                            <div className="h-6 bg-gray-100 mb-4 flex justify-between px-6 items-center pt-2">
                                <span className="text-[10px] text-gray-500">9:41</span>
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                                </div>
                            </div>

                            {/* Mockup Content */}
                            <div className="px-6 space-y-6">
                                <div>
                                    <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-1">Workouts</h4>
                                    <div className="flex items-end gap-2">
                                        <span className="text-3xl font-bold text-gray-800">2850</span>
                                        <span className="text-sm text-gray-500 mb-1">Kcal</span>
                                    </div>
                                </div>

                                {/* Fake Chart */}
                                <div className="bg-emerald-50 rounded-xl p-4 h-32 flex items-end justify-between gap-1 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-gradient-to-b from-emerald-200 to-transparent"></div>
                                    <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                                        <path d="M0 40 Q 25 35 50 20 T 100 10" fill="none" stroke="#10B981" strokeWidth="3" />
                                        <path d="M0 40 Q 25 35 50 20 T 100 10 V 50 H 0 Z" fill="#D1FAE5" opacity="0.5" />
                                    </svg>
                                </div>

                                <div className="flex justify-between text-xs text-gray-400 px-1">
                                    <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span>
                                </div>

                                {/* Card Goal */}
                                <div className="bg-blue-900 rounded-xl p-4 text-white flex items-center gap-4 shadow-lg">
                                    <div className="relative w-12 h-12 flex items-center justify-center">
                                        <div className="w-full h-full rounded-full border-4 border-emerald-500/30"></div>
                                        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-emerald-500 border-t-transparent animate-spin-slow"></div>
                                        <span className="text-xs font-bold">87%</span>
                                    </div>
                                    <div>
                                        <div className="text-xs text-blue-200 mb-0.5">Weekly Goal</div>
                                        <div className="font-bold">Excellent</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
