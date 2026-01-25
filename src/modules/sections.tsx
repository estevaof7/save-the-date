"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { MyLine } from "./timeline";
import { CountDownSection } from "./count-down-section";
import { useGetWindowWidth } from "@/shared/vendors/shadcn/hooks/use-mobile";
import { Section1 } from "./section-1";
import { Section2 } from "./section-2";
gsap.registerPlugin(ScrollTrigger);

export const Sections = () => {
  const windowWidth = useGetWindowWidth();

  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLElement>(null);

  const getRatio = (el: HTMLElement) => window.innerHeight / (window.innerHeight + el.offsetHeight);

  useGSAP(() => {
    [section1Ref, section2Ref, section4Ref, section3Ref].forEach((s, i) => {
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
  }, [section1Ref, section2Ref, section4Ref, section3Ref]);

  return (
    <main className="text-[#FFF2CA]">
      <section
        className="section text-[#FFF2CA] lg:bg-cover"
        ref={section1Ref}
        style={{
          backgroundImage: "url(/img/background/pedido-4.png)",
        }}
      >
        <Section1 />
      </section>
      <section className="section" ref={section2Ref}>
        <div
          className="bg"
          style={{
            backgroundImage:
              windowWidth < 1250
                ? "url(/img/background/pedido-5.png)"
                : "url(/img/background/pedido-7.png)",
          }}
        ></div>
        <Section2 />
      </section>
      <div className="line-section" ref={section3Ref}>
        <div
          className="bg"
          style={{
            backgroundImage:
              windowWidth < 750
                ? "url(/img/background/FUNDO.png)"
                : "url(/img/background/FUNDO-2.png)",
          }}
        ></div>
        <MyLine />
      </div>
      <section className="section" ref={section4Ref}>
        <div
          className="bg"
          style={{
            backgroundImage: "url(/img/background/pedido-6.png)",
          }}
        ></div>
        <CountDownSection />
      </section>
    </main>
  );
};
