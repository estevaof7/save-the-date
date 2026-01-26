"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PhotoCard } from "./photo-card";
import { useEffect, useRef, useState } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, DrawSVGPlugin, MotionPathPlugin);
gsap.defaults({ ease: "none" });

export const MyLine = () => {
  const [isVerySmallScreen, setIsVerySmallScreen] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (timelineRef.current && timelineRef.current.clientWidth) {
      setIsVerySmallScreen(timelineRef.current.clientWidth < 380);
    }
    if (timelineRef.current && timelineRef.current.clientHeight) {
      setHeight(timelineRef.current.clientHeight);
    }
  }, [timelineRef.current?.clientWidth, timelineRef.current?.clientHeight]);

  const photoCardRef = useRef<HTMLDivElement>(null);
  const photoCardRef2 = useRef<HTMLDivElement>(null);
  const photoCardRef3 = useRef<HTMLDivElement>(null);
  const photoCardRef4 = useRef<HTMLDivElement>(null);
  const photoCardRef5 = useRef<HTMLDivElement>(null);
  const photoCardRef6 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: "#svg-stage",
          scrub: true,
          start: "top center",
          end: "bottom 200px",
          // markers: true,
        },
      })
      .to(".ball01", { duration: 0.01, autoAlpha: 1 })
      .from(".theLine", { drawSVG: 0 }, 0)
      .to(
        ".ball01",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
          },
        },
        0,
      )
      .add(
        gsap
          .timeline({
            defaults: {
              autoAlpha: 1,
              transformOrigin: "center",
              ease: "elastic(2.5, 1)",
            },
          })
          .to(photoCardRef.current, { duration: 0.2, opacity: 1 }, 0.05)
          .to(
            ".line01, .ball02",
            {
              duration: 0.05,
              scale: 1.5,
            },
            0.08,
          )
          .to(photoCardRef2.current, { duration: 0.2, opacity: 1 }, 0.18)
          .to(
            ".line02, .ball03",
            {
              duration: 0.05,
              scale: 1.5,
            },
            0.25,
          )
          .to(photoCardRef3.current, { duration: 0.2, opacity: 1 }, 0.35)

          .to(
            ".line03, .ball04",
            {
              duration: 0.05,
              scale: 1.5,
            },
            0.42,
          )
          .to(photoCardRef4.current, { duration: 0.2, opacity: 1 }, 0.52)

          .to(
            ".line04, .ball05",
            {
              duration: 0.05,
              scale: 1.5,
            },
            0.58,
          )
          .to(photoCardRef5.current, { duration: 0.2, opacity: 1 }, 0.68)

          .to(
            ".line05, .ball06",
            {
              duration: 0.05,
              scale: 1.5,
            },
            0.75,
          )
          .to(photoCardRef6.current, { duration: 0.2, opacity: 1 }, 0.86)
          .to(
            ".line06, .ball07",
            {
              duration: 0.05,
              scale: 1.5,
            },
            0.91,
          ),
        0,
      );
  });

  return (
    <div className="overflow-hidden" ref={containerRef}>
      <div
        className="relative mx-auto -mt-2 max-w-[390px] overflow-hidden xl:mt-[60rem] xl:min-h-[254rem] xl:scale-150"
        ref={timelineRef}
      >
        <PhotoCard
          image="/img/cards/POLAROID-1.png"
          left={150}
          top={150}
          photoWidth={200}
          photoHeight={250}
          ref={photoCardRef}
          position="right"
          date="31.01.24"
          dateClassName="mr-2"
        />
        <PhotoCard
          image="/img/cards/POLAROID-2.png"
          left={30}
          top={isVerySmallScreen && Boolean(height) ? height / 4.7 : 715}
          photoWidth={isVerySmallScreen ? 250 : 280}
          photoHeight={isVerySmallScreen ? 220 : 250}
          ref={photoCardRef2}
          position="left"
          date="18.08.24"
          dateClassName="ml-2"
        />
        <PhotoCard
          image="/img/cards/POLAROID-3.png"
          left={95}
          top={isVerySmallScreen && Boolean(height) ? height / 2.7 : 1280}
          photoWidth={220}
          photoHeight={270}
          ref={photoCardRef3}
          position="right"
          date="21.08.24"
        />
        <PhotoCard
          image="/img/cards/POLAROID-4.png"
          left={30}
          top={isVerySmallScreen && Boolean(height) ? height / 1.87 : 1850}
          photoWidth={isVerySmallScreen ? 250 : 250}
          photoHeight={isVerySmallScreen ? 260 : 250}
          ref={photoCardRef4}
          position="left"
          date="01.12.24"
          dateClassName="ml-2"
        />
        <PhotoCard
          image="/img/cards/POLAROID-5.png"
          left={95}
          top={isVerySmallScreen && Boolean(height) ? height / 1.41 : 2440}
          photoWidth={isVerySmallScreen ? 250 : 260}
          photoHeight={isVerySmallScreen ? 260 : 250}
          ref={photoCardRef5}
          position="right"
          date="21.12.24"
          dateClassName="mr-6"
        />
        <PhotoCard
          image="/img/cards/POLAROID-6.png"
          left={30}
          top={isVerySmallScreen && Boolean(height) ? height / 1.14 : 3000}
          photoWidth={isVerySmallScreen ? 250 : 280}
          photoHeight={isVerySmallScreen ? 220 : 250}
          ref={photoCardRef6}
          position="left"
          date="20.07.25"
          dateClassName="ml-6 mb-5"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 700 6160"
          className="overflow-visible"
          id="svg-stage"
        >
          {/* viewBox

      quando maior o terceito número, menor o svg
      */}
          <path
            className="line01 line"
            d="M 100 530 300 530"
            fill="#FFF2CA"
            strokeWidth="2px"
            stroke="#FFF2CA"
          />
          <path
            className="line02 line"
            d="M 530 1550 300 1550"
            fill="#FFF2CA"
            strokeWidth="2px"
            stroke="#FFF2CA"
          ></path>
          <path
            className="line03 line"
            d="M 100 2600 300 2600"
            fill="#FFF2CA"
            strokeWidth="2px"
            stroke="#FFF2CA"
          />
          <path
            className="line04 line"
            d="M 530 3600 300 3600"
            fill="#FFF2CA"
            strokeWidth="2px"
            stroke="#FFF2CA"
          />
          <path
            className="line05 line"
            d="M 100 4630 300 4630"
            fill="#FFF2CA"
            strokeWidth="2px"
            stroke="#FFF2CA"
          />
          <path
            className="line06 line"
            d="M 530 5660 300 5660"
            fill="#FFF2CA"
            strokeWidth="2px"
            stroke="#FFF2CA"
          />
          <text x="30" y="190">
            2018
          </text>
          <text x="30" y="390">
            2019
          </text>
          <text x="30" y="590">
            2020
          </text>

          <path
            d="M283.642 0.685547
     C95.34 200.722 1.1035 356.814 1 512.908
     C0.896848 669.002 94.9266 825.265 283.642 1025.65
     C471.293 1225.92 565.175 1382.33 565.142 1538.81
     C565.108 1695.3 471.161 1851.7 283.64 2051.97
     C95.3497 2252.51 1.43012 2408.79 1.48242 2564.86
     C1.53494 2720.93 95.5593 2876.95 283.642 3076.94
     C471.069 3277.22 564.89 3433.62 564.885 3590.1
     C564.879 3746.59 471.046 3902.99 283.644 4103.27
     C94.8973 4303.46 1.05212 4459.66 1.25488 4615.77
     C1.45791 4771.88 95.7089 4928.07 283.642 5128.23
     C470.056 5328.13 564.659 5484.81 565.298 5641.53
     C565.937 5798.25 472.608 5954.84 283.641 6154.56"
            fill="none"
            stroke="#FFF2CA"
            strokeWidth="10"
            transform="translate(50,0)"
            className="theLine"
          />

          <circle className="ball ball01" r="20" cx="50" cy="531" fill="#FFF2CA"></circle>
          <circle className="ball ball02" r="20" cx="50" cy="531" fill="#FFF2CA"></circle>
          <circle className="ball ball03" r="20" cx="612" cy="1551" fill="#FFF2CA"></circle>
          <circle className="ball ball04" r="20" cx="52" cy="2601" fill="#FFF2CA"></circle>
          <circle className="ball ball05" r="20" cx="612" cy="3601" fill="#FFF2CA"></circle>
          <circle className="ball ball06" r="20" cx="50" cy="4631" fill="#FFF2CA"></circle>
          <circle className="ball ball07" r="20" cx="612" cy="5661" fill="#FFF2CA"></circle>
        </svg>
      </div>
    </div>
  );
};

