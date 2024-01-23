const INITIAL_STATE = [
  { id: 1, name: "Nirmal", number: "9898989889", email: "nirmal@gmail.com" },
  { id: 2, name: "Nirmal", number: "9898989889", email: "nirmal@gmail.com" },
  { id: 3, name: "Nirmal", number: "9898989889", email: "nirmal@gmail.com" },
  { id: 4, name: "Nirmal", number: "9898989889", email: "nirmal@gmail.com" },
  { id: 5, name: "Nirmal", number: "9898989889", email: "nirmal@gmail.com" },
  { id: 6, name: "Nirmal", number: "9898989889", email: "nirmal@gmail.com" },
];

const listReducer = (state = INITIAL_STATE, action) => {
  let newState = state;
  if (action.type === "DELETE") {
    return newState.filter((val) => {
      return val.id != action.payload.id;
    });
  }
  return newState;
};

export default listReducer;
