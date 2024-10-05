import React, { useState } from "react";
import "./customtabsV2.scss";

const CustomtabsV2 = ({ pillTabList, setIsTab, isTab, galleryImages }) => {
  return (
    <>
      <div className="tab_pills_wrapper">
        <div className="pill_wrapper">
          {pillTabList.map((btn, i) => (
            <button
              className={`pill_btn ${isTab === i ? "active" : ""}`}
              onClick={() => setIsTab(i)}
              key={i}
            >
              {btn.tabName}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery_wrapper">
        <div className="gallery_row">
          {galleryImages[isTab]?.gallery.map((data, index) => (
            <div className={`gallery_col`} key={index}>
             <h2 className="title">{data.title}</h2>
             <p className="desc">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// NOTE: 
// 1) I have taken this reference from 2 (i.e. TabPill and Gallery) diffrent conponent.
// 2) You can make it common according to your need.

export default CustomtabsV2;
