const INITIAL_STATE = 0;

const counterReducer = (state = INITIAL_STATE, action) => {
  let newState = state;
  if (action.type === "INCREMENT") {
    newState = newState + 1;
  } else if (action.type === "DECREMENT") {
    newState = newState - 1;
  } else if (action.type === "ADD") {
    newState = newState + action.payload.num;
  }
  return newState;
};

export default counterReducer;
