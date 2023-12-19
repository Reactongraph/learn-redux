import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Clear } from "../redux/CounterAction";

export default function Counter() {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();
  console.log(number);

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      Counter
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <button onClick={() => dispatch(Increment({ dispatch: "Increment" }))}>
          +
        </button>
        <p>{number}</p>
        <button onClick={() => dispatch(Decrement({ dispatch: "Decrement" }))}>
          -
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(Clear({ dispatch: "Clear" }))}>
          Clear
        </button>
      </div>
    </div>
  );
}
