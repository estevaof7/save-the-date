import { cn } from "@/shared/vendors/shadcn/hooks/lib/utils";
import Image from "next/image";
import { forwardRef } from "react";

interface PhotoCardProps {
  image: string;
  left: number;
  top: number;
  photoWidth: number;
  photoHeight: number;
  position: "left" | "right";
  date: string;
  dateClassName?: string;
}

export const PhotoCard = forwardRef<HTMLDivElement, PhotoCardProps>(
  ({ image, left, top, photoWidth, photoHeight, position, date, dateClassName }, ref) => {
    return (
      <div
        ref={ref}
        className={`absolute flex flex-col opacity-0 ${position === "left" ? "text-left" : "text-right"}`}
        style={{ left, top, width: photoWidth }}
      >
        <p className={cn("font-apple-garamond-bold mb-2 text-[2.8rem]", dateClassName)}>{date}</p>
        <div
          className="relative overflow-hidden rounded-sm"
          style={{ width: photoWidth, height: photoHeight }}
        >
          <Image src={image} alt="Photo" fill className="object-cover" />
        </div>
      </div>
    );
  },
);

PhotoCard.displayName = "PhotoCard";
