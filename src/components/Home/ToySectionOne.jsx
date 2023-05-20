import React, { useEffect } from 'react';
import sports from '../../assets/Images/sports.svg'
import { Link } from 'react-router-dom';
import AOS from 'aos';

const ToySectionOne = () => {

    useEffect(()=>{
        AOS.init({duration:2000})
    },[])

    return (
        <div className='md:flex justify-between md:my-20 mb-10 md:mb-0'>
            <div className='md:w-1/2 w-full flex items-center justify-center' data-aos='fade-left'>
            <img className='w-2/3' src={sports} alt="" />
            </div>
            <div className='md:w-1/2 w-full flex items-center justify-center' data-aos='fade-right'>
               <div>
                <Link to='/alltoys'>
                <button className='btn hover:bg-red-500 bg-red-600 border-none md:w-36 w-24 py-2 px-4 rounded-lg mb-4'>See Toys</button>
                </Link>

               <h1 className='text-black font-bold md:text-3xl text-xl mb-5 md:leading-[46px]'>Unleash the Athlete Within with Our Premium Sports Toys!</h1> 

               <p data-aos='fade-down' className='text-gray-500 text-sm md:text-base'>Welcome to our Sports Toys, where champions are born and playtime becomes an adventure! At <span>Sports<span>&</span>Special</span>, we are passionate about inspiring active lifestyles and nurturing a love for sports in children and adults alike. Our premium selection of sports toys is designed to ignite the athlete within, promoting skill development, teamwork, and endless fun.</p>
               </div>
            </div>
        </div>
    );
};

export default ToySectionOne;