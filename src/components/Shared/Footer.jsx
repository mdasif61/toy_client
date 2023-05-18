import React from 'react';
import footerLogo from "../../assets/Images/navLogo.png";
import { FaBeer, FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black p-12 rounded-b-2xl'>
            <div className='flex justify-between'>
                <div className='flex justify-center items-center flex-col'>
                    <img className="w-36" src={footerLogo} alt="" />
                    <h1 className="text-white font-semibold text-xl">
                        Sports<span className="text-orange-500 font-bold text-4xl">&</span>
                        Special
                    </h1>
                </div>
                <div>
                    <div>
                        <h1 className='text-xl font-bold text-white border-b-2 uppercase'>Categorys</h1>
                        <ul className='text-sm text-white'>
                            <li className='my-3 hover:underline cursor-pointer
                           text-gray-400'>Outdoor Sports</li>
                            <li className='my-3 hover:underline cursor-pointer
                           text-gray-400'>Team Sports</li>
                            <li className='my-3 hover:underline cursor-pointer
                           text-gray-400'>Individual Sports</li>
                            <li className='my-3 hover:underline cursor-pointer
                           text-gray-400'>Water Sports</li>
                            <li className='my-3 hover:underline cursor-pointer
                           text-gray-400'>Ball Sports</li>
                            <li className='my-3 hover:underline cursor-pointer
                           text-gray-400'>Adventure and Exploration</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className='text-xl font-bold text-white border-b-2 uppercase'>Support</h1>
                        <ul className='text-sm text-white'>
                            <li className='my-3 hover:underline cursor-pointer text-gray-400'>Contact</li>
                            <li className='my-3 hover:underline cursor-pointer text-gray-400'>FAQs</li>
                            <li className='my-3 hover:underline cursor-pointer text-gray-400'>Shipping</li>
                            <li className='my-3 hover:underline cursor-pointer text-gray-400'>Returns</li>
                            <li className='my-3 hover:underline cursor-pointer text-gray-400'>Terms</li>
                            <li className='my-3 hover:underline cursor-pointer text-gray-400'>Privacy</li>
                        </ul>
                    </div>
                </div>

                <div className='w-[30%]'>
                        <h1 className='text-xl font-bold text-white border-b-2 uppercase'>Contact Us</h1>
                    <div className='flex mt-5'>
                       <input type="text" className='h-10 rounded-full py-2 px-4 focus:outline-none border-none' name="" placeholder='Email Here' id="" />
                       <button className='h-10 bg-red-600 py-2 px-4 rounded-full ml-2 hover:bg-transparent hover:border-red-600 hover:border-2 text-white'>Subscribe</button>
                    </div>
                    <div className='mt-10'>
                        <h1 className='uppercase mb-3 border-b-2 font-bold text-xl text-white'>Social Media</h1>
                        <div className='text-gray-500 flex'>
                        <FaGoogle className='mr-3 text-xl cursor-pointer'/>
                        <FaFacebook className='mr-3 text-xl cursor-pointer'/>
                        <FaInstagram className='mr-3 text-xl cursor-pointer'/>
                        <FaTwitter className='mr-3 text-xl cursor-pointer'/>
                        <FaLinkedin className='mr-3 text-xl cursor-pointer'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;