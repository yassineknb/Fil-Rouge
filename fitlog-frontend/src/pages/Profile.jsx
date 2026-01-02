import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkouts } from '../store/workoutSlice';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProfileCard from '../components/profile/ProfileCard';
import DetailedStats from '../components/profile/DetailedStats';

const Profile = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(fetchWorkouts());
    }, [dispatch]);

    return (
        <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-[#1e293b]">Mon Profil</h1>
                    <p className="text-gray-600 mt-2">Gérez vos informations personnelles et consultez vos performances</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Left Column: Profile Card */}
                    <div className="lg:col-span-1 h-full">
                        <ProfileCard user={user} />
                    </div>

                    {/* Right Column: Stats */}
                    <div className="lg:col-span-2 h-full">
                        <DetailedStats />
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Profile;
