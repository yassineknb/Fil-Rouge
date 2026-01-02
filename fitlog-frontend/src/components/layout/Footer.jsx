import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white pt-16 pb-8 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                {/* Colonne 1 : Logo & Description */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xl font-bold text-white">
                        <div className="bg-primary p-1 rounded-md">
                            <Dumbbell className="text-white w-5 h-5" />
                        </div>
                        <span>FitLog</span>
                    </div>
                    <p className="text-blue-200 text-sm leading-relaxed">
                        Votre journal d'entraînement personnel pour atteindre vos objectifs fitness.
                    </p>
                </div>

                {/* Colonne 2 : Produit */}
                <div>
                    <h4 className="font-bold mb-4">Produit</h4>
                    <ul className="space-y-2 text-sm text-blue-200">
                        <li><Link to="#" className="hover:text-white">Fonctionnalités</Link></li>
                        <li><Link to="#" className="hover:text-white">Tarifs</Link></li>
                        <li><Link to="#" className="hover:text-white">Témoignages</Link></li>
                        <li><Link to="#" className="hover:text-white">FAQ</Link></li>
                    </ul>
                </div>

                {/* Colonne 3 : Légal */}
                <div>
                    <h4 className="font-bold mb-4">Légal</h4>
                    <ul className="space-y-2 text-sm text-blue-200">
                        <li><Link to="#" className="hover:text-white">Mentions Légales</Link></li>
                        <li><Link to="#" className="hover:text-white">Confidentialité</Link></li>
                        <li><Link to="#" className="hover:text-white">CGU</Link></li>
                        <li><Link to="#" className="hover:text-white">Cookies</Link></li>
                    </ul>
                </div>

                {/* Colonne 4 : Contact */}
                <div>
                    <h4 className="font-bold mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm text-blue-200">
                        <li><a href="mailto:contact@fitlog.app" className="hover:text-white">contact@fitlog.app</a></li>
                        <li className="flex gap-4 mt-4">
                            <SocialIcon Icon={Instagram} />
                            <SocialIcon Icon={Twitter} />
                            <SocialIcon Icon={Facebook} />
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-blue-800 pt-8 text-center text-sm text-blue-300">
                © {new Date().getFullYear()} FitLog. Tous droits réservés.
            </div>
        </footer>
    );
};

// Petit composant helper pour les icônes sociales
const SocialIcon = ({ Icon }) => (
    <a href="#" className="bg-blue-800 p-2 rounded-md hover:bg-primary transition-colors">
        <Icon size={18} />
    </a>
);

export default Footer;
