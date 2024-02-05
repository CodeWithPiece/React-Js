import { createSlice } from "@reduxjs/toolkit";

const progressSlice = createSlice({
  name: "progress",
  initialState: false,
  reducers: {
    setProgress: (state, action) => {
      return !state;
    },
  },
});

export const progressAction = progressSlice.actions;
export default progressSlice;
