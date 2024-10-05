import React, { useState } from "react";
import "./IncDec.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const IncDec = () => {
  const [number, setNumber] = useState(0);

  const Dec = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      setNumber(0);
      alert("Number is set to zero");
    }
  };

  return (
    <>
      <section className="incdec_sec1">
        <div className="my-container">
          <div className="incdec_container">
            <h1 className="heading">{number}</h1>
            <div className="btn_wrapper">
              <Tooltip title="Add" sx={{ fontSize: "1.875em" }}>
                <Button
                  className="incdec_btn"
                  onClick={() => {
                    setNumber(number + 1);
                  }}
                >
                  Increment{" "}
                  <AddIcon
                    sx={{ width: "1.75em", height: "1.75em" }}
                    className="add_icon"
                  />
                </Button>
              </Tooltip>

              <Tooltip title="Delete" sx={{ fontSize: "1.875em" }}>
                <Button className="incdec_btn" onClick={Dec}>
                  Decrement{" "}
                  <RemoveIcon
                    sx={{ width: "1.75em", height: "1.75em" }}
                    className="remove_icon"
                  />
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IncDec;
