import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Cart from "./components/Cart";
import { useState } from "react";

const App = () => {
  const [activeCart, setActiveCart] = useState(false);
  return (
    <div>
      <Navbar activeCart={activeCart} setActiveCart={setActiveCart} />
      <Cart activeCart={activeCart} setActiveCart={setActiveCart} />
      <Homepage />
    </div>
  );
};

export default App;
