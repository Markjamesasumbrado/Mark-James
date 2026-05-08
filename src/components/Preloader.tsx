"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Preloader.css";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Reset initial states
    gsap.set(".char", { y: 100, opacity: 0 });

    tl.to(".char", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.03,
      ease: "power4.out",
    })
    .to(lineRef.current, {
      scaleX: 1,
      duration: 0.8,
      ease: "power2.inOut",
    }, "-=0.4")
    .to(".char", {
      y: -100,
      opacity: 0,
      duration: 0.6,
      stagger: 0.02,
      ease: "power4.in",
      delay: 0.3,
    })
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.3");

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  const renderText = (text: string, className: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className={`char ${className}`} style={{ display: char === " " ? "inline" : "inline-block" }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div className="preloader" ref={containerRef}>
      <div className="tech-bg">
        <div className="tech-grid"></div>
        <div className="tech-scan"></div>
        <div className="tech-particles"></div>
        {/* HUD Elements */}
        <div className="hud-corner top-left"></div>
        <div className="hud-corner top-right"></div>
        <div className="hud-corner bottom-left"></div>
        <div className="hud-corner bottom-right"></div>
        <div className="hud-status">
          <div className="status-item">SYSTEM: ACTIVE</div>
          <div className="status-item">ENCRYPTION: 256-BIT</div>
          <div className="status-item">LOAD: COMPILING...</div>
        </div>
      </div>
      <div className="preloader-content">
        <div className="preloader-text-wrapper" ref={textRef}>
          <h1 className="preloader-title">
            <div className="name-line">{renderText("MARK JAMES", "white-char")}</div>
            <div className="name-line blue-line">{renderText("ASUMBRADO", "blue-char")}</div>
          </h1>
        </div>
        <div className="preloader-line-container">
          <div className="preloader-line" ref={lineRef} style={{ transform: "scaleX(0)" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
