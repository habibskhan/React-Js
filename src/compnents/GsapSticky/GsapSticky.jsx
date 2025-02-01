import React, { useEffect, useRef } from "react";
import "./GsapSticky.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger,ScrollSmoother); // ScrollSmoother is not free
gsap.registerPlugin(ScrollTrigger);

const GsapSticky = ({ scrollData, title, desc }) => {
  const progressRef = useRef(null);
  const numbersRef = useRef([]);
  const contentRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".img_right > .img_box:not(:first-child)", {
        opacity: 0,
        scale: 0.5,
      });

      const animation = gsap.to(".img_right > .img_box:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".sticky_scroll",
        start: "top 20%",
        end: "bottom bottom",
        pin: ".right_box",
        // pin: ".scroll_row",
        animation: animation,
        scrub: true,
        markers: true,
      });

      // Scroll progress animation
      gsap.to(progressRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".sticky_scroll",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      contentRef.current.forEach((content) => {
        gsap.fromTo(
          content,
          { opacity: 0.5 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: content,
              start: "top 80%",
              end: "top 40%",
              scrub: true,
            },
          }
        );
      });

      // Number fade-in animation
      numbersRef.current.forEach((num, index) => {
        gsap.fromTo(
          num,
          { opacity: 0, y: 10, },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: num,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      });

      // ScrollSmoother.create({
      //   smooth: 1,
      //   effects: true,
      //   smoothTouch: 0.1,
      // });

 

    });

    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []);

  return (
    <section className="sticky_scroll">
      <div className="sticky_circle_wrap">
        <div className="sticky_circle">
          <div className="sticky_circle_element">
            {/*  */}
            <div className="scroll_progress_wrapper">
              <div className="scroll_progress" ref={progressRef}></div>
              {scrollData.map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: `${i * (100 / scrollData.length)}%`, // Distribute evenly
                    // transform: "translateY(-50%)",
                  }}
                >
                  <div className="scroll_marker"></div>
                  {/* <div className="scroll_number">{i+1}</div> */}
                  <div
                    className="scroll_number"
                    ref={(el) => (numbersRef.current[i] = el)}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              ))}
            </div>
            <div className="row scroll_row">
              <div className="col-md-6 scroll_col left_box">
                <div className="box">
                  <div className="text_container">
                    <h2 className="section_title44">{title}</h2>
                    <p className="section_desc">{desc}</p>
                  </div>
                  {scrollData.map((item, i) => (
                    <div
                      className="content_wrapper"
                      key={i}
                      ref={(el) => (contentRef.current[i] = el)}
                    >
                      <h3 className="section_title48">{item.subTitle}</h3>
                      {item.subDesc.map((desc, index) => (
                        <p className="section_desc" key={index}>
                          {desc}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-md-6 scroll_col">
                <div className="box img_right right_box">
                  {scrollData.map((item, i) => (
                    <div className="img_box" key={i}>
                      <img
                        src={item.img}
                        alt={item.subTitle}
                        width={820}
                        height={820}
                        className="product_img"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GsapSticky;
