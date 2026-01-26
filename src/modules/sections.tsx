"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useGetWindowWidth } from "@/shared/vendors/shadcn/hooks/use-mobile";
import { MyLine } from "./timeline";
import { CountDownSection } from "./count-down-section";
import { Section1 } from "./section-1";
import { Section2 } from "./section-2";
import { useImagesLoaded2 } from "@/shared/vendors/shadcn/hooks/use-images-loaded";
gsap.registerPlugin(ScrollTrigger);

export const Sections = () => {
  const windowWidth = useGetWindowWidth();
  const [mainWidth, setMainWidth] = useState(0);

  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (mainRef.current && mainRef.current.clientWidth) {
      setMainWidth(mainRef.current.clientWidth);
    }
  }, [mainRef.current?.clientWidth]);

  const { isLoading } = useImagesLoaded2({
    container: mainRef.current,
    includeBackgroundImages: true,
  });

  return (
    <main className="text-[#FFF2CA]" ref={mainRef}>
      {!isLoading && (
        <div className="font-bethany fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-[#FFF2CA]">
          <h1 className="text-black/80">Carregando data...</h1>
        </div>
      )}
      <section
        className="section lg:bg-cover"
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
              windowWidth < 1250 || mainWidth < 1250
                ? "url(/img/background/pedido-5.png)"
                : "url(/img/background/pedido-7.jpeg)",
          }}
        ></div>
        <Section2 />
      </section>
      <div className="relative" ref={section3Ref}>
        <div
          className="bg"
          style={{
            backgroundImage:
              windowWidth < 750 || mainWidth < 750
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
