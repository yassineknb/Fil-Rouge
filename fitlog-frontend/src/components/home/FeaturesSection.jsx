import React from 'react';
import { BarChart2, Activity, Target, Zap } from 'lucide-react';

const FeaturesSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="text-center mb-16">
                <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                    Fonctionnalités
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Tout Ce Dont Vous Avez Besoin</h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    Des outils puissants pour maximiser vos résultats
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard
                    icon={<BarChart2 />}
                    title="Suivi des Séances"
                    desc="Enregistrez chaque exercice, série et répétition avec une interface intuitive et rapide."
                    color="bg-blue-500"
                />
                <FeatureCard
                    icon={<Activity />}
                    title="Statistiques Avancées"
                    desc="Analysez vos performances avec des graphiques détaillés et des métriques personnalisées."
                    color="bg-emerald-500"
                />
                <FeatureCard
                    icon={<Target />}
                    title="Objectifs Personnalisés"
                    desc="Définissez vos objectifs et suivez votre progression en temps réel vers leur réalisation."
                    color="bg-blue-600"
                />
                <FeatureCard
                    icon={<Zap />}
                    title="Motivation Quotidienne"
                    desc="Recevez des encouragements et des rappels pour rester motivé et constant dans vos efforts."
                    color="bg-emerald-500"
                />
            </div>
        </section>
    );
};

// Feature Card Helper Component (local to this file now)
const FeatureCard = ({ icon, title, desc, color }) => (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white mb-6 shadow-md`}>
            {React.cloneElement(icon, { size: 24 })}
        </div>
        <h3 className="text-lg font-bold text-blue-900 mb-3">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
            {desc}
        </p>
    </div>
);

export default FeaturesSection;