export const Teste = () => {
  useGSAP(() => {
    gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: "#svg-stage",
          scrub: true,
          start: "top center",
          end: "bottom center",
          markers: true,
        },
      })
      .to(".ball01", { duration: 0.01, autoAlpha: 1 })
      .from(".theLine", { drawSVG: 0 }, 0)
      .to(
        ".ball01",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
          },
        },
        0,
      )
      .add(
        gsap
          .timeline({
            defaults: {
              duration: 0.05,
              autoAlpha: 1,
              scale: 1.5,
              transformOrigin: "center",
              ease: "elastic(2.5, 1)",
            },
          })
          .to(".ball02, .text01", {}, 0.2)
          .to(".ball03, .text02", {}, 0.33)
          .to(".ball04, .text03", {}, 0.46)
          .to(".ball05", {}, 0.59)
          .to(".ball06", {}, 0.72),
        0,
      );
  });

  return (
    <div>
      <svg id="svg-stage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 1200">
        <path className="line01 line" d="M 10 200 600 200"></path>
        <path className="line02 line" d="M 10 400 600 400"></path>
        <path className="line03 line" d="M 10 600 600 600"></path>
        <path className="line04 line" d="M 10 800 600 800"></path>
        <path className="line05 line" d="M 10 1000 600 1000"></path>
        <text x="30" y="190">
          2018
        </text>
        <text className="text02" x="30" y="390">
          2019
        </text>
        <text className="text03" x="30" y="590">
          2020
        </text>

        <path
          className="theLine"
          d="M -5,0
                Q 450 230 300 450
                T 130 750
                Q 100 850 300 1000
                T 150 1200"
          fill="none"
          strokeWidth="10px"
        />

        <circle className="ball ball01" r="20" cx="50" cy="100"></circle>
        <circle className="ball ball02" r="20" cx="278" cy="201"></circle>
        <circle className="ball ball03" r="20" cx="327" cy="401"></circle>
        <circle className="ball ball04" r="20" cx="203" cy="601"></circle>
        <circle className="ball ball05" r="20" cx="130" cy="801"></circle>
        <circle className="ball ball06" r="20" cx="300" cy="1001"></circle>
      </svg>
    </div>
  );
};

