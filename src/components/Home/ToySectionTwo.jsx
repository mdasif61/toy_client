import React from 'react';
import imgOne from '../../assets/Images/imgOne.jpg'
import imgTwo from '../../assets/Images/imgTwo.jpg'
import imgThree from '../../assets/Images/imgThree.jpg'
import imgFour from '../../assets/Images/imgFour.jpg'
import '../Css/ToySectionTwo.css'

const ToySectionTwo = () => {
    return (
        <div className='flex justify-between my-20 bg-gray-800'>
            <div className='w-3/4'>
                <div className='kids text-white p-10 bg-white w-full h-full'>
                    <div className='bg-orange-600 my-3 bg-opacity-20 p-5 rounded-xl'>
                    <h1 className='text-2xl font-bold mb-3'>Experience the Thrill of Cricket with Our Exciting Cricket Toys!</h1>
                    <p>Ignite your cricketing spirit with our dynamic range of cricket toys! Designed for enthusiasts of all ages, our toys bring the excitement of the game right to your fingertips. Practice your strokes</p>
                    </div>
                    <div className='bg-orange-600 my-3 bg-opacity-20 p-5 rounded-xl'>
                    <h1 className='text-2xl font-bold mb-3'>Experience the Magic of Basketball with Our Incredible Basketball Toys!</h1>
                    <p>Dribble, shoot, and score with our amazing collection of basketball toys! At Sports&Special, we're passionate about bringing the excitement of the court into your hands. Whether you're a budding player or a basketball enthusiast</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 w-1/2 gap-5 p-10'>
                <div className='border-orange-600 rounded-t-2xl border-2 p-3'>
                    <img className='rounded-t-2xl' src={imgOne} alt="" />
                </div>
                <div className='border-orange-600 rounded-t-2xl border-2 p-3'>
                    <img className='rounded-t-2xl' src={imgTwo} alt="" />
                </div>
                <div className='border-orange-600 rounded-b-2xl border-2 p-3'>
                    <img className='rounded-b-2xl' src={imgThree} alt="" />
                </div>
                <div className='border-orange-600 rounded-b-2xl border-2 p-3'>
                    <img className='rounded-b-2xl' src={imgFour} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ToySectionTwo;