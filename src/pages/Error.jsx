import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import errorImg from '../assets/2480259.png';

const Error = () => {

    const error = useRouteError();

    return (
        <>
        <Navbar></Navbar>
        <div className='flex flex-col justify-center items-center'>
            <img className='w-full ' src={errorImg} alt="" />
            <p>{error.message}</p>
        </div>
        <Footer></Footer>
            
        </>
    );
};

export default Error;