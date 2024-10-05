import React, { useState } from "react";
import "./aboutus.scss";
import Producttabs1 from "../../compnents/Tabs1/Tabs1";
import { howtoorderData } from "../../compnents/Data";
import { useWindowSize } from "react-use";
import Products from "../Products/Products";

const Aboutus = () => {
  const { width } = useWindowSize();
  const [list, setList] = useState(0);
  const [show, setShow] = useState(0);

  const handleClick = (event) => {
    setShow(show + 1);
  };

  const bussinessList = howtoorderData.map((item, i) => (
    <>
      {width > 600 ? (
        <div
          className={`details_wrapper ${list === i ? "active" : ""}`}
          onClick={() => {
            setList(i);
          }}
        >
          <p className={`business_text ${list === i ? "active" : ""}`}>
            {item.title}
          </p>
        </div>
      ) : (
        <div
          className={`details_wrapper ${list === i ? "active" : ""}`}
          onClick={() => {
            setList(i);
            handleClick();
          }}
        >
          <p className={`business_text ${list === i ? "active" : ""}`}>
            {item.title}
          </p>
        </div>
      )}
    </>
  ));
  return (
    <>
      <div className="aboutsec-1">
        <div className="my-container">
          <h1 className="heading">welcome to About Us</h1>
          <Producttabs1 />
        </div>
        <div className="details_container">{bussinessList}</div>
      </div>
      <div className="aboutsec_2">
        <Products selectIndex={list} 
        // selectForm={handleClick}
        />
      </div>
    </>
  );
};

export default Aboutus;
