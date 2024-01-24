import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state, action) => {
      return !state;
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const privacyAction = privacySlice.actions;
export default counterStore;
