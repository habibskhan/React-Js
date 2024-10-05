import React, { useReducer } from "react";
import "./usereducer.scss";
import { Button } from "@mui/material";

const initialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "Increment") {
    return state + 1;
  }
  if (action.type === "Decrement" && state > 0) {
    return state - 1;
  }
  // switch (action.type) {
  //   case "Increment":
  //     return state + 1;
  //   case "Decrement":
  //     return state - 1;
  //   default:
  //     return state;
  // }
  return state;
};

const ReducerPractice = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [state , dispacth] = useReducer(reducer , 0);
  return (
    <>
      <section className="reducer_sec1">
        <div className="reducer_wrapper">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch({ type: "Decrement" });
            }}
          >
            -
          </Button>
          <p className="num">{state}</p>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              dispatch({ type: "Increment" });
            }}
          >
            +
          </Button>
        </div>
      </section>
    </>
  );
};

export default ReducerPractice;
