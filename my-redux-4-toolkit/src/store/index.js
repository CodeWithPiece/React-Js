import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counter";
import privacySlice from "../slices/privacy";

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export default counterStore;
