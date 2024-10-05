import React, { useState, createContext } from "react";
import "./propdrilling.scss";
import DrillingButton from "./Component-1";
import { countContext } from "./Context.js";
import DrillingText from "./Component-2.jsx";

// const countContext = createContext(null);

const PropDrilling = () => {
  const [count, setCount] = useState(0);

  // const CountNumber = () => {
  //   setCount(count + 1);
  // };

  return (
    <>
      {/* passed data through props start */}

      {/* <section className="drilling_sec1">
        <div className="my-container">
          <div className="d-flex gap-3 align-items-center mt-5 mb-5">
            <DrillingButton text="Count" setCount={CountNumber} count={count} />
          </div>
        </div>
      </section> */}

      {/* passed data through props start */}

      {/* passed data through prop drilling start */}

      {/* <countContext.Provider value={{value1: [count, setCount], value2: [numb, setNumb] }}> */}
      {/* <countContext.Provider value={{value1: [count, setCount] }}> */}
      {/* <countContext.Provider value={count}> */}
      {/* <countContext.Provider value={[count, setCount]}> */}
      {/* <countContext.Provider value={{count, setCount}}> */}
      <section className="drilling_sec1">
        <div className="my-container">
          <div className="d-flex gap-3 align-items-center mt-5 mb-5">
            {/* <countContext.Provider value={count}>
              <DrillingText />
            </countContext.Provider>  */}
            <countContext.Provider value={[ count, setCount ]}>
            {/* <countContext.Provider value={{ count, setCount }}> */}
              <DrillingButton
                // text="Count"
                // setCount={CountNumber}
              />
            </countContext.Provider>
          </div>
        </div>
      </section>
      {/* </countContext.Provider> */}
      {/* passed data through prop drilling start */}
    </>
  );
};

export default PropDrilling;
// export {countContext};
