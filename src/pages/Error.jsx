import React from 'react';
import { useRouteError } from 'react-router';
import errorImg from '../assets/2480259.png';

const Error = () => {

    const error = useRouteError();

    return (
        <>
       
        <div className='flex flex-col justify-center items-center'>
            <img className='max-w-[1140px] max-h-screen' src={errorImg} alt="" />
            <p>{error.message}</p>
        </div>
        
            
        </>
    );
};

export default Error;