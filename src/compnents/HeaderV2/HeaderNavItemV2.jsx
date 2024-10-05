import React from "react";
import { NavLink } from "react-router-dom";
import { rightarrow } from "../../sources";

const HeaderNavItemV2 = ({
  navData,
  navActiveIndex,
  handleNavIndex,
  arrIndex,
}) => {
  if (navData.dropdown) {
    return (
      <li className="nav_item">
        <div
          className="nav_link_wrapper"
          onClick={() => handleNavIndex(arrIndex)}
        >
          <span
            className={`nav_link ${
              navActiveIndex === arrIndex ? "dropActive" : ""
            }`}
          >
            {navData.mainTitle}
            <div className="arrow_wrapper">
              <img src={rightarrow} alt="arrow" className="arrow" />
            </div>
          </span>
        </div>

        <div
          className={`dropdown_box ${
            navActiveIndex === arrIndex ? "active" : ""
          }`}
        >
          {navData.dropdown.map((data, i) => (
            <div className="dropdown_list_item" key={i}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "drop_nav_link active" : "drop_nav_link"
                }
                to={data.dropDownLink}
              >
                {data.dropDownTitle}
                {/* <div className="arrow_wrapper">
                  <img src={rightarrow} alt="arrow" className="arrow" />
                </div> */}
              </NavLink>
            </div>
          ))}
        </div>
      </li>
    );
  }

  return (
    <li className="nav_item">
      {navData.linktype === "external" ? (
        <a
          className="nav_link"
          href={navData.mainLink}
          target="_blank"
          rel="noreferrer"
        >
          {navData.mainTitle}
        </a>
      ) : (
        <>
          <NavLink
            className={({ isActive }) => {
              return `${isActive ? "nav_link active" : "nav_link"}`;
            }}
            to={navData.mainLink}
          >
            {/* <div className="arrow_wrapper">
              <img src={rightarrow} alt="arrow" className="arrow" />
            </div> */}
            {navData.mainTitle}
          </NavLink>
        </>
      )}
    </li>
  );
};

export default HeaderNavItemV2;
