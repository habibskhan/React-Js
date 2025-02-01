import React, { useEffect, useRef } from "react";
import "./gsapLibrary.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateCircle } from "../../sources";
import GsapWaveTextAnimation from "../../compnents/GsapWaveTextAnimation/GsapWaveTextAnimation";
import GsapSticky from "../../compnents/GsapSticky/GsapSticky";
import { scrollData } from "../../compnents/Data";

gsap.registerPlugin(ScrollTrigger);

const CircleScaleOnScroll = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        circleRef.current,
        { clipPath: "circle(25% at 50% 50%)" }, // Initial clip-path
        {
          clipPath: "circle(75% at 50% 50%)", // Target clip-path
          scrollTrigger: {
            trigger: circleRef.current, // Element triggering the animation
            start: "top top", // Start animation when element is in center of viewport
            end: "bottom center", // End animation when element exits viewport
            // scrub: true, // Smoothly tie animation to scroll
            scrub: 1, // Smoothly tie animation to scroll
            // markers: true, // Show debug markers
          },
        }
      );
      console.log("path is", gsap);
    });

    return () => ctx.revert(); // Cleanup GSAP context on component unmount
  }, []);

  return (
    <>
      <section className="gsap_sec1">
        <div className="sticky_circle_wrap">
          <div className="sticky_circle">
            <div className="sticky_circle_element" ref={circleRef}>
              <img src={animateCircle} alt="" className="absolute_img" />
            </div>
            <div className="half_height_bg"></div>
          </div>
        </div>
      </section>

      <section className="gsap_sec2">
        <GsapWaveTextAnimation />
      </section>

      <section className="gsap_sec3">
        <GsapSticky scrollData={scrollData}/>
      </section>
    </>
  );
};

export default CircleScaleOnScroll;
