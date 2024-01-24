import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCERMENT") {
    return { ...newStore, counter: newStore.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...newStore, counter: newStore.counter - 1 };
  } else if (action.type === "ADD") {
    return {
      ...newStore,
      counter: newStore.counter + action.payload.num,
    };
  } else if (action.type === "MINUS") {
    return {
      ...newStore,
      counter: newStore.counter - action.payload.num,
    };
  } else if (action.type === "TOOGLE") {
    return {
      ...newStore,
      privacy: !newStore.privacy,
    };
  }
  return newStore;
};

const counterStore = createStore(counterReducer);

export default counterStore;
