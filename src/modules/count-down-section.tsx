"use client";

import Image from "next/image";
import Countdown from "react-countdown";

export const CountDownSection = () => {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      // Render a completed state
      return <span>Completed</span>;
    } else {
      // Render a countdown
      return (
        <>
          <span>
            {days} dias <br /> {hours} horas <br /> {minutes} minutos <br /> {seconds} segundos
          </span>
        </>
      );
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-evenly px-10 text-center">
      <div className="flex flex-col items-center gap-5">
        <div className="w-[70%] max-w-[600px]">
          <Image
            src="/img/titles/FRASE3.png"
            alt="FRASE2"
            width={2283}
            height={542}
            className="object-contain"
          />
        </div>
        <h1 className="font-apple-garamond-bold text-6xl sm:text-7xl xl:text-8xl">21.06.2026</h1>
      </div>
      <h3 className="font-bethany text-3xl">
        <Countdown date={new Date(2026, 5, 21)} renderer={renderer} />
      </h3>
    </div>
  );
};
