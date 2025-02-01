import { useRef, useState } from "react";
import "./accordion.scss";
import { AnimatePresence, motion } from "framer-motion";


export const CustomAccordion = ({ items, firstActive = false }) => {
  const [openIndex, setOpenIndex] = useState(firstActive === true ? 0 : "");
  const activeAccordionRef = useRef(null);

  const handleItemClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    // setOpenIndex(index);
  };

  // const scrollToActiveAccordion = () => {
  //   if (activeAccordionRef.current) {
  //     activeAccordionRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   scrollToActiveAccordion();
  // }, [openIndex]);

  return (
    <>
      <div className="custom-accordion-container">
        {items.map((item, index) => (
          <div
            className={`custom-accordion-wrapper ${
              openIndex === index ? "active" : ""
            }`}
            key={index}
            ref={openIndex === index ? activeAccordionRef : null}
          >
            <div
              className="accordion-title"
              onClick={() => handleItemClick(index)}
            >
              <span>{item.title}</span>
              <span>{openIndex === index ? "-" : "+"}</span>
              {/* <img
                className="plus-minus"
                src={openIndex === index ? minusIcon : plusIcon}
                width={50}
                height={50}
                alt="plus and minus icon"
              /> */}
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="custom-accordion-motion"
                >
                  <div
                    className={`custom-accordion-item ${
                      openIndex === index ? "active" : ""
                    }`}
                  >
                    <div
                      className="accordion-content"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  );
};