export const SvgWithBiggerLine = () => {
  useGSAP(() => {
    gsap
      .timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: "#svg-stage",
          scrub: true,
          start: "top center",
          end: "bottom center",
        },
      })
      .to(".ball01", { duration: 0.01, autoAlpha: 1 })
      .from(".theLine", { drawSVG: 0 }, 0)
      .to(
        ".ball01",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
          },
        },
        0,
      )
      .add(
        gsap
          .timeline({
            defaults: {
              duration: 0.05,
              autoAlpha: 1,
              scale: 1.5,
              transformOrigin: "center",
              ease: "elastic(2.5, 1)",
            },
          })
          .to(".ball02", {}, 0.2)
          .to(".ball03", {}, 0.33)
          .to(".ball04", {}, 0.46)
          .to(".ball05", {}, 0.59)
          .to(".ball06", {}, 0.72),
        0,
      );
  });

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 7200"
        className="max-w-[600px] overflow-visible"
        id="svg-stage"
      >
        {/* viewBox

      quando maior o terceito número, menor o svg
      */}
        <path d="M 10 1000 600 1000" fill="#FFF2CA" strokeWidth="2px" stroke="#FFF2CA"></path>
        <path d="M 10 1800 600 1800" fill="#FFF2CA" strokeWidth="2px" stroke="#FFF2CA"></path>
        <path d="M 10 2600 600 2600" fill="#FFF2CA" strokeWidth="2px" stroke="#FFF2CA"></path>
        <path d="M 10 3400 600 3400" fill="#FFF2CA" strokeWidth="2px" stroke="#FFF2CA"></path>
        <path d="M 10 4200 600 4200" fill="#FFF2CA" strokeWidth="2px" stroke="#FFF2CA"></path>
        <path d="M 10 5000 600 5000" fill="#FFF2CA" strokeWidth="2px" stroke="#FFF2CA"></path>
        <text x="30" y="190">
          2018
        </text>
        <text x="30" y="390">
          2019
        </text>
        <text x="30" y="590">
          2020
        </text>

        <path
          className="theLine"
          d="M -5,0
                Q 450 1380 300 2700
                T 130 4500
                Q 100 5100 300 6000
                T 150 7200"
          fill="none"
          stroke="#FFF2CA"
          strokeWidth="10px"
          transform="translate(-80,0)"
        />

        <circle className="ball ball01" r="20" cx="168" cy="1001" fill="#FFF2CA"></circle>
        <circle className="ball ball02" r="20" cx="252" cy="1801" fill="#FFF2CA"></circle>
        <circle className="ball ball03" r="20" cx="230" cy="2601" fill="#FFF2CA"></circle>
        <circle className="ball ball04" r="20" cx="143" cy="3401" fill="#FFF2CA"></circle>
        <circle className="ball ball05" r="20" cx="68" cy="4201" fill="#FFF2CA"></circle>
        <circle className="ball ball06" r="20" cx="60" cy="5001" fill="#FFF2CA"></circle>
      </svg>
    </div>
  );
};
export const SvgWithBiggerLine2 = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 7200"
        className="max-w-[600px] overflow-visible"
        id="svg-stage"
      >
        {/* viewBox

      quando maior o terceito número, menor o svg
      */}
        <path d="M 10 1000 600 1000" fill="#000" strokeWidth="2px" stroke="#000"></path>
        <path d="M 10 1800 600 1800" fill="#000" strokeWidth="2px" stroke="#000"></path>
        <path d="M 10 2600 600 2600" fill="#000" strokeWidth="2px" stroke="#000"></path>
        <path d="M 10 3400 600 3400" fill="#000" strokeWidth="2px" stroke="#000"></path>
        <path d="M 10 4200 600 4200" fill="#000" strokeWidth="2px" stroke="#000"></path>
        <path d="M 10 5000 600 5000" fill="#000" strokeWidth="2px" stroke="#000"></path>
        <text x="30" y="190">
          2018
        </text>
        <text x="30" y="390">
          2019
        </text>
        <text x="30" y="590">
          2020
        </text>

        <path
          className="theLine"
          // d="M -5,0
          //       Q 900 920 600 1800
          //       T 260 3000
          //       Q 200 3400 600 4000
          //       T 300 4800"
          d="M -5,0
      Q 1215 1380 810 2700
      T 351 4500
      Q 270 5100 810 6000
      T 405 7200"
          fill="none"
          stroke="#000"
          strokeWidth="10px"
          transform="translate(-250,0)"
        />

        <circle r="20" cx="168" cy="1001" fill="#000"></circle>
        <circle r="20" cx="252" cy="1801" fill="#000"></circle>
        <circle r="20" cx="230" cy="2601" fill="#000"></circle>
        <circle r="20" cx="143" cy="3401" fill="#000"></circle>
        <circle r="20" cx="68" cy="4201" fill="#000"></circle>
        <circle r="20" cx="60" cy="5001" fill="#000"></circle>
      </svg>
    </div>
  );
};
