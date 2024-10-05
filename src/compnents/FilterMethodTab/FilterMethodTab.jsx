import React, { useState } from "react";
import "./filterMethodTab.scss";

// const categories = [
//   { name: "Hospitality", key: "hospitality" },
//   { name: "IT", key: "it" },
//   { name: "Healthcare", key: "healthcare" },
//   { name: "Infrastructure", key: "infrastructure" },
//   { name: "Sports", key: "sports" },
//   { name: "Renewable Energy", key: "renewableEnergy" },
// ];

// const categoryContent = [
//   {
//     category: "hospitality",
//     title: "Hospitality",
//     desc: "Hospitality details are mentione here",
//   },
//   {
//     category: "it",
//     title: "IT",
//     desc: "IT details are mentione here",
//   },
//   {
//     category: "healthcare",
//     title: "Healthcare",
//     desc: "Healthcare details are mentione here",
//   },
//   {
//     category: "infrastructure",
//     title: "Infrastructure",
//     desc: "Infrastructure details are mentione here",
//   },
//   {
//     category: "sports",
//     title: "Sports",
//     desc: "Sports details are mentione here",
//   },
//   {
//     category: "renewableEnergy",
//     title: "Renewable Energy",
//     desc: "Renewable Energy details are mentione here",
//   },
// ];

const FilterMethodTab = ({ categoryName, categoryContent }) => {
//   const [selectedCategory, setSelectedCategory] = useState(categories[0].key);
  const [selectedCategory, setSelectedCategory] = useState(categoryName[0].key);

  const filterContent = categoryContent.filter(
    (content) => content.category === selectedCategory
  );

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }, []);

  return (
    <>
      <div className="category-section">
        <div className="category-filters">
          {categoryName.map((category) => (
        //   {categories.map((category) => (
            <button
              className={`category-button ${
                selectedCategory === category.key ? "active" : ""
              }`}
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="category-content-wrapper">
          {filterContent.map((item, i) => (
            <div className="category-content" key={i}>
              <h2 className="title">{item.title}</h2>
              <p className="desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterMethodTab;
