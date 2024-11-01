import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "@/libs/icons"; // Ensure you have the close icon
import LoadingSpinner from "./../LoadingSpinner";

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
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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

  const openModal = (src: string) => {
    setModalImage(src);
    setIsImageLoaded(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setModalImage(null), 300);
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
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
          className="text-white text-4xl pr-4 absolute top-1/2 transform -translate-y-1/2 left-0 z-10 px-5"
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
                className="h-96 flex-shrink-0 relative cursor-pointer"
                style={{ width: `${100 / imagesToShow}%` }}
                onClick={() => openModal(img.image.src)}
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
          className="absolute top-0 right-0 h-full z-10 cursor-pointer"
          style={{
            width: "60px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          onClick={nextImages}
        ></div>

        <button
          onClick={nextImages}
          className="text-white text-4xl pl-4 absolute top-1/2 transform -translate-y-1/2 right-0 z-10 px-5"
        >
          <AiOutlineRight />
        </button>
      </div>

      {modalImage && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 
            ${showModal ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          onClick={closeModal}
        >
          <div
            className="relative w-3/4 h-3/4 transition-transform transform ease-out duration-300"
            style={{ transform: showModal ? "scale(1)" : "scale(0.95)" }}
          >
            <button
              onClick={closeModal}
              className="fixed left-1/2 transform -translate-x-1/2 bg-gray-400 bg-opacity-25 text-white rounded-full p-2 z-50"
              style={{
                top: "-65px"
              }}
              aria-label="Close modal"
            >
              <AiOutlineClose />
            </button>

            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <LoadingSpinner size={40} color="text-yellow-500" text="Loading..." />
              </div>
            )}
            <Image
              src={modalImage}
              alt="Expanded image"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
              onLoad={handleImageLoad}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;
