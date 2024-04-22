import React from "react";
import Categories from "../components/CategorryMenu";
import FoodItems from "../components/FoodItems";

const Homepage = () => {
  return (
    <div className=" pt-[115px] lg:pt-[68px]">
      <Categories />
      <FoodItems />
    </div>
  );
};

export default Homepage;
