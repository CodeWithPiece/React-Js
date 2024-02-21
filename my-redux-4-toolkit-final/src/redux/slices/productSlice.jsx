import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addAll: (state, action) => {
      let newState = state;
      return newState.concat(action.payload.productsData);
    },
    remove: (state, action) => {
      let newState = state;
      return newState.filter((product) => {
        return action.payload.product.id != product.id;
      });
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
