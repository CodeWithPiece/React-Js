import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./slices/itemsSlice";
import fetchingSlice from "./slices/fetchingSlice";

const myntraStore = configureStore({
  reducer: {
    itemsReducer: itemsSlice.reducer,
    fetchingReducer: fetchingSlice.reducer,
  },
});

export default myntraStore;
