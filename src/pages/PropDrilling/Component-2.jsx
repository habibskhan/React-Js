import React, { useContext } from "react";
import "./propdrilling.scss";
import { countContext } from "./Context.js";
// import { countContext } from "./PropDrilling";
import { Button } from "@mui/material";

// const DrillingText = ({count}) => {
const DrillingText = () => {
    const {count} = useContext(countContext);
    // const value = useContext(countContext);
    // const {count, setCount} = value;
 
  return (
    <>
      <div>
        {/* received data through props start */}

        {/* <p className="fs-2">{count}</p> */}

        {/* received data through props end */}

        {/* received data through prop drilling start */}
        <p className="fs-2">value = {count}</p>
        {/* received data through prop drilling end */}
      </div>
    </>
  );
};

export default DrillingText;
