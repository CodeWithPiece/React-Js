import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addAll: (state, action) => {
      return state.concat(action.payload.productsData);
    },
    remove: (state, action) => {
      return state.filter((product) => {
        return action.payload.product.id != product.id;
      });
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
