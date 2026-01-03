"use client";

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
    <div className="flex h-full flex-col items-center justify-evenly">
      <p className="text-[30px] text-white">E mais uma data vai entrar para essa história...</p>
      <h1 className="text-[60px] text-white">21.06.2026</h1>
      <h1 className="text-white">
        <Countdown date={new Date(2026, 5, 21)} renderer={renderer} />
      </h1>
    </div>
  );
};
