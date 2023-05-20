import React, { useContext, useEffect, useState } from "react";
import { UserOther } from "../authContextApi/AuthProvider";

const AddaToy = () => {

  const {user}=useContext(UserOther)
  const [error,setError]=useState("")

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const desc = form.desc.value;
    const picture = form.picture.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;

    if(name==""){
      setError("Toy Name Not Found")
      return;
    }
    else if(price==""){
      setError("Price Not Found")
      return;
    }
    else if(category==""){
      setError("Category Not Found")
      return;
    }
    else if(rating==""){
      setError("Rating Not Found")
      return;
    }
    else if(quantity==""){
      setError("Quantity Not Found");
      return;
    }
    else if(desc==""){
      setError("Description Not Found")
      return;
    }
    else if(picture==""){
      setError("Picture URL Not Found");
      return;
    }

    const toyInfo = {
      name,
      price,
      category,
      rating,
      quantity,
      desc,
      picture,
      sellerName,
      sellerEmail,
    };

    fetch(
      "https://sports-special-server.onrender.com/addToy",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(toyInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };

  const options = ["Ball Games", "Outdoor Adventures", "Team Sports"];

  return (
    <div className="min-h-[calc(100vh-146px)] flex items-center justify-center">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center my-10">Add Toys</h1>
        <form onSubmit={handleAddToy} className="w-full">
          <div className="w-full bg-orange-50 border-2 border-orange-600 p-10 rounded-xl">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div className="w-full">
                <label htmlFor="name">
                  <span className="font-semibold">Name</span>
                </label>
                <br />
                <input
                  className="w-full mt-2 h-12 focus:outline-none focus:border-b-2 focus:border-orange-500 border focus:border-t-0 py-2 px-4"
                  type="text"
                  name="name"
                  placeholder="Enter Item Name"
                  id=""
                />
              </div>

              <div className="w-full">
                <label htmlFor="price">
                  <span className="font-semibold">Price</span>
                </label>
                <br />
                <input
                  className="w-full mt-2 h-12 focus:outline-none focus:border-b-2 focus:border-orange-500 border focus:border-t-0 py-2 px-4"
                  type="text"
                  name="price"
                  placeholder="Enter Item Price"
                  id=""
                />
              </div>

              <div className="w-full">
                <label htmlFor="category">
                  <span className="font-semibold">Sub-Category</span>
                </label>
                <br />
                <select
                  name="category"
                  id=""
                  className="w-full mt-2 h-12 border py-2 px-4 focus:outline-none"
                >
                  {options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="w-full">
                <label htmlFor="rating">
                  <span className="font-semibold">Rating</span>
                </label>
                <br />
                <input
                  className="w-full mt-2 h-12 focus:outline-none focus:border-b-2 focus:border-orange-500 border focus:border-t-0 py-2 px-4"
                  type="text"
                  placeholder="Enter Item Rating"
                  name="rating"
                  id=""
                />
              </div>

              <div className="w-full">
                <label htmlFor="quantity">
                  <span className="font-semibold">Available quantity</span>
                </label>
                <br />
                <input
                  className="w-full mt-2 h-12 focus:outline-none focus:border-b-2 focus:border-orange-500 border focus:border-t-0 py-2 px-4"
                  type="number"
                  name="quantity"
                  placeholder="Enter Available Quantity"
                  id=""
                />
              </div>

              <div className="w-full">
                <label htmlFor="quantity">
                  <span className="font-semibold">
                    Picture <small>url</small>
                  </span>
                </label>
                <br />
                <input
                  className="w-full mt-2 h-12 focus:outline-none focus:border-b-2 focus:border-orange-500 border focus:border-t-0 py-2 px-4"
                  type="url"
                  name="picture"
                  placeholder="Enter Picture URL"
                  id=""
                />
              </div>
            </div>
            <div className="w-full mt-5">
              <label htmlFor="desc">
                <span className="font-semibold">Item Description</span>
              </label>
              <br />
              <textarea
                className="w-full mt-2 resize-none border focus:border-b-2 focus:border-orange-500 focus:outline-none py-2 px-4 h-20"
                name="desc"
                id=""
                placeholder="write item description"
              ></textarea>
            </div>
          </div>

          <div className="bg-orange-100 border-2 border-orange-600 rounded-xl p-10 my-10">
            <h1 className="text-center font-bold text-xl">
              Seller Information
            </h1>
            <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-5">
              <div className="w-full">
                <label htmlFor="sellerName">
                  <span className="font-semibold">Name</span>
                </label>
                <br />
                <input
                  className="w-full h-12 py-2 px-4 border-orange-500 border focus:outline-none focus:border-2 mt-2"
                  type="text"
                  name="sellerName"
                  id=""
                  placeholder="Enter Your Name"
                  defaultValue={user?.displayName}
                  readOnly
                />
              </div>

              <div className="w-full">
                <label htmlFor="sellerEmail">
                  <span className="font-semibold">Email</span>
                </label>
                <br />
                <input
                  className="w-full h-12 py-2 px-4 border-orange-500 border focus:outline-none focus:border-2 mt-2"
                  type="email"
                  name="sellerEmail"
                  id=""
                  placeholder="Enter Your Email"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>
            </div>
          </div>
        <p className="text-red-600 text-center mb-2">{error && '*'+ error}</p>
          <button className="btn btn-block mb-10 bg-orange-500 border-none">
            Add Toy
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddaToy;
