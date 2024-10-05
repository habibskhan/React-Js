import React, { useContext, useEffect, useState } from "react";
import "./propdrilling.scss";
import { Button } from "@mui/material";
import DrillingText from "./Component-2";
import { countContext } from "./Context.js";
// import { countContext } from "./PropDrilling";

// const DrillingButton = ({ text, setCount, count }) => {
const DrillingButton = ({ text }) => {
  const { count, setCount } = useContext(countContext);
  // const { setCount } = useContext(countContext);
  // const { count } = useContext(countContext);
  // const value = useContext(countContext);
  // const [count, setCount] = value;

  return (
    <>
      {/* received data through props start */}

      {/* <div className="d-flex gap-3 align-items-center mt-5 mb-5">
        <DrillingText count={count}/>
        <Button
          color="primary"
          variant="contained"
          className="fs-1"
          onClick={() => {
            setCount(count +1);
          }}
        >
          {text}
        </Button>
      </div> */}

      {/* received data through props end */}

      {/* received data through prop drilling start */}
      {/* <countContext.Consumer> */}
      <div className="d-flex gap-3 align-items-center mt-5 mb-5">
        <DrillingText />
        {/* <p className="fs-2">value = {count}</p> */}
        <Button
          color="primary"
          variant="contained"
          className="fs-1"
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          {count}
          {/* {text} */}
          Count
        </Button>
      </div>
      {/* </countContext.Consumer> */}
      {/* received data through prop drilling end */}
    </>
  );
};

export default DrillingButton;
