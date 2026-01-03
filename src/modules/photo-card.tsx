import Image from "next/image";
import { forwardRef } from "react";

interface PhotoCardProps {
  title: string;
  image: string;
  description: string;
  left: number;
  top: number;
  photoWidth: number;
  photoHeight: number;
  position: "left" | "right";
}

export const PhotoCard = forwardRef<HTMLDivElement, PhotoCardProps>(
  ({ title, image, description, left, top, photoWidth, photoHeight, position }, ref) => {
    return (
      <div
        ref={ref}
        className={`absolute flex flex-col opacity-0 ${position === "left" ? "text-left" : "text-right"}`}
        style={{ left, top }}
      >
        <div
          className="relative overflow-hidden rounded-sm"
          style={{ width: photoWidth, height: photoHeight }}
        >
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <h3 className="mt-2 text-4xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    );
  },
);

PhotoCard.displayName = "PhotoCard";
