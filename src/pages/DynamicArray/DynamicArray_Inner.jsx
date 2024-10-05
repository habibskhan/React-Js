import React, { useEffect, useState } from "react";
import "./dynamicarray.module.scss";
import "./dynamicarray.scss";
import {
//   findAllFinalist,
//   findCategoryBySlug,
//   findProductBySlug,
  findBySlug as getSingleFinalist,
  findCategoryBySlug as getCategory,
} from "../../data/dynamicArrayData";
import { useNavigate, useParams } from "react-router-dom";

const DynamicArrayInner = () => {
//   const [backgroundColor, setBackgroundColor] = useState("#ff6b20");
//   const [ctaArrowColor, setCtaArrowColor] = useState();
//   const [pageclass, setPageClass] = useState("");
  let { slug, category: categorySlug } = useParams();
  const [data, setData] = useState({});
  const [category, setCategory] = useState({});
  let navigate = useNavigate();
//   const themes = {
//     "#ff6b20": "coral-color",
//     "#9fa6d4": "blue-color",
//     "#29afce": "turqoise-color",
//     "#fdbc00": "yellow-color",
//   };

  useEffect(() => {
    const finalistData = getSingleFinalist(slug);

    if (!finalistData) {
      navigate("/404");
    } else {
      // if (finalistData) {
        // setCategory(categoryData);
      setData(finalistData);
      setCategory(finalistData.categoryData);
    //   setPageClass(themes[finalistData.categoryData.templateColor]);
    //   setBackgroundColor(finalistData.categoryData.templateColor);
    //   setCtaArrowColor(finalistData.categoryData.arrowColor);
    }
  }, [slug]);

  return (
    <>
      <section className="imagine_sec2">
        <div className="row imagine_row">
          <div className="col-md-6 imagine_col order-md-2">
            <div className="imagine_finalist_image">
              <img
                src={data.heroImg}
                alt={data.alt}
                width={709.33}
                height={867}
                className="finalist_img"
              />
            </div>
          </div>
          <div className="col-md-6 imagine_col order-md-1">
            <div className="imagine_finalist_details">
              <h4
                className="finalist_name"
                dangerouslySetInnerHTML={{ __html: data.InnerName }}
              ></h4>
              <p
                className="finalist_desg"
                dangerouslySetInnerHTML={{ __html: data.desg }}
              ></p>
              <p
                className="finalist_desc"
                dangerouslySetInnerHTML={{ __html: data.desc }}
              ></p>
              {/* {data.web !== "" || data.insta !== "" ? (
                <div className="finalist_btn_container">
                  {data.web !== "" ? (
                    <div className="website_btn_wrapper">
                      <a
                        href={data.web}
                        className={`project-button ${pageclass}`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        WEBSITE
                      </a>
                    </div>
                  ) : null}
                  {data.insta !== "" ? (
                    <div className="website_btn_wrapper">
                      <a
                        href={data.insta}
                        className={`project-button ${pageclass}`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {data?.id == 16 ? `LINKEDIN` : `INSTAGRAM`}
                      </a>
                    </div>
                  ) : null}
                </div>
              ) : null} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicArrayInner;
