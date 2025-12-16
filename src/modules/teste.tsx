"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, DrawSVGPlugin, MotionPathPlugin);
gsap.defaults({ ease: "none" });

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

export const SvgWithoutAnimation = () => {
  return (
    <div>
      <svg id="svg-stage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 1200">
        <path d="M 10 200 600 200" fill="#fff" strokeWidth="2px" stroke="#fff"></path>
        <path d="M 10 400 600 400" fill="#fff" strokeWidth="2px" stroke="#fff"></path>
        <path d="M 10 600 600 600" fill="#fff" strokeWidth="2px" stroke="#fff"></path>
        <path d="M 10 800 600 800" fill="#fff" strokeWidth="2px" stroke="#fff"></path>
        <path d="M 10 1000 600 1000" fill="#fff" strokeWidth="2px" stroke="#fff"></path>
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
          d="M -5,0
                Q 450 230 300 450
                T 130 750
                Q 100 850 300 1000
                T 150 1200"
          fill="none"
          stroke="#fff"
          strokeWidth="10px"
        />

        <circle r="20" cx="50" cy="100" fill="#fff"></circle>
        <circle r="20" cx="278" cy="201" fill="#fff"></circle>
        <circle r="20" cx="327" cy="401" fill="#fff"></circle>
        <circle r="20" cx="203" cy="601" fill="#fff"></circle>
        <circle r="20" cx="130" cy="801" fill="#fff"></circle>
        <circle r="20" cx="300" cy="1001" fill="#fff"></circle>
      </svg>
    </div>
  );
};

export const SvgWithBiggerLine = () => {
  return (
    <div>
      <svg id="svg-stage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 2000">
        <path d="M 10 200 600 200" fill="#fff" strokeWidth="2px" stroke="#fff"></path>
        <path d="M 10 600 600 600" fill="#fff" strokeWidth="2px" stroke="#fff"></path>
        <path d="M 10 1000 600 1000" fill="#fff" strokeWidth="2px" stroke="#fff"></path>
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
          d="M -5,0
                Q 450 230 300 450
                T 130 750
                Q 100 850 300 1000
                T 150 1200"
          fill="none"
          stroke="#fff"
          strokeWidth="10px"
          transform="translate(0,-100) scale(1,1.5)"
        />

        <circle r="20" cx="50" cy="100" fill="#fff"></circle>
        <circle r="20" cx="278" cy="201" fill="#fff"></circle>
        <circle r="20" cx="203" cy="601" fill="#fff"></circle>
        <circle r="20" cx="300" cy="1001" fill="#fff"></circle>
      </svg>
    </div>
  );
};
