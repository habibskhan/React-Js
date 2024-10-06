import React, { useEffect } from "react";
import "./newsCard.scss";
import { newsCenterData } from "../../data/dynamicRoutingData";
import { useParams } from "react-router-dom";

const InnerPage = () => {
  const { slug } = useParams();

  // using find method
  const newsItem = newsCenterData.find((it) => it.slug == slug);

  // using filter method
  //   const newsItem = newsCenterData.filter((it) => it.slug == slug);

  console.log("Params slug", slug);
  console.log("Params url", useParams());
  console.log("NewsItem slug", newsItem.slug);

  // if you want find the index of active slug check below code
  //   const indexBySlug = newsCenterData.findIndex((item) => item.slug === slug);
  //   console.log("index", indexBySlug);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {/* using find method */}
      <section className="inner_sec">
        <div className="my-container">
          <div className="content_wrapper">
            <h2>{newsItem?.title}</h2>
            <h6>{newsItem?.desc}</h6>
            {newsItem?.innerContent.map((item, i) => (
              <p
                style={{ marginBottom: "1em" }}
                key={i}
                dangerouslySetInnerHTML={{ __html: item }}
              ></p>
            ))}
          </div>
        </div>
      </section>

      {/* using filter method */}
      {/* <section className="inner_sec">
        <div className="my-container">
          <div className="content_wrapper">
            <h2>{newsItem[0].title}</h2>
            <h6>{newsItem[0].desc}</h6>
            {newsItem[0].innerContent.map((item, i) => (
              <p
                style={{ marginBottom: "1em" }}
                key={i}
                dangerouslySetInnerHTML={{ __html: item }}
              ></p>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default InnerPage;
