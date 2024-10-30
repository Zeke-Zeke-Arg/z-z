import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "@/libs/icons";

interface ImageCarouselProps {
  images: {
    image: {
      src: string;
      height: number;
      width: number;
      blurDataURL: string;
      blurWidth: number;
      blurHeight: number;
    };
  }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [imagesToShow, setImagesToShow] = useState(3);

  useEffect(() => {
    const updateImagesToShow = () => {
      setImagesToShow(window.innerWidth < 640 ? 1 : 3);
    };
    updateImagesToShow();
    window.addEventListener("resize", updateImagesToShow);
    return () => window.removeEventListener("resize", updateImagesToShow);
  }, []);

  const nextImages = () => {
    setStartIndex((prev) => (prev + 1) % Math.max(1, images.length - imagesToShow + 1));
  };

  const prevImages = () => {
    setStartIndex(
      (prev) =>
        (prev - 1 + Math.max(1, images.length - imagesToShow + 1)) %
        Math.max(1, images.length - imagesToShow + 1),
    );
  };

  return (
    <div className="flex items-center justify-center relative">
      <div
        className="absolute top-0 left-0 h-full z-10 cursor-pointer"
        style={{
          width: "60px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        onClick={prevImages}
      ></div>

      <button
        onClick={prevImages}
        className="text-white text-4xl pr-4 absolute top-50 left-0 z-10 px-5"
      >
        <AiOutlineLeft />
      </button>
      <div className="flex overflow-hidden w-full relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(startIndex * 100) / imagesToShow}%)`,
            width: `${images.length * (100 / imagesToShow)}%`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="h-96 flex-shrink-0 relative"
              style={{ width: `${100 / imagesToShow}%` }}
            >
              <Image
                src={img.image.src}
                alt={`carousel image ${index}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute top-0 right-0 h-full z-9 cursor-pointer"
        style={{
          width: "60px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        onClick={nextImages}
      ></div>

      <button
        onClick={nextImages}
        className="text-white text-4xl pl-4  absolute top-50 right-0 z-10 px-5"
      >
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default ImageCarousel;
