import React, { useEffect } from "react";
import toys from "../../assets/Images/toys.svg";
import "../Css/Banner.css";
import AOS from 'aos';

const Banner = () => {

  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  return (
    <div className="md:my-10 my-5 flex md:flex-row flex-col-reverse justify-between banner md:p-10 p-5 rounded-2xl">
      <div data-aos='fade-up' className="md:w-1/2 w-full flex items-center justify-center">
        <div className="space-y-8">
          <h1 className="text-orange-500 mt-7 md:mt-0 font-bold md:text-4xl text-xl md:leading-[50px]">
            Ignite Your Sports
            <br />
            Adventure with Amazing
            <br />
            Sports Toys!
          </h1>
          <p className="text-white text-sm md:text-base md:w-4/5 w-full">
            Get ready to take your sports experience to new heights with our
            amazing collection of sports toys! Designed to inspire active play,
            skill development, and endless fun, our toys offer the perfect blend
            of excitement and entertainment.
          </p>
          <button className="btn btn-warning">Shop Now</button>
        </div>
      </div>
      <div data-aos='fade-up' className="md:w-1/2 w-full flex items-center justify-center">
        <img src={toys} alt="" />
      </div>
    </div>
  );
};

export default Banner;
