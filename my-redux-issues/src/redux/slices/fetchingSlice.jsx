import { createSlice } from "@reduxjs/toolkit";

const fetchingSlice = createSlice({
  name: "fetching",
  initialState: {
    status: false,
  },
  reducers: {
    setStatus: (state, action) => {
      let newState = state;
      return { ...newState, status: !newState.status };
    },
  },
});

export const fetchingAction = fetchingSlice.actions;
export default fetchingSlice;
