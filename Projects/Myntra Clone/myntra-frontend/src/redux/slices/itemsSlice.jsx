import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    allInitialItems: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
