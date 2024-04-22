import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCatagory } from "../stote/slices/CategorySlice";

const CategorryMenu = () => {
  const dispatch = useDispatch();
  const categoryItem = useSelector((state) => state.category);
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  return (
    <div className=" mx-6">
      <div className=" my-5 flex md:justify-center  gap-3 overflow-x-scroll lg:overflow-x-hidden scroll-smooth">
        <button
          onClick={() => dispatch(setCatagory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-gradient-to-r from-orange-400 to-red-500 hover:text-white ${
            categoryItem === "All" &&
            "bg-gradient-to-r from-orange-400 to-red-500 text-white"
          } `}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => dispatch(setCatagory(category))}
            className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-gradient-to-r from-orange-400 to-red-500 hover:text-white  ${
              categoryItem === category &&
              " bg-gradient-to-r from-orange-400 to-red-500 text-white"
            } `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorryMenu;
