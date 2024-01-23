export const incrementNumber = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrementNumber = () => {
  return {
    type: "DECREMENT",
  };
};

export const deleteAction = (id) => {
  return {
    type: "DELETE",
    payload: {
      id: id,
    },
  };
};
