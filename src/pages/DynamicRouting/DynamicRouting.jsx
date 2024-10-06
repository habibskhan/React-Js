import React from "react";
import "./dynamicRouting.scss";
import NewsCard from "./NewsCard";
import { newsCenterData } from "../../data/dynamicRoutingData";
import { useNavigate } from "react-router-dom";
import { dynamicRouteURL } from "../../helpers/paths";

const DynamicRouting = () => {
  const navigate = useNavigate();

  const handleCardClick = (slug) => {
    navigate(`${dynamicRouteURL}/${slug}`);
  };

  return (
    <>
      <section className="dynamic_routing__Sec1">
        {/* using btn on click and navigate it to url */}
        <NewsCard dataList={newsCenterData} onCardClick={handleCardClick} />

        {/* using link */}
        <NewsCard dataList={newsCenterData} InterLink={true} />
      </section>
    </>
  );
};

export default DynamicRouting;
