import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../stote/slices/SearchSlice";

function Navbar({ activeCart, setActiveCart }) {
  const cartItems = useSelector((state) => state.cart.length);
  const dispatch = useDispatch();

  return (
    <nav className=" fixed w-full shadow-xl bg-gradient-to-r from-orange-400 to-red-500 text-white p-4 ">
      <div className=" mx-auto px-4 ">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-between items-center space-x-4 w-full lg:w-auto">
            <div className="text-xl font-bold">Freshfood.</div>

            <button
              onClick={() => setActiveCart(!activeCart)}
              className="lg:hidden text-xl relative cursor-pointer "
            >
              <AiOutlineShoppingCart />
              <div
                id="cartItems"
                className="absolute top-[-7px] right-[-7px] flex items-center justify-center text-[10px] bg-white text-black h-[15px] w-[15px] rounded-full "
              >
                {cartItems}
              </div>
            </button>
          </div>

          <div className="flex-1 mt-4 lg:mt-0 lg:mx-40">
            <div className="relative ">
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => dispatch(setSearch(e.target.value))}
                className="w-full p-2 rounded bg-gradient-to-r from-orange-100 to-red-200 text-gray-600 outline-none"
              />
              <button className="absolute right-2 top-3 text-gray-600">
                <AiOutlineSearch />
              </button>
            </div>
          </div>

          <div
            onClick={() => setActiveCart(!activeCart)}
            className="hidden lg:block text-2xl relative cursor-pointer   "
          >
            <AiOutlineShoppingCart />
            <div
              id="cartItems"
              className="absolute top-[-10px] right-[-10px] flex items-center justify-center text-[15px] bg-white text-black h-[20px] w-[20px] rounded-full"
            >
              {cartItems}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
