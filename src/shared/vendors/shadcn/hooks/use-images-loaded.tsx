import { useEffect, useState } from "react";

interface UseImagesLoadedOptions {
  /**
   * Seletor CSS para encontrar o container onde as imagens estão
   * Se não fornecido, usa o documento inteiro
   */
  container?: HTMLElement | null;
  /**
   * Se deve incluir imagens de background (background-image)
   */
  includeBackgroundImages?: boolean;
}

export function useImagesLoaded2(options: UseImagesLoadedOptions = {}) {
  const { container, includeBackgroundImages = true } = options;
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkImages = () => {
      const targetContainer = container || document;

      const backgroundImages: string[] = [];

      const allElements = targetContainer.querySelectorAll("*");
      allElements.forEach((el) => {
        const bgImage = window.getComputedStyle(el).backgroundImage;
        if (bgImage && bgImage !== "none") {
          const match = bgImage.match(/url\(["']?([^"')]+)["']?\)/);
          if (match && match[1]) {
            backgroundImages.push(match[1]);
          }
        }
      });

      const total = backgroundImages.length;
      setTotalCount(total);

      if (total === 0) {
        setAllImagesLoaded(true);
        setProgress(100);
        return;
      }

      let loaded = 0;

      const updateProgress = (string: string) => {
        loaded++;
        const newProgress = Math.round((loaded / total) * 100);
        setLoadedCount(loaded);
        setProgress(newProgress);

        if (loaded === total) {
          setAllImagesLoaded(true);
        }

        console.log("updateProgress", string);
      };

      // Verificar imagens de background
      backgroundImages.forEach((bgUrl) => {
        const img = new Image();
        img.onload = () => updateProgress("loaded: " + bgUrl);
        img.onerror = () => updateProgress("error: " + bgUrl);
        img.src = bgUrl;
      });

      console.log("backgroundImages", backgroundImages);
    };

    // Aguardar um pouco para garantir que o DOM está pronto
    const timeoutId = setTimeout(checkImages, 100);

    // Também verificar quando novas imagens são adicionadas
    const observer = new MutationObserver(checkImages);
    const targetNode = container || document.body;
    observer.observe(targetNode, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["src", "style"],
    });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [container, includeBackgroundImages]);

  return {
    allImagesLoaded,
    loadedCount,
    totalCount,
    progress,
    isLoading: !allImagesLoaded && totalCount > 0,
  };
}

export function useImagesLoaded(options: UseImagesLoadedOptions = {}) {
  const { container, includeBackgroundImages = true } = options;
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkImages = () => {
      const targetContainer = container || document;
      const images: HTMLImageElement[] = [];
      const backgroundImages: string[] = [];

      // Encontrar todas as tags <img>
      const imgElements = targetContainer.querySelectorAll(".title-image");
      imgElements.forEach((img: Element) => {
        const imgElement = img as HTMLImageElement;
        if (imgElement.src && !imgElement.complete) {
          images.push(imgElement);
        }
      });

      // Encontrar imagens de background se solicitado
      if (includeBackgroundImages) {
        const allElements = targetContainer.querySelectorAll("*");
        allElements.forEach((el) => {
          const bgImage = window.getComputedStyle(el).backgroundImage;
          if (bgImage && bgImage !== "none") {
            const match = bgImage.match(/url\(["']?([^"')]+)["']?\)/);
            if (match && match[1]) {
              backgroundImages.push(match[1]);
            }
          }
        });
      }

      const total = images.length + backgroundImages.length;
      setTotalCount(total);

      if (total === 0) {
        setAllImagesLoaded(true);
        setProgress(100);
        return;
      }

      let loaded = 0;

      const updateProgress = () => {
        loaded++;
        const newProgress = Math.round((loaded / total) * 100);
        setLoadedCount(loaded);
        setProgress(newProgress);

        if (loaded === total) {
          setAllImagesLoaded(true);
        }
      };

      // Verificar imagens <img>
      images.forEach((img) => {
        if (img.complete) {
          updateProgress();
        } else {
          img.addEventListener("load", updateProgress, { once: true });
          img.addEventListener("error", updateProgress, { once: true });
        }
      });

      // Verificar imagens de background
      backgroundImages.forEach((bgUrl) => {
        const img = new Image();
        img.onload = updateProgress;
        img.onerror = updateProgress;
        img.src = bgUrl;
      });
    };

    // Aguardar um pouco para garantir que o DOM está pronto
    const timeoutId = setTimeout(checkImages, 100);

    // Também verificar quando novas imagens são adicionadas
    const observer = new MutationObserver(checkImages);
    const targetNode = container || document.body;
    observer.observe(targetNode, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["src", "style"],
    });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [container, includeBackgroundImages]);

  return {
    allImagesLoaded,
    loadedCount,
    totalCount,
    progress,
    isLoading: !allImagesLoaded && totalCount > 0,
  };
}
