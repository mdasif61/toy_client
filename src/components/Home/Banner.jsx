import React from "react";
import toys from "../../assets/Images/toys.svg";
import "../Css/Banner.css";

const Banner = () => {
  return (
    <div className="my-10 flex justify-between banner p-10 rounded-2xl">
      <div className="w-1/2 flex items-center justify-center">
        <div className="space-y-8">
          <h1 className="text-orange-500 font-bold text-4xl leading-[50px]">
            Ignite Your Sports
            <br />
            Adventure with Amazing
            <br />
            Sports Toys!
          </h1>
          <p className="text-white w-4/5">
            Get ready to take your sports experience to new heights with our
            amazing collection of sports toys! Designed to inspire active play,
            skill development, and endless fun, our toys offer the perfect blend
            of excitement and entertainment.
          </p>
          <button className="btn btn-warning">Shop Now</button>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img src={toys} alt="" />
      </div>
    </div>
  );
};

export default Banner;
