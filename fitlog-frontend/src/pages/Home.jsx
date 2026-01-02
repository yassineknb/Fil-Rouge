import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
    return (
        <div className="font-sans text-gray-900 bg-white">
            <Header />

            <HeroSection />

            <StatsSection />

            <FeaturesSection />

            <CTASection />

            <Footer />
        </div>
    );
};

export default Home;
