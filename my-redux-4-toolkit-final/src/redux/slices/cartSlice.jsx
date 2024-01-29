import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      console.log(action.payload.product);
      return [...state, action.payload.product];
    },
    remove: () => {},
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
