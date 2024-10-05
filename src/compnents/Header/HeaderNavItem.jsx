import React from "react";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { downarrow, rightarrow } from "../../sources";
import SubNavItem from "./HeaderSubNav";

const HeaderNavItem = ({
  navData,
  navActiveIndex,
  handleNavIndex,
  arrIndex,
}) => {
  const { width } = useWindowDimensions();

  if (navData.dropdownLevel === 2) {
    return (
      <li className="nav_item">
        <div
          className="nav_link_wrapper"
          onClick={() => handleNavIndex(arrIndex)}
        >
          <span className="nav_link">{navData.title}</span>
          {width >= 1024 ? (
            <img
              src={downarrow}
              alt="Down Arrow"
              className="headerdownarrow down_arrow"
            />
          ) : (
            <span className="headerdownarrow">
              {navActiveIndex === arrIndex ? (
                <img src={downarrow} alt="Down Arrow" />
              ) : (
                <img src={downarrow} alt="Down Arrow" />
              )}
            </span>
          )}
        </div>

        <div
          className={`dropdown_box ${
            navActiveIndex === arrIndex ? "active" : ""
          }`}
        >
          {width >= 1024 && (
            <img src={downarrow} className="dropdownboxuparrow down_arrow" />
          )}
          <>
          {navData.dropDownList.map((dropDownData, i) => (
            <SubNavItem
              dropDownData={dropDownData}
              key={dropDownData.id}
              dropDownIndex={i}
            />
          ))}
          </>
        </div>
      </li>
    );
  }

  if (navData.dropdownLevel === 1) {
    return (
      <li className="nav_item">
        <div
          className="nav_link_wrapper"
          onClick={() => handleNavIndex(arrIndex)}
        >
          <span className="nav_link">{navData.title}</span>
          {width >= 1024 ? (
            <img
              src={downarrow}
              alt="Down Arrow"
              className="headerdownarrow down_arrow"
            />
          ) : (
            <span className="headerdownarrow">
              {navActiveIndex === arrIndex ? (
                <img src={downarrow} alt="Down Arrow" />
              ) : (
                <img src={downarrow} alt="Down Arrow" />
              )}
            </span>
          )}
        </div>

        <div
          className={`dropdown_box ${
            navActiveIndex === arrIndex ? "active" : ""
          }`}
        >
          {width >= 1024 && (
            <img 
            src={downarrow} 
            alt="down arrow" 
            className="dropdownboxuparrow down_arrow" 
            />
          )}
          {navData.dropDownList.map((data, i) => (
            <div className="dropdown_list_item" key={data.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "dropdown_list_item_link active"
                    : "dropdown_list_item_link"
                }
                to={data.navLink}
              >
                {data.navTitle}
              </NavLink>
            </div>
          ))}
        </div>
      </li>
    );
  }

  return (
    <li className="nav_item">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav_link active" : "nav_link"
        }
        to={navData.link}
      >
        {navData.title}
        <img src={rightarrow} alt="right arrow" className="active_arrow" />
      </NavLink>
    </li>
  );
};

export default HeaderNavItem;
