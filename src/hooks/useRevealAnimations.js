import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const getRevealVars = (direction) => {
  const distance = 42;

  if (direction === "left") return { x: -distance, y: 0 };
  if (direction === "right") return { x: distance, y: 0 };
  if (direction === "scale") return { x: 0, y: 16, scale: 0.94 };

  return { x: 0, y: distance };
};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const useRevealAnimations = () => {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-gsap]").forEach((element) => {
        const direction = element.dataset.gsap || "up";
        const delay = Number(element.dataset.gsapDelay || 0);

        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            ...getRevealVars(direction),
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            delay,
            duration: 0.85,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray("[data-gsap-stagger]").forEach((group) => {
        const children = gsap.utils.toArray(group.children);
        const direction = group.dataset.gsapStagger || "up";

        gsap.fromTo(
          children,
          {
            autoAlpha: 0,
            ...getRevealVars(direction),
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: "power3.out",
            stagger: 0.1,
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: group,
              start: "top 85%",
              once: true,
            },
          },
        );
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
