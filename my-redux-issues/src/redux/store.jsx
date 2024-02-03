import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import fetchingSlice from "./slices/fetchingSlice";

const store = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer,
    fetchingReducer: fetchingSlice.reducer,
  },
});

export default store;
