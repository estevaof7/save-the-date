"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export const TesteParallax = () => {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);

  const getRatio = (el: HTMLElement) => window.innerHeight / (window.innerHeight + el.offsetHeight);

  useGSAP(() => {
    [section1Ref, section2Ref, section3Ref, section4Ref].forEach((s, i) => {
      const section = s.current;
      // the first image (i === 0) should be handled differently because it should start at the very top.
      // use function-based values in order to keep things responsive

      const bg = section?.querySelector(".bg") as HTMLElement;

      if (bg && section) {
        gsap.fromTo(
          bg,
          {
            backgroundPosition: () =>
              i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px",
          },
          {
            backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: () => (i ? "top bottom" : "top top"),
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true, // to make it responsive
            },
          },
        );
      }
    });
  }, [section1Ref, section2Ref, section3Ref, section4Ref]);

  return (
    <>
      <section
        className="section"
        ref={section1Ref}
        style={{ backgroundImage: "url(/img/background/pedido-4.png)" }}
      >
        <h1>Simple parallax sections</h1>
      </section>
      <section className="section" ref={section2Ref}>
        <div
          className="bg"
          style={{
            backgroundImage: "url(/img/background/pedido-3.png)",
          }}
        ></div>
        <h1 className="text-white">Hey look, a title</h1>
      </section>
      <section className="section" ref={section3Ref}>
        <div
          className="bg"
          style={{ backgroundImage: "url(https://assets.codepen.io/16327/portrait-pattern-3.jpg)" }}
        ></div>
        <h1>So smooth</h1>
      </section>
      <section className="section" ref={section4Ref}>
        <div
          className="bg"
          style={{ backgroundImage: "url(https://assets.codepen.io/16327/portrait-pattern-4.jpg)" }}
        ></div>
        <h1>Nice, right?</h1>
      </section>
    </>
  );
};
