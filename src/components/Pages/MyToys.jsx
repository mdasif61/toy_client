import React, { useContext, useEffect, useState } from "react";
import { UserOther } from "../authContextApi/AuthProvider";
import { FaPen, FaStar, FaStarHalf, FaTrash } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../Css/MyToys.css";

const MyToys = () => {
  const [myToy, setMyToy] = useState([]);
  const { user } = useContext(UserOther);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(
      `https://sports-special-server.onrender.com/mytoys?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToy(data);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "DELETE",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        fetch(`https://sports-special-server.onrender.com/mytoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = myToy.filter((toy) => toy._id !== id);
              setMyToy(remaining);
            }
          });
        Swal.fire("Deleted!", "Your toy has been deleted.", "success");
      }
    });
  };

  return (
    <div className="min-h-[calc(100vh-146px)]">
      <div className="my-20">
        <div>
          <table className="w-full table text-center">
            <thead className="w-full">
              <tr>
                <th>Image</th>
                <th>Toy Name</th>
                <th>Sub-Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Ratings</th>
                <th>Seller Info</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="w-full mt-7">
              {myToy.map((toys) => (
                <tr className="displaySize w-full" key={toys._id}>
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
                    <Link to={`/updateData/${toys._id}`}>
                      <button
                        title="Edit toy info"
                        className="text-orange-600 mx-2"
                      >
                        <FaPen />
                      </button>
                    </Link>
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
