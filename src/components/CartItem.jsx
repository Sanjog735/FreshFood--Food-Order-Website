import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeItem,
  incQuantity,
  decQuantity,
} from "../stote/slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({ id, img, name, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className=" flex gap-3 shadow-md rounded-lg p-2 mb-3 ">
      <MdDelete
        onClick={() => {
          dispatch(removeItem({ id }));
          toast.error(`${name} has been removed`);
        }}
        className=" absolute right-7 cursor-pointer text-red-500"
      />

      <img className=" w-[50px] h-[50px] object-cover" src={img} alt="item" />

      <div>
        <h2 className=" font-semibold text-gray-800">{name}</h2>

        <div className=" flex justify-between items-center">
          <span className=" text-orange-500 font-normal">₹{price}</span>

          <div className=" flex items-center justify-center gap-2 absolute right-7">
            <AiOutlinePlus
              onClick={() => dispatch(incQuantity({ id }))}
              className=" border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-orange-400 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />

            <span>{quantity}</span>

            <AiOutlineMinus
              onClick={() =>
                quantity > 1
                  ? dispatch(decQuantity({ id }))
                  : dispatch(
                      removeItem({ id }),
                      toast.error(`${name} has been removed`)
                    )
              }
              className=" border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
