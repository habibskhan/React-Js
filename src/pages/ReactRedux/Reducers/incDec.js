const initialState = 0;

const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "Decrement":
      // return state - 1;
      return state > 0 ? state - 1 : 0;
    default:
      return state;
  }
  // if (action.type === "Increment") {
  //   return state + 1;
  // }
  // if (action.type === "Decrement" && state > 0) {
  //   return state - 1;
  // }
  // return state;
};

export default changeNumber;
