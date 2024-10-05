import React, { useEffect, useState } from "react";
// import "./homepage.scss";
import styles from "./homepage.module.scss";
import { useWindowSize } from "react-use";
import Customtabs from "../../compnents/Customtabs/Customtabs";
import FilterMethodTab from "../../compnents/FilterMethodTab/FilterMethodTab";
import CustomtabsV2 from "../../compnents/Customtabs/CustomtabsV2";
import { eventPillsTab } from "../../data/home";

const categories = [
  { name: "Hospitality", key: "hospitality" },
  { name: "IT", key: "it" },
  { name: "Healthcare", key: "healthcare" },
  { name: "Infrastructure", key: "infrastructure" },
  { name: "Sports", key: "sports" },
  { name: "Renewable Energy", key: "renewableEnergy" },
];

const categoryContent = [
  {
    category: "hospitality",
    title: "Hospitality",
    desc: "Hospitality details are mentione here",
  },
  {
    category: "it",
    title: "IT",
    desc: "IT details are mentione here",
  },
  {
    category: "healthcare",
    title: "Healthcare",
    desc: "Healthcare details are mentione here",
  },
  {
    category: "infrastructure",
    title: "Infrastructure",
    desc: "Infrastructure details are mentione here",
  },
  {
    category: "sports",
    title: "Sports",
    desc: "Sports details are mentione here",
  },
  {
    category: "renewableEnergy",
    title: "Renewable Energy",
    desc: "Renewable Energy details are mentione here",
  },
];

const Homepage = () => {
  const { width } = useWindowSize();
  const [isPillTab, setIsPillTab] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className={styles.homesec_1}>
        <div className="my-container">
          <div className="main_content">
            <h1 className={styles.heading}>Quick Start</h1>
            <p className={styles.heading_desc}>
              Welcome to the React documentation! This page will give you an
              introduction to the 80% of React concepts that you will use on a
              daily basis.
            </p>
          </div>
          <div className={styles.list_container}>
            <h2 className={styles.subheading}>You will learn</h2>
            <ul className={styles.subheading_desc}>
              <li>How to create and nest components</li>
              <li>How to add markup and styles</li>
              <li>How to display data</li>
              <li>How to render conditions and lists</li>
              <li>How to respond to events and update the screen</li>
              <li>How to share data between components</li>
            </ul>
            <h2 className={styles.subheading}>You will learn</h2>
            <ul className={styles.subheading_desc}>
              <li>How to create and nest components</li>
              <li>How to add markup and styles</li>
              <li>How to display data</li>
              <li>How to render conditions and lists</li>
              <li>How to respond to events and update the screen</li>
              <li>How to share data between components</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.homesec_2}>
        <div className="my-container">
          <Customtabs />
          {/* <div className={styles.tabs_container}></div> */}
          <div className={styles.tabs_content}>
            <h2 className={styles.subheading_1}>
              Creating and nesting components
            </h2>
            <p className={styles.subheading_desc}>
              React apps are made out of components. A component is a piece of
              the UI (user interface) that has its own logic and appearance. A
              component can be as small as a button, or as large as an entire
              page.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.homesec_3}>
        <div className="my-container">
          <FilterMethodTab
            categoryName={categories}
            categoryContent={categoryContent}
          />
        </div>
      </section>

      <section className={styles.homesec_4}>
        <div className="my-container">
          <CustomtabsV2
            pillTabList={eventPillsTab}
            isTab={isPillTab}
            setIsTab={setIsPillTab}

            galleryImages={eventPillsTab}
          />
        </div>
      </section>
    </>
  );
};

export default Homepage;
