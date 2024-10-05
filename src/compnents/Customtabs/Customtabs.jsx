import React, { useRef, useState } from "react";
import "./Customtabs.scss";
import { useWindowSize } from "react-use";

const tabData = [
  {
    id: 1,
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

const Customtabs = () => {
  const { width } = useWindowSize();
  const [rightList, setRightList] = useState(0);
  const tabRef = useRef();

  const tabList = tabData?.map((item, i) => (
    <div className="col-md-4" key={i}>
      <h2
        className={`heading ${rightList === i ? "active" : ""}`}
        onClick={() => setRightList(i)}
      >
        {item.heading}
      </h2>
    </div>
  ));

  const leftClickHandler = (scrollOffset, i) => {
    tabRef.current.scrollLeft += scrollOffset;
    if (i !== 0) {
      setRightList(i - 1);
    } else {
      setRightList(i);
    }
  };

  const rightClickHandler = (scrollOffset, i) => {
    tabRef.current.scrollLeft += scrollOffset;
    if (i !== tabData.length - 1) {
      setRightList(i + 1);
    } else {
      setRightList(i);
    }
  };

  // const tabContent = tabData?.map((item, i) => (
  //   <div className="content">{item.details}</div>
  // ));

  const mbTabsList = tabData.map((item, i) => (
    <option
      value={item.heading}
      key={i}
      data-productindexid={i}
      dangerouslySetInnerHTML={{ __html: item.heading }}
    ></option>
  ));

  const handleProductTabChange = (e) => {
    const productIndexId = e.target.selectedOptions[0].dataset.productindexid;
    setRightList(Number(productIndexId));
  };

  return (
    <>
      <section className="customtab_sec1">
        <div className="my-container">
          {width > 767 ? (
            <div className="tab_container">
              <div className="row" ref={tabRef}>
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
              <select onChange={handleProductTabChange}>{mbTabsList}</select>
            </div>
          )}
          <div className="tab_content_container">
            {tabData[rightList]["details"]}
            {tabData[rightList]["detail"].map((item) => {
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

export default Customtabs;
