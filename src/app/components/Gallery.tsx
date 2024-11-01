"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import Image from "next/image";

import caceria2Image from "@/app/assets/images/zeke-zeke-go-hunting-2.webp";
import caceria3Image from "@/app/assets/images/zeke-zeke-go-hunting-3.webp";
import caceria4Image from "@/app/assets/images/zeke-zeke-go-hunting-4.webp";
import caceria5Image from "@/app/assets/images/zeke-zeke-go-hunting-5.webp";
import hunterImage from "@/app/assets/images/zeke-zeke-hunter-mountains.webp";
import livingRoom from "@/app/assets/images/zeke-zeke-livingroom-1.webp";
import diningRoom from "@/app/assets/images/zeke-zeke-dinning-room-1.webp";
import roomImage2 from "@/app/assets/images/zeke-zeke-room-2.webp";
import roomImage3 from "@/app/assets/images/zeke-zeke-room-3.webp";
import roomImage4 from "@/app/assets/images/zeke-zeke-room-4.webp";
import areas1 from "@/app/assets/images/zeke-zeke-areas-1.webp";
import areas2 from "@/app/assets/images/zeke-zeke-areas-2.webp";
import areas3 from "@/app/assets/images/zeke-zeke-areas-3.webp";
import areas4 from "@/app/assets/images/zeke-zeke-areas-4.webp";

