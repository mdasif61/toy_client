import React, { useContext, useEffect, useState } from "react";
import { UserOther } from "../authContextApi/AuthProvider";
import { FaPen, FaStar, FaStarHalf, FaTrash } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const MyToys = () => {
  const [myToy, setMyToy] = useState([]);
  const [updateModal, setUpdateModal] = useState({});
  const { user } = useContext(UserOther);

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
    fetch(
      `https://sports-special-server.onrender.com/mytoys/${id}`,
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

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const desc = form.desc.value;
    const picture = form.picture.value;

    const toyInfo = {
      name,
      price,
      category,
      rating,
      quantity,
      desc,
      picture,
    };

    fetch(`https://sports-special-server.onrender.com.app/toyUpdate/${updateModal._id}`,{
      method:'PUT',
      body:JSON.stringify(toyInfo)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = myToy.filter((toy) => toy._id !== updateModal._id);
          const updateToy = myToy.find((toy) => toy._id === updateModal._id);
          const newToy = [updateToy, ...remaining];
          setMyToy(newToy);
        }
      });
  };

  const handleUpdateModal = (id) => {
    fetch(
      `https://sports-special-server.onrender.com/uniqueToy/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUpdateModal(data);
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
                    <Link to={`/updateData/${toys._id}`}>
                    <button
                      title="Edit toy info"
                      onClick={() => handleUpdateModal(toys._id)}
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
      {/* <UpdateModal
        updateModal={updateModal}
        handleUpdate={handleUpdate}
      ></UpdateModal> */}
    </div>
  );
};

export default MyToys;
