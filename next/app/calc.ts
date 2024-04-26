export type ImageState = {
  index: number;
  isPreload: boolean;
  isLoaded: boolean;
  loading: "lazy" | "eager";
};

function imagesNotLoadedYet(images: ImageState[]): ImageState[] {
  return [];
}

// sort images by distance from the current image
function sortImages(
  currentImgIndex: number,
  images: ImageState[]
): ImageState[] {
  const expanded = images.map((img, index) => ({ ...img, index: index }));
  expanded.sort(
    (a, b) =>
      // a が b より小さい場合は負の値、a が b より大きい場合は正の値、等しい場合は 0 とします
      Math.abs(a.index - currentImgIndex) - Math.abs(b.index - currentImgIndex)
  );

  return expanded;
}

export function nextImgToLoad(
  currentImgIndex: number,
  images: ImageState[]
): ImageState | null {
  const notLoadedImages = imagesNotLoadedYet(images);
  const sortedImages = sortImages(currentImgIndex, notLoadedImages);

  if (sortImages.length > 1) {
    return sortedImages[0];
  } else {
    return null;
  }
}