import ImageCarousel from "./animata/carousel/ImageCarousel";

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const galleryRef = useRef<HTMLDivElement>(null);

  const [activeCarousel, setActiveCarousel] = useState<CarouselKeys | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null); // New state for full-screen image

  const imagesForGrid = [
    {
      imageSrc: caceria5Image,
      text: "Pigeon Hunting",
      carouselId: "hunting-carousel",
    },
    {
      imageSrc: livingRoom,
      text: "Luxury Accommodation",
      carouselId: "accommodation-carousel",
    },
    {
      imageSrc: hunterImage,
      text: "Exclusive Hunting Areas",
      carouselId: "areas-carousel",
    },
  ];

  type CarouselKeys = "hunting-carousel" | "accommodation-carousel" | "areas-carousel";

  const carousels = {
    "hunting-carousel": [
      {
        image: {
          ...caceria3Image,
          blurDataURL: caceria3Image.blurDataURL || "",
          blurWidth: caceria3Image.blurWidth || 0,
          blurHeight: caceria3Image.blurHeight || 0,
        },
      },
      {
        image: {
          ...caceria2Image,
          blurDataURL: caceria2Image.blurDataURL || "",
          blurWidth: caceria2Image.blurWidth || 0,
          blurHeight: caceria2Image.blurHeight || 0,
        },
      },
      {
        image: {
          ...caceria4Image,
          blurDataURL: caceria4Image.blurDataURL || "",
          blurWidth: caceria4Image.blurWidth || 0,
          blurHeight: caceria4Image.blurHeight || 0,
        },
      },
      {
        image: {
          ...caceria3Image,
          blurDataURL: caceria3Image.blurDataURL || "",
          blurWidth: caceria3Image.blurWidth || 0,
          blurHeight: caceria3Image.blurHeight || 0,
        },
      },
    ],
    "accommodation-carousel": [
      {
        image: {
          ...diningRoom,
          blurDataURL: diningRoom.blurDataURL || "",
          blurWidth: diningRoom.blurWidth || 0,
          blurHeight: diningRoom.blurHeight || 0,
        },
      },
      {
        image: {
          ...roomImage4,
          blurDataURL: roomImage4.blurDataURL || "",
          blurWidth: roomImage4.blurWidth || 0,
          blurHeight: roomImage4.blurHeight || 0,
        },
      },
      {
        image: {
          ...roomImage3,
          blurDataURL: roomImage3.blurDataURL || "",
          blurWidth: roomImage3.blurWidth || 0,
          blurHeight: roomImage3.blurHeight || 0,
        },
      },
      {
        image: {
          ...roomImage2,
          blurDataURL: roomImage2.blurDataURL || "",
          blurWidth: roomImage2.blurWidth || 0,
          blurHeight: roomImage2.blurHeight || 0,
        },
      },
    ],
    "areas-carousel": [
      {
        image: {
          ...areas1,
          blurDataURL: areas1.blurDataURL || "",
          blurWidth: areas1.blurWidth || 0,
          blurHeight: areas1.blurHeight || 0,
        },
      },
      {
        image: {
          ...areas2,
          blurDataURL: areas2.blurDataURL || "",
          blurWidth: areas2.blurWidth || 0,
          blurHeight: areas2.blurHeight || 0,
        },
      },
      {
        image: {
          ...areas3,
          blurDataURL: areas3.blurDataURL || "",
          blurWidth: areas3.blurWidth || 0,
          blurHeight: areas3.blurHeight || 0,
        },
      },
      {
        image: {
          ...areas4,
          blurDataURL: areas4.blurDataURL || "",
          blurWidth: areas4.blurWidth || 0,
          blurHeight: areas4.blurHeight || 0,
        },
      },
    ],
  };

  const carouselTitles = {
    "hunting-carousel": "Pigeon Hunting",
    "accommodation-carousel": "Luxury Accommodation",
    "areas-carousel": "Exclusive Hunting Areas",
  };

  const handleCardClick = (carouselId: CarouselKeys) => {
    if (activeCarousel === carouselId) {
      return; // Skip loading if the same carousel is clicked
    }

    setIsLoading(true);
    setActiveCarousel(carouselId);
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleImageClick = (src: string) => {
    setFullScreenImage(src); // Set the full-screen image
  };

  const handleCloseImage = () => {
    setFullScreenImage(null); // Close the full-screen image
  };

  useEffect(() => {
    if (activeCarousel) {
      const timeout = setTimeout(() => setIsLoading(false), 500); // Simulate loading time
      return () => clearTimeout(timeout);
    }
  }, [activeCarousel]);

  return (
    <div id="our-services" className="overflow-hidden bg-background">
      <section className="min-h-screen w-full flex items-center py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text font-serif mb-6 mt-12 md:mb-8">
            {t("Our Experience")}
          </h2>

          {/* Service Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {imagesForGrid.map((item, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg transition-transform duration-300 hover:scale-105"
                onClick={() => handleCardClick(item.carouselId as CarouselKeys)}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.text}
                  layout="responsive"
                  width={600}
                  height={400}
                  className="object-cover"
                  onClick={() => handleImageClick(item.imageSrc.src)} // Handle image click for full-screen view
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4">
                  <p className="text-white text-xl font-serif font-semibold">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={galleryRef}
        style={{ scrollMarginTop: "80px" }}
        className="w-full px-0 py-10 pb-0"
      >
        <h2 className="text-4xl font-bold mb-6 text-center w-full">
          <span className="text-white-400">
            {t(activeCarousel ? carouselTitles[activeCarousel as CarouselKeys] : "Gallery")}
          </span>
        </h2>

        <div className="relative">
          {isLoading ? (
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-500"></div>
            </div>
          ) : (
            <div className="fade-in transition-opacity duration-500">
              <ImageCarousel
                images={
                  activeCarousel
                    ? carousels[activeCarousel as CarouselKeys]
                    : [...Object.values(carousels).flat()]
                }
              />
            </div>
          )}
        </div>
      </section>

      {/* Full-Screen Image View */}
      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <Fade right duration={1000} delay={200}>
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={handleCloseImage}
            >
              &times; {/* Cross Icon */}
            </button>
            <Image
              src={fullScreenImage}
              alt="Full Screen"
              layout="intrinsic"
              width={800} // Adjust width and height as needed
              height={600}
              className="max-w-full max-h-full"
            />
          </Fade>
        </div>
      )}
    </div>
  );
};

export default Gallery;
