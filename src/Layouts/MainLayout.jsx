import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div className='flex flex-col'>
             <Toaster position="top-right" reverseOrder={false} />
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