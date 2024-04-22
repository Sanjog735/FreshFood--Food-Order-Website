import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import SearchSlice from "./slices/SearchSlice";
import CategorySlice from "./slices/CategorySlice";

export const Store = configureStore({
  reducer: {
    cart: CartSlice,
    search: SearchSlice,
    category: CategorySlice,
  },
});
