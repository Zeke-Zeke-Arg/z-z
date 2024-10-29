import React, { useState } from "react";
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
  const imagesToShow = 3;

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
    <div className="flex items-center justify-center bg-opacity-80">
      <button onClick={prevImages} className="text-white text-4xl p-8">
        <AiOutlineLeft />
      </button>
      <div className="flex flex-grow overflow-hidden">
        {images.slice(startIndex, startIndex + imagesToShow).map((img, index) => (
          <div key={index} className="h-96 flex-shrink-0 m-2 relative" style={{ width: "33.33%" }}>
            <Image
              src={img.image.src}
              alt={`carousel image ${index}`}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        ))}
      </div>
      <button onClick={nextImages} className="text-white text-4xl p-8">
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default ImageCarousel;
