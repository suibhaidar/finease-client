import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div>
            <Navbar/>
             <Toaster position="top-right" reverseOrder={false} />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default AuthLayout;