import React from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";

const Modal = ({ modalData }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
          <div className="flex justify-center">
            <div className="w-1/2 p-5 flex items-center justify-center">
              <img
                className="border-2 rounded-xl border-orange-600"
                src={modalData.picture}
                alt=""
              />
            </div>
            <div className="w-1/2 p-5">
              <h1 className="text-2xl font-bold mb-2">{modalData.name}</h1>
              <h3 className="font-semibold">
                Available quantity : {modalData.price}
              </h3>
              <h3 className="font-semibold mt-2 badge badge-primary">
                Reting: {modalData.rating}
              </h3>
              <br />
              <Rating
                placeholderRating={modalData.rating}
                readonly
                emptySymbol={<FaStar className="text-gray-300" />}
                placeholderSymbol={<FaStar className="text-orange-500" />}
                fullSymbol={<FaStarHalf />}
              />

              <h3 className="font-semibold">Price : ${modalData.price}</h3>
              <p className="my-3">{modalData.desc}</p>
              <div className="mt-10">
                <div className="bg-orange-100 relative p-5 rounded-xl border-orange-600 border-2">
                  <h1 className=" -top-5 right-10 font-bold bg-orange-600 py-2 px-4 rounded-full text-white absolute">
                    Seller Info
                  </h1>

                  <h1 className="text-black font-semibold my-2">Name : {modalData.sellerName}</h1>
                  <h1 className="font-semibold text-black my-2">Email : {modalData.sellerEmail}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
