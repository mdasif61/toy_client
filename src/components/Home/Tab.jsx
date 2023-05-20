import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";
import Modal from "../Modals/Modal";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { UserOther } from "../authContextApi/AuthProvider";

const Tab = () => {
  const [tab, setTab] = useState("All");
  const [tabToy, setTabToy] = useState([]);
  const { user } = useContext(UserOther);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

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
      <h1 className="text-center md:text-2xl text-xl mb-7 font-bold">
        Find Your Choosen Toy Category
      </h1>
      <div className="flex items-center md:w-full w-11/12 mx-auto justify-center">
        <div
          onClick={() => setTab("All")}
          className={`bg-black rounded-l-full flex items-center justify-center h-12 md:h-auto md:py-3 md:px-8 px-3 text-sm md:text-base text-white cursor-pointer ${
            tab === "All" ? "bg-orange-600 scale-125" : ""
          }`}
        >
          <h1>All</h1>
        </div>
        <div
          onClick={() => setTab("Ball Games")}
          className={`bg-black md:py-3 md:px-8 h-12 flex items-center justify-center md:h-auto px-3 text-sm md:text-base text-white cursor-pointer ${
            tab === "Ball Games" ? "bg-orange-600 scale-125" : ""
          }`}
        >
          <h1>Ball Games</h1>
        </div>
        <div
          onClick={() => setTab("Outdoor Adventures")}
          className={`bg-black md:py-3 md:px-8 h-12 flex items-center justify-center md:h-auto px-3 text-sm md:text-base text-white cursor-pointer ${
            tab === "Outdoor Adventures" ? "bg-orange-600 scale-125" : ""
          }`}
        >
          <h1>Outdoor Adventures</h1>
        </div>
        <div
          onClick={() => setTab("Team Sports")}
          className={`bg-black rounded-r-full h-12 flex items-center justify-center md:h-auto md:py-3 md:px-8 px-3 text-sm md:text-base text-white cursor-pointer ${
            tab === "Team Sports" ? "bg-orange-600 scale-125" : ""
          }`}
        >
          <h1>Team Sports</h1>
        </div>
      </div>

      {/* categorys show */}
      <div className="md:my-20 my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tabToy.map((toy) => (
            <div
              className="md:p-5 p-4 border rounded-xl flex flex-col justify-between"
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
                <h1 className="md:text-xl text-lg font-bold mt-7 mb-3">
                  {toy.name}
                </h1>
                <h1 className="md:text-lg text-base font-semibold">
                  Price : ${toy.price}
                </h1>
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
                <Link to={`/details/${toy._id}`}>
                  <button
                    onClick={() => {
                      setMessage("You have to log in first to view details"),
                        setOpen(!open);
                    }}
                    className="btn bg-orange-600 text-white btn-block border-none mt-5 hover:bg-orange-500"
                  >
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {!user && open && toast.success(message)}
    </div>
  );
};

export default Tab;
