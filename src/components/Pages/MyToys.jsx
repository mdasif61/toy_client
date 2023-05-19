import React, { useContext, useEffect, useState } from "react";
import { UserOther } from "../authContextApi/AuthProvider";
import { FaPen, FaStar, FaStarHalf, FaTrash } from "react-icons/fa";
import Rating from "react-rating";

const MyToys = () => {
  const [myToy, setMyToy] = useState([]);
  const { user } = useContext(UserOther);
  console.log(myToy);

  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-mdasif61.vercel.app/mytoys?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToy(data);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-mdasif61.vercel.app/mytoys/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = myToy.filter((toy) => toy._id !== id);
          setMyToy(remaining);
        }
      });
  };

  return (
    <div className="min-h-[calc(100vh-146px)]">
      <div className="mt-20">
        <div>
          <table className="w-full table text-center">
            <thead>
              <tr>
                <td>Image</td>
                <td>Toy Info</td>
                <td>Category</td>
                <td>Price</td>
                <td>Available Quantity</td>
                <td>Ratings</td>
                <td>Seller Info</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {myToy.map((toys) => (
                <tr key={toys._id}>
                  <td>
                    <img className="w-20 rounded" src={toys.picture} alt="" />
                  </td>
                  <td>{toys.name}</td>
                  <td>{toys.category}</td>
                  <td className="font-bold">${toys.price}</td>
                  <td>{toys.quantity}</td>
                  <td>
                    {toys.rating}
                    <br />
                    <Rating
                      placeholderRating={toys.rating}
                      readonly
                      emptySymbol={<FaStar className="text-gray-300" />}
                      placeholderSymbol={<FaStar className="text-orange-500" />}
                      fullSymbol={<FaStarHalf />}
                    />
                  </td>
                  <td>
                    {toys.sellerName}
                    <br />
                    {toys.sellerEmail}
                  </td>
                  <td>
                    <button className="text-orange-600 mx-2">
                      <FaPen />
                    </button>
                    <button
                      onClick={() => handleDelete(toys._id)}
                      className="text-red-600 mx-2"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
