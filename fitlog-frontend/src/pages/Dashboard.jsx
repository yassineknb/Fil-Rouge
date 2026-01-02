import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkouts } from '../store/workoutSlice';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import DashboardStats from '../components/dashboard/DashboardStats';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { workouts } = useSelector((state) => state.workouts);

  useEffect(() => {
    dispatch(fetchWorkouts());
  }, [dispatch]);

  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto w-full px-6 md:px-12 py-12">

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Dashboard</h1>
          <p className="text-gray-500">Suivez votre progression et vos performances</p>
        </div>

        <DashboardStats workouts={workouts} />

      </main>

      <Footer />
    </div >
  );
};

export default Dashboard;
