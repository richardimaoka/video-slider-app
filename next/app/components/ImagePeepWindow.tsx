import { useEffect, useState } from "react";
import { ImageState, nextImgToLoad } from "../calc";
import styles from "./ImagePeepWindow.module.css";
import { ImageSlider } from "./ImageSlider";

interface Props {
  currentPage: number;
  imageStates: ImageState[];
}

export function ImagePeepWindow(props: Props) {
  // use state
  const [imageStates, setImageStates] = useState<ImageState[]>([]);

  // upon load complete,
  function onLoadImgCompleted() {}

  // upon load state change
  useEffect(() => {
    const nextImg = nextImgToLoad(props.currentPage, imageStates);
    // const newStates = ...
    // if ( nextImg ) {
    //   newStates[nextImg] = ...
    // }
    // setImageStates(newStates)
  }, [imageStates, props.currentPage]);

  return (
    <div className={styles.component}>
      <ImageSlider images={imageStates} />
    </div>
  );
}
