import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state, action) => {
      return { ...state, counterVal: state.counterVal + 1 };
    },
    decrement: (state, action) => {
      return { ...state, counterVal: state.counterVal - 1 };
    },
    add: (state, action) => {
      return {
        ...state,
        counterVal: state.counterVal + action.payload.num,
      };
    },
    subtract: (state, action) => {
      return {
        ...state,
        counterVal: state.counterVal - action.payload.num,
      };
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
