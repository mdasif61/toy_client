import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import footbalAnim from "../../assets/Images/detailsAnim.json";
import { useLottie } from "lottie-react";
import Rating from "react-rating";
import { FaStar, FaStarHalf } from "react-icons/fa";
import dynamicTitle from "../Shared/CustomHook";

const Details = () => {
  const detailsData = useLoaderData();

  dynamicTitle("Details")

  const {
    name,
    category,
    desc,
    picture,
    price,
    quantity,
    rating,
    sellerName,
    sellerEmail,
    _id,
  } = detailsData;

  const lottie = {
    animationData: footbalAnim,
    loop: true,
  };
  const { View } = useLottie(lottie);

  return (
    <div className="min-h-[calc(100vh-146px)]">
      <div className="flex justify-between">
        <div className="w-1/2 flex items-center flex-col justify-center">
          <img className="rounded-xl" src={picture} alt="" />
        </div>

        <div className="w-1/2">{View}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full border-2 p-10 mb-7">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{name}</h1>
          <h2 className="text-lg font-semibold text-gray-500">{category}</h2>
          <p>Price : ${price}</p>
          <p>Available Quantity : {quantity}</p>
          <p>Rating : {rating}</p>
          <Rating
            placeholderRating={rating}
            readonly
            emptySymbol={<FaStar className="text-gray-300" />}
            placeholderSymbol={<FaStar className="text-orange-500" />}
            fullSymbol={<FaStarHalf />}
          />
          <p className="text-gray-500 leading-7">{desc}</p>
        </div>
        <div className="flex flex-col items-start p-5 justify-center">
          <h1 className="my-1 text-lg text-gray-500">
            Seller Name : <br />
            <span className="text-xl font-bold text-black">{sellerName}</span>
          </h1>
          <h1 className="my-1 text-lg text-gray-500">
            Seller Email : <br />
            <span className="text-xl font-bold text-black">{sellerEmail}</span>
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <img src={picture} alt="" />
        </div>
      </div>
      <div className="w-full text-right mb-5">
      <Link to='/'>
        <button className="btn bg-orange-600 border-none hover:bg-orange-500">Back To Home</button>
      </Link>
      </div>
    </div>
  );
};

export default Details;
