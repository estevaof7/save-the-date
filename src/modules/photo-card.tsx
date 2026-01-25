import Image from "next/image";
import { forwardRef } from "react";

interface PhotoCardProps {
  image: string;
  left: number;
  top: number;
  photoWidth: number;
  photoHeight: number;
  position: "left" | "right";
}

export const PhotoCard = forwardRef<HTMLDivElement, PhotoCardProps>(
  ({ image, left, top, photoWidth, photoHeight, position }, ref) => {
    return (
      <div
        ref={ref}
        className={`absolute flex flex-col opacity-0 ${position === "left" ? "text-left" : "text-right"}`}
        style={{ left, top, width: photoWidth }}
      >
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
