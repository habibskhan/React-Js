import React from "react";
import "./footer.scss";
import { datelogo, footerscroller, locationicon } from "../../sources";
import { Link } from "react-router-dom";
import {
  aboutusURL,
  careersURL,
  contactusURL,
  homeURL,
  productsURL,
} from "../../helpers/paths";

const Footer = () => {

  const scrollHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section className="footer_sec1">
        <img src={footerscroller} alt="Top Arrow" className="scrollup_img" onClick={scrollHandler}/>
        <div className="my-container">
          <div className="row footer_row">
            <div className="col-md-3 footer_col">
              <div className="logo_wrapper">
                <Link to={homeURL}>
                  <img src={datelogo} alt="Logo" className="footer_logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-3 footer_col">
              <div className="link_wrapper">
                <h4 className="footer_heading">Quick Links</h4>
                <ul className="link_list">
                  <li className="link_wrapper">
                    <Link to={aboutusURL} className="link">
                      About Us
                    </Link>
                  </li>
                  <li className="link_wrapper">
                    <Link to={productsURL} className="link">
                      Products
                    </Link>
                  </li>
                  <li className="link_wrapper">
                    <Link to={contactusURL} className="link">
                      Contact Us
                    </Link>
                  </li>
                  <li className="link_wrapper">
                    <Link to={careersURL} className="link">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 footer_col">
              <div className="link_wrapper">
                <h4 className="footer_heading">Information</h4>
                <ul className="link_list">
                  <li className="link_wrapper">
                    <Link className="link">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 footer_col">
              <div className="link_wrapper">
                <h4 className="footer_heading">Contact Us</h4>
                <p>
                  <Link className="details">
                    <img src={locationicon} alt="Location Icon" className="location_icon"/>
                    Address: Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Iusto a accusantium delectus.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer_sec2">
        <div className="my-container">
            <div className="footer_copy">
                <p className="copyright">
                Copyright © All Rights Reserved by ATLAS
                </p>
            </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
