"use client";
import { useEffect } from "react";
import gsap from "gsap";

const useGsapAnimations = () => {
  useEffect(() => {
    const animations = [
      // Zoom Effects
      { className: "animate-zoom-in", from: { scale: 0 }, to: { scale: 1 } },
      { className: "animate-zoom-out", from: { scale: 2 }, to: { scale: 1 } },

      // Fade Effects
      {
        className: "animate-fade-in",
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      {
        className: "animate-fade-out",
        from: { opacity: 1 },
        to: { opacity: 0 },
      },

      // Slide Directions
      {
        className: "animate-slide-left",
        from: { x: -100, opacity: 0 },
        to: { x: 0, opacity: 1 },
      },
      {
        className: "animate-slide-right",
        from: { x: 100, opacity: 0 },
        to: { x: 0, opacity: 1 },
      },
      {
        className: "animate-slide-top",
        from: { y: -100, opacity: 0 },
        to: { y: 0, opacity: 1 },
      },
      {
        className: "animate-slide-bottom",
        from: { y: 100, opacity: 0 },
        to: { y: 0, opacity: 1 },
      },

      // Rotate
      {
        className: "animate-rotate",
        from: { rotation: -180, opacity: 0 },
        to: { rotation: 0, opacity: 1 },
      },

      // Scale (Bounce Effect)
      {
        className: "animate-bounce",
        from: { scale: 0.8 },
        to: { scale: 1.2, yoyo: true, repeat: 1, ease: "bounce.out" },
      },

      // Flip Effect
      {
        className: "animate-flip",
        from: { rotateY: 180, opacity: 0 },
        to: { rotateY: 0, opacity: 1 },
      },
    ];

    animations.forEach(({ className, from, to }) => {
      gsap.fromTo(`.${className}`, from, {
        ...to,
        duration: 2,
        stagger: 0.2,
        ease: "power3.out",
      });
    });
  }, []);
};

export default useGsapAnimations;
