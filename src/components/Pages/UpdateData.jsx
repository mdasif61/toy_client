import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateData = () => {
    const updateToy=useLoaderData();

    
    const handleUpdateToy=(id)=>{
        fetch(`https://sports-special-server.onrender.com/toyUpdate/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    const options = ["Ball Games", "Outdoor Adventures", "Team Sports"];

    return (
        <div className='my-20'>
        <form className="w-full">
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
                  defaultValue={updateToy.name}
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
                  defaultValue={updateToy.price}
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
                  defaultValue={updateToy.rating}
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
                  defaultValue={updateToy.quantity}
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
                  defaultValue={updateToy.picture}
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
                defaultValue={updateToy.desc}
              ></textarea>
            </div>
          </div>

        </form>
          <button onClick={()=>handleUpdateToy(updateToy._id)} className="btn btn-block my-10 bg-orange-500 border-none">
            UPDATE TOY
          </button>
        </div>
    );
};

export default UpdateData;