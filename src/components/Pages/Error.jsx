import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../assets/Images/error.png'

const Error = () => {
    return (
        <div className='flex items-center justify-center min-h-screen w-full'>
            <div className='w-full flex flex-col items-center text-center'>
                <img className='w-80 mb-10' src={errorImg} alt="" />
                <h1 className='text-2xl text-gray-500 text-center font-bold uppercase'>not found page</h1>
                <Link to='/'>
                <button className='btn mt-7 text-center bg-orange-600 border-none'>BACK TO HOME</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;