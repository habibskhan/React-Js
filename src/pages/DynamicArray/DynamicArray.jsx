import React from "react";
import "./dynamicarray.scss";
import styles from "./dynamicarray.module.scss";
import { Link } from "react-router-dom";
import { datas } from "../../data/dynamicArrayData";
import { findAll as getAllFinalist } from "../../data/dynamicArrayData";

const DynamicArry = () => {

//   const imagineList = datas.map((item, i) => (
  const imagineList = getAllFinalist("imagine").map((item, i) => (
    <div className={`col-md-4 col-lg-4 ${styles.imagine_col}`} key={i}>
      <div className={styles.imagine_wrapper}>
        <Link to={item.slug}>
          <img src={item.img} alt={item.alt} className={styles.imagine_img} />
        </Link>
        <div className={styles.image_content}>
          <div className={styles.imagine_details}>
            <h6 className={styles.imagine_name}>
              <Link to={item.slug}>{item.name}</Link>
            </h6>
            <p className={styles.imagine_desg}>{item.company}</p>
          </div>
          <p className={styles.imagine_info}>
            <Link to={item.slug} className={styles.imagine_link}>
              INFORMATION
            </Link>
            {/* <a href={item.watch}
                className={styles.imagine_link}
              >
                WATCH NOW
              </a> */}
            {/* {item.watch !== "" ? (
                <span
                  className={styles.imagine_link}
                  onClick={() => handleWatchClick(item.watch)}
                >
                  WATCH NOW
                </span>
              ) : null} */}
          </p>
        </div>
      </div>
    </div>
  ));

//   const growList = datas.map((item, i) => (
  const growList = getAllFinalist("grow").map((item, i) => (
    <div className={`col-md-4 col-lg-4 ${styles.imagine_col}`} key={i}>
      <div className={styles.imagine_wrapper}>
        <Link to={item.slug}>
          <img src={item.img} alt={item.alt} className={styles.imagine_img} />
        </Link>
        <div className={styles.image_content}>
          <div className={styles.imagine_details}>
            <h6 className={styles.imagine_name}>
              <Link to={item.slug}>{item.name}</Link>
            </h6>
            <p className={styles.imagine_desg}>{item.company}</p>
          </div>
          <p className={styles.imagine_info}>
            <Link to={item.slug} className={styles.imagine_link}>
              INFORMATION
            </Link>
            {/* <a href={item.watch}
                className={styles.imagine_link}
              >
                WATCH NOW
              </a> */}
            {/* {item.watch !== "" ? (
                <span
                  className={styles.imagine_link}
                  onClick={() => handleWatchClick(item.watch)}
                >
                  WATCH NOW
                </span>
              ) : null} */}
          </p>
        </div>
      </div>
    </div>
  ));

//   const createList = datas.map((item, i) => (
  const createList = getAllFinalist("create").map((item, i) => (
    <div className={`col-md-4 col-lg-4 ${styles.imagine_col}`} key={i}>
      <div className={styles.imagine_wrapper}>
        <Link to={item.slug}>
          <img src={item.img} alt={item.alt} className={styles.imagine_img} />
        </Link>
        <div className={styles.image_content}>
          <div className={styles.imagine_details}>
            <h6 className={styles.imagine_name}>
              <Link to={item.slug}>{item.name}</Link>
            </h6>
            <p className={styles.imagine_desg}>{item.company}</p>
          </div>
          <p className={styles.imagine_info}>
            <Link to={item.slug} className={styles.imagine_link}>
              INFORMATION
            </Link>
            {/* <a href={item.watch}
                className={styles.imagine_link}
              >
                WATCH NOW
              </a> */}
            {/* {item.watch !== "" ? (
                <span
                  className={styles.imagine_link}
                  onClick={() => handleWatchClick(item.watch)}
                >
                  WATCH NOW
                </span>
              ) : null} */}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section className={styles.dynamic_sec1}>
        <div className="my-container">
          <h6 className={styles.finalist_text}>
            IMAGINE finalists are pre-launch companies that are in the process
            of finalizing their businesses and brands. Please click through the
            image carousel for each finalist to view their full company video
          </h6>
          <div className={`row ${styles.imagine_row}`}>{imagineList}</div>
        </div>
      </section>

      <section className={styles.dynamic_sec1}>
        <div className="my-container">
          <h6 className={styles.finalist_text}>
            Grow finalists are pre-launch companies that are in the process
            of finalizing their businesses and brands. Please click through the
            image carousel for each finalist to view their full company video
          </h6>
          <div className={`row ${styles.imagine_row}`}>{createList}</div>
        </div>
      </section>

      <section className={styles.dynamic_sec1}>
        <div className="my-container">
          <h6 className={styles.finalist_text}>
            Create finalists are pre-launch companies that are in the process
            of finalizing their businesses and brands. Please click through the
            image carousel for each finalist to view their full company video
          </h6>
          <div className={`row ${styles.imagine_row}`}>{growList}</div>
        </div>
      </section>
    </>
  );
};

export default DynamicArry;
