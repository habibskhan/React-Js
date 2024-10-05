import React, { useState } from "react";
import "./products.scss";
import Producttabs from "../../compnents/Tabs/Tabs";
import { howtoorderData } from "../../compnents/Data";
import { useWindowSize } from "react-use";

const Products = ({selectIndex, selectForm}) => {
  const { width } = useWindowSize();
  const [list, setList] = useState(0);

  console.log("list from step two", selectIndex);
  return (
    <>
      <div className="productsec-1">
        {/* <div className="my-container">
          <h1 className="heading">Welcome to Products</h1>
          <Producttabs />
        </div> */}
        <div className="details_container">
          {howtoorderData[selectIndex]?.child.map((item, i) => (
            <>
              {width > 600 ? (
                <div
                  className={`details_wrapper ${list === i ? "active" : ""}`}
                  onClick={() => setList(i)}
                >
                  <p className="business_text">{item.title}</p>
                </div>
              ) : (
                <div
                  className={`details_wrapper ${list === i ? "active" : ""}`}
                  onClick={() => {
                    setList(i);
                    // selectForm();
                  }}
                >
                  <p className="business_text">{item.title}</p>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
