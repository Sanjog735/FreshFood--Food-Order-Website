import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    incQuantity: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    decQuantity: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
  },
});

export const { addItem, removeItem, incQuantity, decQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
