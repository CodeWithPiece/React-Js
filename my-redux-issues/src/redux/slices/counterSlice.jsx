import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    name: "",
    status: false,
  },
  reducers: {
    setCount: (state, action) => {
      let newState = state;
      return { ...newState, count: newState.count + 1 };
    },
    setValue: (state, action) => {
      let newState = state;
      return {
        ...newState,
        name: action.payload.name,
        status: action.payload.status,
      };
    },
  },
});

export const counterAction = counterSlice.actions;
export default counterSlice;
