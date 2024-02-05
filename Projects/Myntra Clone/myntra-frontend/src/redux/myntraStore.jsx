import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./slices/itemsSlice";
import progressSlice from "./slices/progressSlice";

const myntraStore = configureStore({
  reducer: {
    itemsReducer: itemsSlice.reducer,
    progressReducer: progressSlice.reducer,
  },
});

export default myntraStore;
