import React, { useEffect, useState } from 'react';

const useCarouselEventHandlers = (images) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000); // Change slide every 2 seconds
        return () => clearInterval(interval);
    }, [images.length]);
    return { currentIndex };
}
export default useCarouselEventHandlers;
