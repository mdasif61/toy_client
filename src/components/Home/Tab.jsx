import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";
import Modal from "../Modals/Modal";

const Tab = () => {
  const [tab, setTab] = useState("All");
  const [tabToy, setTabToy] = useState([]);

  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-mdasif61.vercel.app/activeCategoys/${tab}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTabToy(data);
      });
  }, [tab]);

  return (
    <div className="w-full">
      <h1 className="text-center text-2xl mb-7 font-bold">
        Find Your Choosen Toy Category
      </h1>
      <div className="flex items-center w-full justify-center">
        <div
          onClick={() => setTab("All")}
          className={`bg-black rounded-l-full py-3 px-8 text-white cursor-pointer ${
            tab === "All" ? "bg-orange-600 scale-125" : ""
          }`}
        >
          <h1>All</h1>
        </div>
        <div
          onClick={() => setTab("Ball Games")}
          className={`bg-black py-3 px-8 text-white cursor-pointer ${
            tab === "Ball Games" ? "bg-orange-600 scale-125" : ""
          }`}
        >
          <h1>Ball Games</h1>
        </div>
        <div
          onClick={() => setTab("Outdoor Adventures")}
          className={`bg-black py-3 px-8 text-white cursor-pointer ${
            tab === "Outdoor Adventures" ? "bg-orange-600 scale-125" : ""
          }`}
        >
          <h1>Outdoor Adventures</h1>
        </div>
        <div
          onClick={() => setTab("Team Sports")}
          className={`bg-black rounded-r-full py-3 px-8 text-white cursor-pointer ${
            tab === "Team Sports" ? "bg-orange-600 scale-125" : ""
          }`}
        >
          <h1>Team Sports</h1>
        </div>
      </div>

      {/* categorys show */}
      <div className="my-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {tabToy.map((toy) => (
            <div
              className="p-5 border rounded-xl flex flex-col justify-between"
              key={toy._id}
            >
              <div>
                <img
                  className="rounded-xl border-8 border-white shadow-xl"
                  src={toy.picture}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-xl font-bold mt-7 mb-3">{toy.name}</h1>
                <h1 className="text-lg font-semibold">Price : ${toy.price}</h1>
                <h3 className="font-semibold mt-2 badge badge-primary">
                  Reting: {toy.rating}
                </h3>
                <br />
                <Rating
                  placeholderRating={toy.rating}
                  readonly
                  emptySymbol={<FaStar className="text-gray-300" />}
                  placeholderSymbol={<FaStar className="text-orange-500" />}
                  fullSymbol={<FaStarHalf />}
                />
              </div>
              <div>
                <label
                  //   onClick={() => handleModal(toy._id)}
                  htmlFor="my-modal-3"
                  className="btn bg-orange-600 text-white btn-block border-none mt-5 hover:bg-orange-500"
                >
                  View Details
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal modalData={tabToy}></Modal>
    </div>
  );
};

export default Tab;
