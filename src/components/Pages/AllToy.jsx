import React, { useEffect, useState } from "react";
import "../Css/AllToy.css";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import dynamicTitle from "../Shared/CustomHook";

const AllToy = () => {
  const [allToys, setAllToys] = useState([]);
  const [toyName, setToyName] = useState("");
  const { totalToy } = useLoaderData();
  const [limit, setLimit] = useState(20);

  dynamicTitle("All Toy");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(`https://sports-special-server.onrender.com/alltoys?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, [toyName === "", limit]);


  // search system
  const handleSearch = () => {
    fetch(`https://sports-special-server.onrender.com/searchName/${toyName}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };

  return (
    <div className="my-10 min-h-[calc(100vh-146px)]">
      <h1 className="text-2xl font-bold text-center mb-5">All Toys</h1>
      <div className="flex my-5">
        <input
          onChange={(e) => setToyName(e.target.value)}
          className="h-12 flex-1 rounded-full py-2 px-4 focus:outline-none border focus:border-2"
          type="search"
          name=""
          placeholder="Search your and other toys"
          id=""
        />
        <button
          onClick={handleSearch}
          className="h-12 w-32 btn ml-3 rounded-full border-none bg-black"
        >
          Search
        </button>
      </div>
      <table className="w-full table text-center">
        <thead>
          <tr>
            <td>Seller Name</td>
            <td>Toy Name</td>
            <td>Sub-Category</td>
            <td>Price</td>
            <td>Available Quantity</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {allToys.map((toy) => (
            <tr key={toy._id}>
              <td>{toy.sellerName}</td>
              <td className="font-bold">{toy.name}</td>
              <td>{toy.category}</td>
              <td className="font-bold">${toy.price}</td>
              <td>{toy.quantity}</td>
              <td>
                <Link to={`/details/${toy._id}`}>
                  <button className="bg-gray-200 hover:bg-gray-300 duration-300 py-2 px-4 rounded-md">
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center mt-7">
        {totalToy >= 20 && (
          <>
            <button
              onClick={() => setLimit(totalToy)}
              className={`${
                totalToy === limit && "hidden"
              } btn bg-red-500 border-none`}
            >
              Show All
            </button>
          </>
        )}

        {limit == totalToy && (
          <button
            onClick={() => setLimit(20)}
            className="btn bg-red-500 border-none"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default AllToy;
