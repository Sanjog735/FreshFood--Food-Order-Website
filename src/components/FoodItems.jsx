import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const handleToast = (name) => {
    `${name} added to cart`;
  };

  const search = useSelector((state) => state.search);
  const category = useSelector((state) => state.category);

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      <div className=" w-full py-10 flex flex-wrap gap-8  items-center justify-center">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLocaleLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            img={food.img}
            rating={food.rating}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
