"use client";

import { useImagesLoaded } from "@/shared/vendors/shadcn/hooks/use-images-loaded";
import { Sections } from "./sections";
import { cn } from "@/shared/vendors/shadcn/hooks/lib/utils";

export const View = () => {
  const { progress, isLoading } = useImagesLoaded({
    includeBackgroundImages: true,
  });

  return (
    <>
      <div
        className={cn(
          "fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center",
          !isLoading && "hidden",
        )}
      >
        <h1>Carregando {progress.toFixed(2)}%...</h1>
      </div>
      <Sections />
    </>
  );
};
