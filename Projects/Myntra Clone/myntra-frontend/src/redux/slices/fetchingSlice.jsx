import { createSlice } from "@reduxjs/toolkit";

const fetchingSlice = createSlice({
  name: "fetching",
  initialState: {
    fetchDone: false,
    fetchingStatus: false,
  },
  reducers: {
    markFetchDone: (state, action) => {
      state.fetchDone = true;
    },
    markFetchStatus: (state, action) => {
      state.fetchingStatus = action.payload.status;
    },
  },
});

export const fetchingActions = fetchingSlice.actions;
export default fetchingSlice;
