import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addAll: (state, action) => {
      let newState = state;
      return (newState = action.payload.productsData);
    },
    remove: () => {},
  },
});

export const productActions = productSlice.actions;
export default productSlice;
