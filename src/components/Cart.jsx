import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = ({ activeCart, setActiveCart }) => {
  const cartItem = useSelector((state) => state.cart);
  const totalAmount = cartItem.reduce((a, b) => a + b.quantity * b.price, 0);

  return (
    <div>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[30vw] h-full bg-white p-5 mb-3 
         transition-all duration-500 z-50 shadow-2xl ${
           activeCart ? "translate-x-0" : "translate-x-full"
         }`}
      >
        <div className=" flex justify-between items-center my-3">
          <span className=" text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className=" border-2 border-gray-600 hover:border-red-300 text-gray-600 hover:text-red-300 font-bold p-1 text-xl rounded-md cursor-pointer"
          />
        </div>

        {cartItem.length > 0 ? (
          cartItem.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))
        ) : (
          <h2 className=" text-center text-xl font-bold text-red-500 mt-10">
            Your Cart Is Empty😢
          </h2>
        )}

        <div className=" absolute bottom-0">
          <h3 className=" font-semibold text-gray-800">
            Items : {cartItem.length}
          </h3>
          <h3 className=" font-semibold text-gray-800">
            Total Amount : ₹ {totalAmount}
          </h3>
          <hr className=" lg:w-full my-2" />
          <button className=" bg-gradient-to-r from-red-500 to-orange-300 text-white  px-3 py-2 rounded-md w-[90vw]  lg:w-[28vw] mb-5">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
