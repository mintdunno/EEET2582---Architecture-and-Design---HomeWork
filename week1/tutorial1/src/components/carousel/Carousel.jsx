import CarouselBody from "./child_component/carousel_body/CarouselBody";
import getImagePaths from "./CarouselApiCall";

const images = getImagePaths();

const Carousel = () => {
    return (
        <div className="relative w-1/2 mx-auto h-[400px]">
            <CarouselBody imageUrl={images[0]} />
        </div>
    );
};
export default Carousel;