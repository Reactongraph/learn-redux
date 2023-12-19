export const Increment = () => (dispatch) => {
  const hi = fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET",
  })
    .then((item) => item.json())
    .then((res) => {
      if (res) {
        // console.log("res", res)
        return dispatch({
          type: "Increment",
          payload: res,
        });
      } else {
        return dispatch({
          type: "Increment",
          payload: "error",
        });
      }
    });
};

export const Decrement = (payload) => {
  return {
    type: "Decrement",
    payload: payload,
  };
};

export const Clear = () => {
  return {
    type: "Clear",
  };
};
