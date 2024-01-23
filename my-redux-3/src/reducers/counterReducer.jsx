const INITIAL_STATE = {
  value: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  let newState = state;
  if (action.type == "INCREMENT") {
    return { ...newState, value: newState.value + 1 };
  } else if (action.type == "DECREMENT") {
    return { ...newState, value: newState.value - 1 };
  }
  return newState;
};

export default counterReducer;
