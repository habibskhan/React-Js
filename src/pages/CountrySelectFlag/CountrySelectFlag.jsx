import React, { useState } from "react";
import "./countrySelectFlag.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const CountrySelectFlag = () => {
  const [value, setValue] = useState();
// console.log("country", value);
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="countryFlag_sec1">
        <div className="my-container">
          <form onSubmit={submit}>
            <div className="input_wrapper">
              <PhoneInput
                placeholder="Enter phone number"
                defaultCountry="US"
                value={value}
                onChange={setValue}
                className="input_field"
              />
              {/* <input
                type="text"
                placeholder="Enter your phone no."
                className="input_field"
              /> */}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CountrySelectFlag;
