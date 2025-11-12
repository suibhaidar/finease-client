import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col'>
            <Navbar/>
            <Hero/>
            <main className='flex-1'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default MainLayout;