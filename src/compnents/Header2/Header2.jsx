import React, { useEffect, useState } from "react";
import "./header2.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { aboutusURL, homeURL } from "../../helpers/paths";
import { Link, NavLink, useLocation } from "react-router-dom";
import { datelogo, downarrow } from "../../sources";
import HeaderNavItem2 from "./HeaderNavItem2";
const body = document.querySelector("body");

const headerLink = [
  {
    id: 1,
    type: "img",
    img: datelogo,
    link: homeURL,
  },
  {
    id: 2,
    type: "text",
    title: "About Us",
    link: aboutusURL,
    dropDownLevel: 1,
    dropDownList: [
      {
        navTitle: "Our Journey",
        navLink: "/",
      },
      {
        navTitle: "Gallery",
        navLink: "/",
      },
      {
        navTitle: "Financial",
        navLink: "/",
      },
      {
        navTitle: "Awards & Recognition",
        navLink: aboutusURL,
      },
    ],
  },
  {
    id: 3,
    type: "text",
    title: "About Us",
    link: aboutusURL,
  },
  {
    id: 3,
    type: "text",
    title: "About Us",
    link: aboutusURL,
  },
];

const mobHeaderLink = [
  {
    id: 1,
    type: "text",
    mainTitle: "About Us",
    mainLink: "",
    dropDownLevel: 1,
    dropDownList: [
      {
        navTitle: "Our Journey",
        navLink: "/",
      },
      {
        navTitle: "Gallery",
        navLink: "/",
      },
      {
        navTitle: "Financial",
        navLink: "/",
      },
      {
        navTitle: "Awards & Recognition",
        navLink: aboutusURL,
      },
    ],
  },
  {
    id: 2,
    type: "text",
    mainTitle: "About Us",
    mainLink: aboutusURL,
  },
  {
    id: 3,
    type: "text",
    mainTitle: "About Us",
    mainLink: aboutusURL,
  },
];

const Header2 = () => {
  const { width } = useWindowDimensions();
  const [navLinkIndex, setNavLinkIndex] = useState(null);
  const [isMenuActive, setMenuActive] = useState(null);
  const [navActiveIndex, setNavActiveIndex] = useState(null);
  const [isBg, setIsbg] = useState(false);
  const { pathname: locationPathname } = useLocation();
  const [clicked, setClicked] = useState(null);
  const [toggle, setToggle] = useState(true);

  // const toggle = (i) => {
  //   if (clicked === i) {
  //     return setClicked(null);
  //   }
  //   setClicked(i);
  // };

  const headerList = headerLink.map((item, i) => (
    <>
      <li key={i}>
        {item.type == "text" ? (
          <div
            onClick={() => setNavLinkIndex(i)}
            className={`nav-item ${navLinkIndex === i ? "active" : ""}`}
          >
            {/* <NavLink to={item.link}>{item.title}</NavLink> */}

            <div className="dropdown_open">
              <NavLink
                to={item.link}
                style={{ borderBottom: "none" }}
                className="nav_link"
                // onClick={() => toggle(i)}
                // onClick={() => setToggle(!toggle)}
              >
                {item.title}
              </NavLink>
              {item.dropDownLevel === 1 ? (
                width >= 1080 ? (
                  <span
                    className={`headerdownarrow ${
                      navLinkIndex === i ? "active" : ""
                    }`}
                  >
                    <img src={downarrow} alt="Down Arrow" />
                  </span>
                ) : null
              ) : null}
            </div>

            {/* {clicked === i ? ( */}
            {/* {toggle &&( */}
              {item.dropDownLevel === 1 ? (
                <>
                  <div
                    className={`dropdown_box ${
                      navLinkIndex === i ? "active" : ""
                    }`}
                  >
                    {item.dropDownList.map((data, i) => (
                      <div className="dropdown_list_item" key={i}>
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
                </>
              ) : null}
            {/* ) : null}
            )} */}
          </div>
        ) : (
          <div
            onClick={() => setNavLinkIndex(i)}
            className={`logo-wrapper ${navLinkIndex === i ? "" : ""}`}
          >
            <NavLink>
              <img src={item.img} alt="logo" className="logo-img" />
            </NavLink>
          </div>
        )}
      </li>
    </>
  ));

  const handleNavIndex = (i) => {
    if (navActiveIndex === i) {
      setNavActiveIndex(null);
    } else {
      setNavActiveIndex(i);
    }
  };

  const handleHamburgerClick = () => {
    setMenuActive(!isMenuActive);
    if (!isMenuActive) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    body.style.overflow = "auto";
    if (locationPathname === "/") {
      setIsbg(false);
    } else {
      setIsbg(true);
    }
    setMenuActive(false);
  }, [locationPathname]);

  return (
    <>
      <header className="header-sec2">
        {width > 1080 ? (
          <>
            <div className="my-container">
              <div className="navbar">
                <ul>{headerList}</ul>
              </div>
            </div>
          </>
        ) : (
          <header className="header_mb2">
            <div className="my-container">
              <div className="logo_wrapper">
                <Link className="logo_link" to={homeURL}>
                  <img src={datelogo} alt="MObile Logo" className="logo_img" />
                </Link>
              </div>
            </div>

            <nav className="nav_links_wrapper">
              <div
                className={`nav_line2_wrapper_flex_wrapper ${
                  isMenuActive ? "active" : ""
                }`}
              >
                <div className="logo_wrapper">
                  <Link className="logo_link" to="/">
                    <img src={datelogo} alt="atlas logo" className="logo_img" />
                  </Link>
                </div>
                <ul className="nav_line2_wrapper_flex">
                  {mobHeaderLink.map((navData, i) => (
                    <HeaderNavItem2
                      key={parseInt(navData.id)}
                      navData={navData}
                      arrIndex={i}
                      handleNavIndex={handleNavIndex}
                      navActiveIndex={navActiveIndex}
                    />
                  ))}
                </ul>
              </div>
            </nav>

            <div
              className={`hamburger_lines2 ${
                isMenuActive ? "active" : "" || isBg ? "black" : ""
              }`}
              onClick={handleHamburgerClick}
            >
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
          </header>
        )}
      </header>
    </>
  );
};

export default Header2;
