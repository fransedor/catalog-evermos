import React, { useRef } from "react";

const ImageCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselIndex = useRef(1);

  const handleNextImage = () => {
    if (carouselRef.current) {
      // If at the last element, shift the carousel to the first element
      if (carouselIndex.current === images.length) {
        carouselRef.current.style.transform = "translateX(0%)";
        carouselIndex.current = 1;
      } else {
        // The amount of pixels to be translated
        const translateXPercentage = carouselIndex.current * -100;
        carouselRef.current.style.transform = `translateX(${translateXPercentage}%)`;
        carouselIndex.current++;
      }
    }
  };
  const handlePrevImage = () => {
    if (carouselRef.current) {
      // The last element will be located at this value
      const minTranslateXPercentage = (images.length - 1) * -100;
      // If at the first element, shift the carousel to the last element
      if (carouselIndex.current === 1) {
        carouselRef.current.style.transform = `translateX(${minTranslateXPercentage}%)`;
        carouselIndex.current = images.length;
      } else {
        carouselIndex.current--;
        // The amount of pixels to be translated
        const translateXPercentage = (carouselIndex.current - 1) * -100;
        carouselRef.current.style.transform = `translateX(${translateXPercentage}%)`;
      }
    }
  };
  return (
    <div className="relative overflow-hidden fade-in">
      <button
        className="absolute top-1/2 left-0 -translate-y-1/2 z-10 rounded-full bg-white p-2 shadow-md hover:bg-slate-100"
        onClick={handlePrevImage}
      >
				{/* PREV ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="flex max-w-full  relative duration-300 transition-all" ref={carouselRef}>
        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt={title}
            className=" w-full object-contain rounded-lg"
            onError={(e) => {
              e.currentTarget.src = "/img-placeholder.svg";
            }}
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 right-0 -translate-y-1/2 z-10 rounded-full bg-white p-2 shadow-md hover:bg-slate-100"
        onClick={handleNextImage}
      >
				{/* NEXT ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ImageCarousel;
