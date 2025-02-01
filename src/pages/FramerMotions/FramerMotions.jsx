import "./framerMotions.scss";
import ScrollPorgress from "../../compnents/FramerMotion/ScrollProgess/ScrollProgess";
import { CustomAccordion } from "../../compnents/FramerMotion/Accordion/Accordion";

export const homeFaqData = [
  {
    title: "Industry Oriented Learning",
    content:
      "Our ATLAS uGDX B.Tech program is closely integrated with the industry, offering students direct access to best professors renowned globally for their technology expertise. Through Masterclasses, Industry sessions conducted by COs and CIOs of tech companies, and extensive industry exposure, students gain practical insights and hands-on experience, ensuring they are job-ready with skills that are highly valued by employers.",
  },
  {
    title: "Multidisciplinary & Transdisciplinary Learning",
    content:
      "Our ATLAS uGDX B.Tech program is closely integrated with the industry, offering students direct access to best professors renowned globally for their technology expertise. Through Masterclasses, Industry sessions conducted by COs and CIOs of tech companies, and extensive industry exposure, students gain practical insights and hands-on experience, ensuring they are job-ready with skills that are highly valued by employers. Our ATLAS uGDX B.Tech program isOur ATLAS uGDX B.Tech program isOur ATLAS uGDX B.Tech program is",
  },
  {
    title: "Rigorous Programming & Training Projects",
    content:
      "Our ATLAS uGDX B.Tech program is closely integrated with the industry, offering students direct access to best professors renowned globally for their technology expertise. Through Masterclasses, Industry sessions conducted by COs and CIOs of tech companies, and extensive industry exposure, students gain practical insights and hands-on experience, ensuring they are job-ready with skills that are highly valued by employers.",
  },
  {
    title: "Student Centric Learning",
    content:
      "Our ATLAS uGDX B.Tech program is closely integrated with the industry, offering students direct access to best professors renowned globally for their technology expertise. Through Masterclasses, Industry sessions conducted by COs and CIOs of tech companies, and extensive industry exposure, students gain practical insights and hands-on experience, ensuring they are job-ready with skills that are highly valued by employers.",
  },
  {
    title: "Tech-Enabled Infrastructure",
    content:
      "Our ATLAS uGDX B.Tech program is closely integrated with the industry, offering students direct access to best professors renowned globally for their technology expertise. Through Masterclasses, Industry sessions conducted by COs and CIOs of tech companies, and extensive industry exposure, students gain practical insights and hands-on experience, ensuring they are job-ready with skills that are highly valued by employers.",
  },
];

const FramerMotions = () => {
  return (
    <>
      <section className="framer_sec1">
        <div className="my_container">
          <CustomAccordion items={homeFaqData} />
        </div>
      </section>

      <section className="framer_sec2">
        <div className="my_container">
          <ScrollPorgress />
        </div>
      </section>
    </>
  );
};

export default FramerMotions;
