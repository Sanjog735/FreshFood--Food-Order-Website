import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "category",
  initialState: "All",
  reducers: {
    setCatagory: (state, action) => {
      return (state = action.payload);
    },
  },
});
export const { setCatagory } = CategorySlice.actions;
export default CategorySlice.reducer;
