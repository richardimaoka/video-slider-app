import { useEffect, useState } from "react";
import { SlidePage } from "../api/types";
import styles from "./ImagePeepWindow.module.css";
import { HorizontalImages } from "./HorizontalImages";
import { nextImgToLoad } from "../calc";

interface Props {
  currentPage: number;
  imageStates: SlidePage[]; //TODO: without isLoaded and preLoad
}

export function ImagePeepWindow(props: Props) {
  // use state
  const [imageStates, setImageStates] = useState<SlidePage[]>([]);

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
      <HorizontalImages images={imageStates} />
    </div>
  );
}
