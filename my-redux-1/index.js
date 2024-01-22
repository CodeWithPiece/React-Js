const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};

const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore.counter = newStore.counter + 1;
  } else if (action.type === "DECREMENT") {
    newStore.counter = newStore.counter - 1;
  } else if (action.type === "ADD") {
    newStore.counter = newStore.counter + action.payload.number;
  }
  return newStore;
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

const subscriberOne = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);
store.subscribe(subscriberOne);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "ADD", payload: { number: 2 } });
