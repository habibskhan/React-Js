import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./header.scss";
import HeaderNavItem from "./HeaderNavItem";
import { datelogo, downarrow } from "../../sources";
import {
  aboutusURL,
  careersURL,
  contactusURL,
  homeURL,
  productsURL,
} from "../../helpers/paths";
import { type } from "@testing-library/user-event/dist/type";
const body = document.querySelector("body");

const Header = () => {
  const [navLinkIndex, setNavLInkIndex] = useState(null);
  const { width } = useWindowDimensions();
  const { pathname: locationPathname } = useLocation();
  const [navActiveIndex, setNavActiveIndex] = useState(null);
  const [isMenuActive, setMenuActive] = useState(false);
  const [isBg, setIsbg] = useState(false);

  useEffect(() => {
    body.style.overflow = "auto";
    if (locationPathname === "/") {
      setIsbg(false);
    } else {
      setIsbg(true);
    }
    setMenuActive(false);
  }, [locationPathname]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", () => handleScroll);
  //   };
  // });

  // const handleScroll = () => {
  //   if (window.location.pathname === "/")
  //     if (window.pageXOffset > 60) {
  //       setIsbg(true);
  //     } else {
  //       setIsbg(false);
  //     }
  // };

  // const scrollHandler = () => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };

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

  const headerLink = [
    {
      id: 1,
      type: "img",
      img: datelogo,
      link: homeURL,
      linkType: "dropdown",
    },
    {
      id: 2,
      type: "text",
      title: "About Us",
      link: aboutusURL,
      linkType: "dropdown_1",
      dropDownLevel: 1,
      dropDownList: [
        {
          navTitle: "product 1",
          navLink: homeURL,
        },
        {
          navTitle: "product 2",
          navLink: productsURL,
        },
        {
          navTitle: "product 3",
          navLink: productsURL,
        },
        {
          navTitle: "product 3",
          navLink: productsURL,
        },
      ],
    },
    {
      id: 3,
      type: "text",
      title: "Products",
      link: productsURL,
    },
    {
      id: 4,
      type: "text",
      title: "Contact Us",
      link: contactusURL,
    },
    {
      id: 5,
      type: "text",
      title: "Careers",
      link: careersURL,
      linkType: "dropdown_1",
      dropDownLevel: 1,
      dropDownList: [
        {
          navTitle: "product 1",
          navLink: homeURL,
        },
      ],
    },
  ];

  const mobHeaderLink = [
    {
      id: 1,
      type: "text",
      title: "About Us",
      link: aboutusURL,
    },
    {
      id: 2,
      type: "text",
      title: "Products",
      link: productsURL,
    },
    {
      id: 3,
      type: "text",
      title: "Contact Us",
      link: contactusURL,
    },
    {
      id: 4,
      type: "text",
      title: "Careers",
      link: careersURL,
    },
  ];

  const headerData = headerLink.map((head, i) => (
    <>
      <li key={headerLink[i].id}>
        {head.type == "text" ? (
          <div
            onClick={() => setNavLInkIndex(i)}
            className={`nav-item ${navLinkIndex === i ? "active" : ""}`}
          >
            <NavLink to={head.link}>{head.title}</NavLink>

            {head.linkType === "dropdown_1" ? (
              <>
                <div className="row dropdown_box">
                  <div className="col-md-6 list_item">
                    <img src={datelogo} alt="" className="list_img" />
                  </div>
                  <div className="col-md-6 list_item">
                  <div className="dropdown_list_item col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <Link
                            className="dropdown_list_item_link"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Baguettes
                          </Link>
                        </div>
                        <div className="col-md-6 list_item1">
                          <div>
                            <img src={downarrow} alt="" />
                          </div>
                          <div>
                            <ul>
                              <li>1</li>
                              <li>2</li>
                              <li>3</li>
                            </ul>
                          </div>
                        </div>
                    </div>
                    </div>
                    <div className="dropdown_list_item">
                      <Link
                        className="dropdown_list_item_link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ciabatta
                      </Link>
                    </div>
                    <div className="dropdown_list_item">
                      <Link
                        className="dropdown_list_item_link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Focaccia
                      </Link>
                    </div>
                    <div className="dropdown_list_item">
                      <Link
                        className="dropdown_list_item_link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Artisanal Buns
                      </Link>
                    </div>
                    <div className="dropdown_list_item">
                      <Link
                        className="dropdown_list_item_link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Artisanal Loaves
                      </Link>
                    </div>
                    <div className="dropdown_list_item">
                      <Link
                        className="dropdown_list_item_link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Panini
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        ) : (
          <div
            onClick={() => setNavLInkIndex(i)}
            className={`logo-wrapper ${navLinkIndex === i ? "" : ""}`}
          >
            <NavLink to={homeURL}>
              <img
                src={head.img}
                alt="Logo"
                className="logo-img"
                // onClick={scrollHandler}
              />
            </NavLink>
          </div>
        )}
      </li>
    </>
  ));

  return (
    <>
      <header className="header-sec">
        {width > 1080 ? (
          <>
            <div className="my-container">
              <div className="navbar">
                <ul>{headerData}</ul>
                {/* {headerLink.map((navData, i) => (
                    <HeaderNavItem
                      navData={navData}
                      key={i}
                      arrIndex={i}
                      handleNavIndex={handleNavIndex}
                      navActiveIndex={navActiveIndex}
                    />
                  ))} */}
              </div>
            </div>
          </>
        ) : (
          <header className="header_mb">
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
                    <HeaderNavItem
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
              className={`hamburger_lines ${
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

export default Header;
