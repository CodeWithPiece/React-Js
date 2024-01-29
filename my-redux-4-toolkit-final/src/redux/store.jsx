import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    cartReducer: cartSlice.reducer,
    productReducer: productSlice.reducer,
  },
});

export default store;
