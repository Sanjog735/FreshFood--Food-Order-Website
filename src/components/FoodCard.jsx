import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItem } from "../stote/slices/CartSlice";
import toast from "react-hot-toast";

const FoodCard = ({ id, img, name, price, rating, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="flex flex-col w-[250px] rounded-lg  overflow-hidden bg-white shadow-md
     hover:shadow-xl  cursor-grab transition-all duration-300 "
    >
      <img className="w-full h-40 object-cover" src={img} alt="food" />

      <div id=" content" className=" p-4">
        <div className="flex justify-between mt-2">
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          <div className="flex items-center mt-1 text-sm text-gray-600">
            <AiFillStar className="text-yellow-400 mr-1" />
            <span>{rating}</span>
          </div>
        </div>

        <p className="text-lg font-normal text-gray-600">₹{price}</p>

        <button
          onClick={() => {
            dispatch(addItem({ id, img, name, price, rating, quantity: 1 }));
            toast.success(`${name} added successfully`);
          }}
          className=" w-full outline-none border-none mt-4 text-center bg-gradient-to-r from-orange-400 to-red-500  text-white py-2 px-4 rounded-md  "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
