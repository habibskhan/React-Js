import React from "react";
import { Link, NavLink } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { downarrow, rightarrow } from "../../sources";

const HeaderNavItem2 = ({
  navData,
  navActiveIndex,
  handleNavIndex,
  arrIndex,
}) => {
  const { width } = useWindowDimensions();

  if (navData.dropDownLevel === 2) {
    return (
      <li className="nav_item">
        <div
          className="nav_link_wrapper"
          onClick={() => handleNavIndex(arrIndex)}
        >
          <span className="nav_link">{navData.navTitle}</span>
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

  if (navData.dropDownLevel === 1) {
    return (
      <li className="nav_item">
        <div
          className="nav_link_wrapper"
          onClick={() => handleNavIndex(arrIndex)}
        >
          {/* <span className="nav_link">{navData.mainTitle}</span> */}
          <div className="dropdown_open">
            <Link
              to={navData.mainLink} 
              style={{borderBottom: "none"}}
              className="nav_link"
            >
              {navData.mainTitle}
            </Link>
            {width >= 1024 ? (
              <img
                src={downarrow}
                alt="Down Arrow"
                className="headerdownarrow down_arrow"
              />
            ) : (
              // <span className="headerdownarrow">
              //   {navActiveIndex === arrIndex ? (
              //     <img src={downarrow} alt="Down Arrow" />
              //   ) : (
              //     <img src={downarrow} alt="Down Arrow" />
              //   )}
              // </span>
              <span className={`headerdownarrow ${navActiveIndex === arrIndex ? "active" : ""}`}>
                  <img src={downarrow} alt="Down Arrow" />
              </span>
            )}
          </div>
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
                to={data.navTitle}
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
        to={navData.mainLink}
      >
        {navData.mainTitle}
        <img src={rightarrow} alt="right arrow" className="active_arrow" />
      </NavLink>
    </li>
  );
};

export default HeaderNavItem2;
