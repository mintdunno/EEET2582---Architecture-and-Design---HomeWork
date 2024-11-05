import React from "react";
import CarouselBody from "./child_component/carousel_body/CarouselBody";
import getImagePaths from "./CarouselApiCall";
import useCarouselEventHandlers from "./CarousellEventHandler";

// Fetch the image paths
const images = getImagePaths();

const Carousel = () => {
  // Use the custom hook to get the current index
  const { currentIndex } = useCarouselEventHandlers(images);

  return (
    <div className="relative w-1/2 mx-auto h-[400px]">
      <CarouselBody imageUrl={images[currentIndex]} />
    </div>
  );
};

export default Carousel;
