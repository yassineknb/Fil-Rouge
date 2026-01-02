import React from 'react';
import { TrendingUp, Calendar, Zap } from 'lucide-react';

const StatsSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Visualisez Votre Progression</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Un tableau de bord complet pour suivre chaque détail de votre parcours fitness
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6">
                {/* Stats Cards Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-start">
                        <div>
                            <div className="text-sm text-gray-500 mb-2">Séances ce mois</div>
                            <div className="text-3xl font-bold text-gray-900 mb-1">24</div>
                            <div className="text-xs font-medium text-emerald-500 flex items-center gap-1">
                                <TrendingUp size={12} /> +12% vs mois dernier
                            </div>
                        </div>
                        <div className="bg-emerald-50 p-2 rounded-lg text-primary">
                            <Calendar size={20} />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-start">
                        <div>
                            <div className="text-sm text-gray-500 mb-2">Calories brûlées</div>
                            <div className="text-3xl font-bold text-gray-900 mb-1">8,450</div>
                            <div className="text-xs font-medium text-emerald-500 flex items-center gap-1">
                                <TrendingUp size={12} /> +8% cette semaine
                            </div>
                        </div>
                        <div className="bg-emerald-50 p-2 rounded-lg text-primary">
                            <Zap size={20} />
                        </div>
                    </div>
                </div>

                {/* Chart Container Big */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-blue-900 mb-8">Progression Mensuelle</h3>
                    <div className="relative h-64 w-full bg-emerald-50/30 rounded-xl overflow-hidden group">
                        {/* Grille de fond */}
                        <div className="absolute inset-0 grid grid-rows-4 w-full h-full">
                            <div className="border-b border-gray-100 w-full"></div>
                            <div className="border-b border-gray-100 w-full"></div>
                            <div className="border-b border-gray-100 w-full"></div>
                            <div className="border-b border-gray-100 w-full"></div>
                        </div>

                        {/* Axe Y (Fake labels) */}
                        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-gray-400 py-2 pl-2">
                            <span>25</span><span>20</span><span>15</span><span>10</span><span>5</span><span>0</span>
                        </div>

                        {/* Ligne de Chart Simplifiée CSS/SVG */}
                        <svg className="absolute bottom-0 left-8 right-0 h-full w-[calc(100%-2rem)]" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0,80 L200,60 L400,40 L600,20 L800,15 L1200,10"
                                vectorEffect="non-scaling-stroke"
                                fill="none"
                                stroke="#10B981"
                                strokeWidth="3"
                                className="drop-shadow-sm"
                            />
                            <path
                                d="M0,80 L200,60 L400,40 L600,20 L800,15 L1200,10 V 300 H 0 Z"
                                fill="url(#chartGradient)"
                            />
                        </svg>

                        {/* Axe X */}
                        <div className="absolute bottom-0 left-8 right-0 flex justify-between px-4 pb-2 text-[10px] text-gray-400">
                            <span>Sem 1</span><span>Sem 2</span><span>Sem 3</span><span>Sem 4</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
