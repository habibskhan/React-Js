import React from "react";
import "./newsCard.scss";
import { Link } from "react-router-dom";
import { rightarrow } from "../../sources";

const NewsCard = ({ dataList, column, onCardClick, video, link, arrlink }) => {
  return (
    <>
      <div className="my_container">
        <div className="row news_row">
          {dataList.map((item, i) =>
            item.type === "video" ? (
              <div
                className={`${column ? column : "col-lg-4 col-md-6"} news_col`}
                key={i}
                onClick={() => video(item.video)}
              >
                <div className="news_box">
                  <div className="img_wrapper">
                    <img
                      width={492}
                      height={387}
                      src={item.img}
                      alt={item.alt}
                      className="news_img"
                    />
                  </div>
                  <div className="news_content">
                    {item.title && (
                      <div className="head_wrapper">
                        <h4 className="section_heading32">{item.title}</h4>
                        <Link
                          className="arrow_wrapper"
                          to={item.link ? item.link : () => false}
                        >
                          <img
                            width={21}
                            height={15}
                            src={rightarrow}
                            alt="arrow"
                            className="arrow_img"
                          />
                        </Link>
                      </div>
                    )}
                    <p className="section_desc20">{item.desc}</p>
                  </div>
                </div>
              </div>
            ) : item.type === "external-link" ? (
              <div
                className={`${column ? column : "col-lg-4 col-md-6"} news_col`}
                key={i}
              >
                <div className="news_box">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <div className="img_wrapper">
                      <img
                        width={492}
                        height={387}
                        src={item.img}
                        alt={item.alt}
                        className="news_img"
                      />
                    </div>
                    <div className="news_content">
                      {item.title && (
                        <div className="head_wrapper">
                          <h4 className="section_heading32">{item.title}</h4>
                          <a
                            className="arrow_wrapper"
                            to={item.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              width={21}
                              height={15}
                              src={rightarrow}
                              alt="arrow"
                              className="arrow_img"
                            />
                          </a>
                        </div>
                      )}
                      <p className="section_desc20">{item.desc}</p>
                    </div>
                  </a>
                </div>
              </div>
            ) : onCardClick ? (
              <div
                className={`${column ? column : "col-lg-4 col-md-6"} news_col`}
                key={i}
                onClick={() => onCardClick(item.slug)}
              >
                <div className="news_box">
                  <div className="img_wrapper">
                    <img
                      width={492}
                      height={387}
                      src={item.img}
                      alt={item.alt}
                      className="news_img"
                    />
                  </div>
                  <div className="news_content">
                    {item.title && (
                      <div className="head_wrapper">
                        <h4 className="section_heading32">{item.title}</h4>
                        <Link
                          className="arrow_wrapper"
                        //   to={`${newsCenterUrl}/${item.id}`}
                        >
                          <img
                            width={21}
                            height={15}
                            src={rightarrow}
                            alt="arrow"
                            className="arrow_img"
                          />
                        </Link>
                      </div>
                    )}
                    <p className="section_desc20">{item.desc}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`${column ? column : "col-lg-4 col-md-6"} news_col`}
                key={i}
              >
                <div className="news_box">
                  <div className="img_wrapper">
                    <img
                      width={492}
                      height={387}
                      src={item.img}
                      alt={item.alt}
                      className="news_img"
                    />
                  </div>
                  <div className="news_content">
                    {item.title && (
                      <div className="head_wrapper">
                        <h4 className="section_heading32">{item.title}</h4>
                        <Link
                          className="arrow_wrapper"
                          to={item.link ? item.link : () => false}
                        >
                          <img
                            width={21}
                            height={15}
                            src={rightarrow}
                            alt="arrow"
                            className="arrow_img"
                          />
                        </Link>
                      </div>
                    )}
                    <p className="section_desc20">{item.desc}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default NewsCard;
