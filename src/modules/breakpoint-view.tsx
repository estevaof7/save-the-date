"use client";

import { useGetWindowWidth } from "@/shared/vendors/shadcn/hooks/use-mobile";

export const BreakPointView = () => {
  const windowWidth = useGetWindowWidth();
  return (
    <div className="fixed right-0 top-0 p-5 font-bold text-gray-400 before:content-['-640px'] sm:before:content-['SM'] md:before:content-['MD'] lg:before:content-['LG'] xl:before:content-['XL'] 2xl:before:content-['2XL']">
      <br />
      {windowWidth} px
    </div>
  );
};
