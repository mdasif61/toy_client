import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import dynamicTitle from '../Shared/CustomHook';

const UpdateData = () => {
    const updateToy=useLoaderData();
    const navigate=useNavigate()

    // custom hook for dynamic title change
    dynamicTitle('Update Data')

    const handleUpdateToy=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = parseFloat(form.price.value).toFixed(2);
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
    
        fetch(
          `https://sports-special-server.onrender.com/toyUpdate/${updateToy._id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(toyInfo),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if(data.modifiedCount>0){
              toast.success('Successfull Updated')
              navigate('/mytoys')
            }
            form.reset();
          });

    }

    const options = ["Ball Games", "Outdoor Adventures", "Team Sports"];

    return (
        <div className='my-20'>
        <form onSubmit={handleUpdateToy} className="w-full">
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
                  defaultValue={updateToy.category}
                >
                  {options.map((option) => (
                    <option className='bg-gray-500' key={option}>{option}</option>
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
          <button className="btn btn-block my-10 bg-orange-500 border-none">
            UPDATE TOY
          </button>
        </form>
        </div>
    );
};

export default UpdateData;