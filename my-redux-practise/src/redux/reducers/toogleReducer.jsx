const INITIAL_STATE = false;

const toogleReducer = (state = INITIAL_STATE, action) => {
  let newState = state;
  if (action.type === "TOOGLE") {
    newState = !newState;
  }
  return newState;
};

export default toogleReducer;
