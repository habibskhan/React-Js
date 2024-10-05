import React, { useEffect, useState } from "react";
import "./headerv2.scss";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useWindowSize } from "react-use";
import {
  aboutusURL,
  careersURL,
  contactusURL,
  formURL,
  homeURL,
  productsURL,
  reducerURL,
} from "../../helpers/paths";
import { datelogo, downarrow, rightarrow } from "../../sources";
import HeaderNavItemV2 from "./HeaderNavItemV2";
const body = document.querySelector("body");

const menuData = [
  {
    id: 1,
    type: "text",
    mainTitle: "About",
    // mainLink: "/",
    dropdown: [
      {
        dropDownTitle: "Our Company",
        dropDownLink: careersURL,
      },
      {
        dropDownTitle: "Management Team",
        dropDownLink: productsURL,
      },
    ],
  },
  {
    id: 2,
    type: "text",
    mainTitle: "Business Ventures",
    // mainLink : "",
    dropdown: [
      {
        dropDownTitle: "Hospitality",
        dropDownLink: formURL,
      },
      {
        dropDownTitle: "IT",
        dropDownLink: reducerURL,
      },
      {
        dropDownTitle: "Healthcare",
        dropDownLink: careersURL,
      },
      {
        dropDownTitle: "Infrastructure",
        dropDownLink: careersURL,
      },
    ],
  },
  {
    id: 3,
    type: "text",
    mainTitle: "Gallery",
    mainLink: aboutusURL,
  },
  {
    id: 4,
    type: "text",
    mainTitle: "Investments",
    mainLink: contactusURL,
  },
  {
    id: 5,
    type: "text",
    mainTitle: "News Centre",
    mainLink: productsURL,
  },
];

const HeaderV2 = () => {
  const { width } = useWindowSize();
  const [isBg, setIsbg] = useState(false);
  const { pathname: locationPathname } = useLocation();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [navActiveIndex, setNavActiveIndex] = useState(null);
  const [isHover, setIsHover] = useState();
  const [isDropHover, setIsDropHover] = useState();
  // const [isDropdownActive, setIsDropdownActive] = useState(false);

  const navlinkList = menuData.map((nav, i) => (
    <li className="link_item" key={`menu-item-${menuData[i].id}`}>
      {nav.dropdown ? (
        <div
          className={`dropdown ${isHover === i ? "active" : ""}`}
          onMouseOver={() => setIsHover(i)}
          onMouseOut={() => setIsHover(false)}
        >
          {/* <span className={`nav_tab ${isDropdownActive === i ? "active" : ""}`}> */}
          <span className={`nav_tab`}>
            <span>{nav.mainTitle}</span>
            <img
              src={isBg ? downarrow : downarrow}
              alt="down arrow"
              className="dropdown_arrow"
            />
          </span>
          <ul className="dropdown_menu_wrapper">
            {nav.dropdown.map((drop, index) => (
              <li
                className="dropdown_menu"
                onMouseOver={() => setIsDropHover(index)}
                onMouseOut={() => setIsDropHover(false)}
                // onClick={() => setIsDropdownActive(i)}
                onClick={() => setIsHover(false)}
                key={index}
              >
                <Link
                  className={`dropdown_menu_link ${
                    isDropHover === index ? "active" : ""
                  }`}
                  to={drop.dropDownLink}
                >
                  {drop.dropDownTitle}
                </Link>
                <div className="arrow_wrapper">
                  <img src={rightarrow} alt="arrow" className="arrow" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav_tab active" : "nav_tab"
            }
            // onClick={() => setIsDropdownActive(null)}
            to={nav.mainLink}
          >
            {nav.mainTitle}
          </NavLink>
        </div>
      )}
    </li>
  ));

  useEffect(() => {
    body.style.overflow = "auto";
    // if (locationPathname === "/") {
    //   setIsbg(false);
    // } else {
    //   setIsbg(true);
    // }
    setIsMenuActive(false);
  }, [locationPathname]);

  const handleScroll = () => {
    // if (window.location.pathname === "/")
    if (window.scrollY > 60) {
      setIsbg(true);
    } else {
      setIsbg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  });

  useEffect(() => {
    setIsHover(false);
  }, [locationPathname]);

  const scrollHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleHamburgerClick = () => {
    setIsMenuActive(!isMenuActive);
    if (!isMenuActive) {
      // Disable scroll
      body.style.overflow = "hidden";
    } else {
      // Enable scroll
      body.style.overflow = "auto";
    }
  };

  const handleNavIndex = (i) => {
    if (navActiveIndex === i) {
      setNavActiveIndex(null);
    } else {
      setNavActiveIndex(i);
    }
  };

  // useEffect(() => {
  //   setNavActiveIndex(navActiveIndex);
  // }, [isMenuActive]);

  return (
    <>
      <header className={`header`}>
        {width >= 1024 ? (
          <div className={`navlinks_wrapper ${isBg ? "active" : ""}`}>
            <div className="logo_wrapper">
              <Link to={homeURL}>
                <img
                  className="logo_img"
                  src={datelogo}
                  alt="sanraj Logo"
                  onClick={scrollHandler}
                />
              </Link>
            </div>

            <div className="link_wrapper">
              <ul className="link_list">{navlinkList}</ul>
            </div>
          </div>
        ) : (
          <>
            <div className="my_container">
              <div className="hamburger_link_wrapper">
                <div className={`hamburger_wrapper ${isBg ? "active" : ""}`}>
                  <div className="logo_wrapper">
                    <Link className="logo_link" to={homeURL}>
                      <img
                        src={datelogo}
                        alt="sanraj logo"
                        className="mb_logo img-fluid"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`mobile_header_wrapper ${
                isMenuActive ? "active" : ""
              }`}
            >
              <div className="logo_wrapper">
                <Link className="logo_link" to={homeURL}>
                  <img
                    src={datelogo}
                    alt="sanraj logo"
                    className="mb_logo img-fluid"
                  />
                </Link>
              </div>
              <ul className="mobile_links_wrapper">
                {menuData.map((navData, i) => (
                  <HeaderNavItemV2
                    navData={navData}
                    key={parseInt(navData.id)}
                    arrIndex={i}
                    handleNavIndex={handleNavIndex}
                    navActiveIndex={navActiveIndex}
                  />
                ))}
              </ul>
            </div>

            {/* Hamburger lines UI start */}
            <div
              className={`hamburger_lines ${
                isMenuActive ? "active" : "" || isBg ? "black" : ""
              }`}
              onClick={handleHamburgerClick}
            >
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default HeaderV2;
