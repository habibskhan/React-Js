import React, { useEffect, useRef, useState } from "react";
import "./slugtabs.scss";
import { useWindowSize } from "react-use";
import _ from "lodash";
import { useNavigate, useParams } from "react-router-dom";

const slugTabData = [
  {
    id: 1,
    slug: "one",
    heading: "One",
    details: "content to be displayed",
    detail: [
      {
        list: "Excellent dispresion",
      },
    ],
  },
  {
    id: 2,
    slug: "two",
    heading: "Two",
    details: "content to be displayed content to be displayed",
    detail: [
      {
        list: "Excellent dispresion",
      },
      {
        list: "Excellent dispresion",
      },
    ],
  },
  {
    id: 3,
    slug: "three",
    heading: "Three",
    details:
      "content to be displayed content to be displayed content to be displayed",
    detail: [
      {
        list: "Excellent dispresion",
      },
      {
        list: "Excellent dispresion",
      },
      {
        list: "Excellent dispresion",
      },
    ],
  },
];

const Slugtab = () => {
  let { slug } = useParams();
  const { width } = useWindowSize();
  const [rightList, setRightList] = useState(0);
  const [data, setData] = useState({});
  const tabRef = useRef();
  let navigate = useNavigate();


  useEffect(() => {
    const productData = findProductBySlug(slug);
    console.log({ productData });
    if (!productData) {
      // navigate("/404");
    } else {
      setData(productData);
    }
  }, [slug]);

  const tabList = slugTabData?.map((item, i) => (
    <div className="col-md-4" key={i}>
      <h2
        className={`heading ${item.slug === slug ? "active" : null}`}
        onClick={() => navigate(`/careers/${item.slug}`)}
        dangerouslySetInnerHTML={{ __html: item.heading }}
      ></h2>
    </div>
  ));

  const leftClickHandler = (scrollOffset, i) => {
    tabRef.current.scrollLeft += scrollOffset;
    const prevSlug = findPrevProductSlug(slug);
    navigate(`/careers/${prevSlug}`);
  };

  const rightClickHandler = (scrollOffset, i) => {
    tabRef.current.scrollLeft += scrollOffset;
    const nextSlug = findNextProductSlug(slug);
    navigate(`/careers/${nextSlug}`);
  };

  const mbTabsList = slugTabData.map((item, i) => (
    <option
      value={item.slug}
      key={i}
      data-productindexid={i}
      dangerouslySetInnerHTML={{ __html: item.heading }}
    ></option>
  ));

  const handleProductTabChange = (e) => {
    const productIndexId = e.target.selectedOptions[0].dataset.productindexid;
    setRightList(Number(productIndexId));
  };

  

  if (!data) {
    return "";
  }

  return (
    <>
      <section className="customtab_sec1">
        <div className="my-container">
          {width > 767 ? (
            <div className="tab_container">
              <div ref={tabRef} className="row">
                {tabList}
              </div>
              <div className="product_arrow">
                <img
                  src="https://via.placeholder.com/70x70"
                  alt="left arrow"
                  className="product_left_arrow"
                  //   onMouseOver={(e) => (e.currentTarget.src = whitearrowleft)}
                  //   onMouseOut={(e) => (e.currentTarget.src = leftarrow)}
                  onClick={() => leftClickHandler(-500, rightList)}
                />
                <img
                  src="https://via.placeholder.com/70x70"
                  alt="right arrow"
                  className="product_right_arrow"
                  //   onMouseOver={(e) => (e.currentTarget.src = whitearrowright)}
                  //   onMouseOut={(e) => (e.currentTarget.src = rightarrow)}
                  onClick={() => rightClickHandler(+500, rightList)}
                />
              </div>
            </div>
          ) : (
            <div className="mbtab_container">
              <select value={slug} onChange={handleProductTabChange}>
                {mbTabsList}
              </select>
            </div>
          )}
          <div className="tab_content_container">
            {data["details"]}
            {data["detail"]?.map((item) => {
              return (
                <div
                  className="list"
                  dangerouslySetInnerHTML={{ __html: item.list }}
                ></div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Slugtab;

export const findProductBySlug = (slug) => {
  return _.find(slugTabData, { slug: slug });
};

export const findPrevProductSlug = (current_slug) => {
  const currentIndex = _.findIndex(slugTabData, { slug: current_slug });
  if (currentIndex == 0) {
    return slugTabData[currentIndex].slug;
  }
  return slugTabData[currentIndex - 1].slug;
};

export const findNextProductSlug = (current_slug) => {
  const currentIndex = _.findIndex(slugTabData, { slug: current_slug });
  const lastIndex = slugTabData.length - 1;
  if (currentIndex == lastIndex) {
    return slugTabData[currentIndex].slug;
  }
  return slugTabData[currentIndex + 1].slug;
};
