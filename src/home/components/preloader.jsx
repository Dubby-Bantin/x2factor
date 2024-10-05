import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../../styles/preloader.css";

const AnimatedText = ({ text }) => {
  const textRef = useRef([]);
  const preloaderRef = useRef(null);

  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline();

    // Animate each letter from bottom to top
    tl.fromTo(
      textRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, stagger: 0.05, duration: 0.5, ease: "power2.out" }
    );

    // Animate the preloader container to clipPath from bottom to top
    tl.to(preloaderRef.current, {
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 1,
      ease: "power2.out",
      delay: 1, // Add delay if you want to give some time after text animation
    });
  }, [text]);

  return (
    <div
      className="preloader"
      ref={preloaderRef}
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div
        className="preloaderTextContainer"
        style={{ display: "flex", overflow: "hidden" }}
      >
        {text.split("").map((letter, index) => (
          <div
            key={index}
            ref={(el) => (textRef.current[index] = el)}
            style={{ display: "inline-block" }}
          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;
