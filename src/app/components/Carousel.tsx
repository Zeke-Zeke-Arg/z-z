import React, { useState, ReactNode } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface CarouselProps {
  items: ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [items.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-10 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all duration-200 focus:outline-none cursor-pointer hover:bg-[#FFD70080] group"
        style={{ transform: "perspective(100px) rotateY(-5deg)" }}
      >
        <ChevronLeftIcon className="left-20 h-6 w-6 text-gray-200 opacity-70 group-hover:opacity-100" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-10 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all duration-200 focus:outline-none cursor-pointer hover:bg-[#FFD70080] group"
        style={{ transform: "perspective(100px) rotateY(5deg)" }}
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-200 opacity-70 group-hover:opacity-100" />
      </button>
      {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full -mt-20 ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
