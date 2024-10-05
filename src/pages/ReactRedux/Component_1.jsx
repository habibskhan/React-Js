import React from "react";
import "./reactredux.scss";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "./Actions";

const Component1 = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();

  return (
    <>
      <section className="reducer_sec1">
        <div className="reducer_wrapper">
          <Button variant="contained" color="primary" onClick={() => dispatch(Decrement())}>
            -
          </Button>
          <p className="num">{myState}</p>
          <Button
            variant="contained"
            color="success"
            onClick={() => dispatch(Increment())}
          >
            +
          </Button>
        </div>
      </section>
    </>
  );
};

export default Component1;
