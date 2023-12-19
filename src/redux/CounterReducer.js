const initialState = {
  number: 0,
  title: "",
  completed: false,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      console.log("reduce payload", action.payload);
      return {
        ...state,
        title: action.payload,
        number: state.number + 1,
      };
    case "Decrement":
      if (state.number > 0) {
        return { number: state.number - 1 };
      } else return initialState;
    case "Clear":
      return initialState;
    default:
      return state;
  }
};

export default CounterReducer;
