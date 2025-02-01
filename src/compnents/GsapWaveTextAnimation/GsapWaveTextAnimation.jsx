import React, { useEffect, useRef } from "react";
import "./gsapWaveTextAnimation.scss";
import { gsap } from "gsap";
// import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapWaveTextAnimation = () => {
  // Register GSAP SplitText plugin

  const quoteRef = useRef(null); // Ref to the quote element

  useEffect(() => {
    const quote = quoteRef.current;

    // Manually split text into spans
    const chars = quote.textContent.split("").map((char, index) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char; // Keep spaces intact
      span.style.display = "inline-block";
      return span;
    });

    quote.innerHTML = ""; // Clear the original text
    chars.forEach((span) => quote.appendChild(span)); // Append spans to the container

    // Animate using GSAP
    gsap.from(chars, {
      scrollTrigger: {
        trigger: quote, // Trigger animation when the quote section is in view
        start: "top 80%", // Start animation when top of section reaches 80% of the viewport height
        end: "botom 0%", // Optionally end the animation
        scrub: false, // No scrubbing, animation runs automatically when the section is in view
        // toggleActions: "restart pause reverse pause"

        onEnter: () => {
          // Reset and restart animation when entering
          gsap.from(chars, {
            duration: 0.8,
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: "0% 50% -50",
            ease: "back",
            stagger: 0.01,
          });
        },
      },

      // duration: 0.8,
      // opacity: 0,
      // scale: 0,
      // y: 80,
      // rotationX: 180,
      // transformOrigin: "0% 50% -50",
      // ease: "back",
      // stagger: 0.01,
    });
  }, []);

  return (
    <>
      <div className="wave_text_wrapper">
        <div id="quote" ref={quoteRef}>
          SplitText makes it easy to break apart the text in an HTML element so
          that each character, word, and/or line is wrapped in its own div tag.
        </div>

        <button id="animate">animate</button>
      </div>
    </>
  );
};

export default GsapWaveTextAnimation;
