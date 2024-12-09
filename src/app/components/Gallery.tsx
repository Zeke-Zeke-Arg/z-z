"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import ImageCarousel from "./animata/carousel/ImageCarousel";

// Import new images for accommodation carousel
import accom1 from "@/app/assets/images/luxury_acommodation_compressed/accommodation-100.webp";
import accom2 from "@/app/assets/images/luxury_acommodation_compressed/accommodation-101.jpg";
import accom3 from "@/app/assets/images/luxury_acommodation_compressed/accommodation-102.jpg";
import accom4 from "@/app/assets/images/luxury_acommodation_compressed/accommodation-103.webp";
import accom5 from "@/app/assets/images/luxury_acommodation_compressed/accommodation-104.webp";
import accom6 from "@/app/assets/images/luxury_acommodation_compressed/accommodation-105.webp";
import accom7 from "@/app/assets/images/luxury_acommodation_compressed/accommodation-106.jpg";
import accom8 from "@/app/assets/images/luxury_acommodation_compressed/accommodation-107.webp";
import accom9 from "@/app/assets/images/luxury_acommodation_compressed/accommodation-201.webp";
import accom10 from "@/app/assets/images/luxury_acommodation_compressed/accommodation-202.webp";
import accom11 from "@/app/assets/images/luxury_acommodation_compressed/accommodation-203.webp";
import accom12 from "@/app/assets/images/luxury_acommodation_compressed/accommodation-301.jpg";
import accom13 from "@/app/assets/images/luxury_acommodation_compressed/accommodation-302.webp";
import accom14 from "@/app/assets/images/luxury_acommodation_compressed/accommodation-303.jpg";
import accom15 from "@/app/assets/images/luxury_acommodation_compressed/accommodation-304.jpg";
import accom16 from "@/app/assets/images/luxury_acommodation_compressed/accommodation-305.webp";
import accom17 from "@/app/assets/images/luxury_acommodation_compressed/accommodation-306.webp";

// Import new images for service carousel
import area1 from "@/app/assets/images/Service/Service-1001.webp";
import area2 from "@/app/assets/images/Service/Service-1002.webp";
//import area3 from "@/app/assets/images/Service/Service-1003.jpg";
import area4 from "@/app/assets/images/Service/Service-1004.webp";
import area5 from "@/app/assets/images/Service/Service-1005.webp";
import area6 from "@/app/assets/images/Service/Service-1006.webp";
import area7 from "@/app/assets/images/Service/Service-1007.webp";
//import area8 from "@/app/assets/images/Service/Service-1008.jpg";
//import area9 from "@/app/assets/images/Service/Service-1009.avif";
//import area10 from "@/app/assets/images/Service/Service-1010.avif";
import area11 from "@/app/assets/images/Service/Service-1011.webp";

// Import new images for shooting carousel
import hunting1 from "@/app/assets/images/Shooting/Shooting-1001.webp";
//import hunting2 from "@/app/assets/images/Shooting/Shooting-1002.jpg";
import hunting3 from "@/app/assets/images/Shooting/Shooting-1003.webp";
import hunting4 from "@/app/assets/images/Shooting/Shooting-1004.webp";
import hunting5 from "@/app/assets/images/Shooting/Shooting-1005.webp";
//import hunting6 from "@/app/assets/images/Shooting/Shooting-1006.jpg";
import hunting7 from "@/app/assets/images/Shooting/Shooting-1007.jpg";
import hunting8 from "@/app/assets/images/Shooting/Shooting-1008.webp";


const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const galleryRef = useRef<HTMLDivElement>(null);

  const [activeCarousel, setActiveCarousel] = useState<CarouselKeys | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const imagesForGrid = [
    {
      imageSrc: accom1,
      text: "Luxury Accommodation",
      carouselId: "accommodation-carousel",
    },
    {
      imageSrc: area11,
      text: "Service",
      carouselId: "areas-carousel",
    },
    {
      imageSrc: hunting3,
      text: "Shooting",
      carouselId: "hunting-carousel",
    },
  ];

  type CarouselKeys = "hunting-carousel" | "accommodation-carousel" | "areas-carousel";

  const carousels = {
    "accommodation-carousel": [
      {
        image: {
          ...accom1,
          blurDataURL: accom1.blurDataURL || "",
          blurWidth: accom1.blurWidth || 0,
          blurHeight: accom1.blurHeight || 0,
        },
      },
      {
        image: {
          ...accom2,
          blurDataURL: accom2.blurDataURL || "",
          blurWidth: accom2.blurWidth || 0,
          blurHeight: accom2.blurHeight || 0,
        },
      },
      {
        image: {
          ...accom3,
          blurDataURL: accom3.blurDataURL || "",
          blurWidth: accom3.blurWidth || 0,
          blurHeight: accom3.blurHeight || 0,
        },
      },
      {
        image: {
          ...accom4,
          blurDataURL: accom4.blurDataURL || "",
          blurWidth: accom4.blurWidth || 0,
          blurHeight: accom4.blurHeight || 0,
        },
      },
      {
        image: {
          ...accom5,
          blurDataURL: accom5.blurDataURL || "",
          blurWidth: accom5.blurWidth || 0,
          blurHeight: accom5.blurHeight || 0,
        },
      },
      {
        image: {
          ...accom6,
          blurDataURL: accom6.blurDataURL || "",
          blurWidth: accom6.blurWidth || 0,
          blurHeight: accom6.blurHeight || 0,
        },
      },
      {
        image: {
          ...accom7,
          blurDataURL: accom7.blurDataURL || "",
          blurWidth: accom7.blurWidth || 0,
          blurHeight: accom7.blurHeight || 0,
        },
      },
      {
        image: {
          ...accom8,
          blurDataURL: accom8.blurDataURL || "",
          blurWidth: accom8.blurWidth || 0,
          blurHeight: accom8.blurHeight || 0,
        },
      },
      {
        image: {
          ...accom9,
          blurDataURL: accom9.blurDataURL || "",
          blurWidth: accom9.blurWidth || 0,
          blurHeight: accom9.blurHeight || 0,
        },
      },
      {
        image: {
          ...accom10,
          blurDataURL: accom10.blurDataURL || "",
          blurWidth: accom10.blurWidth || 0,
          blurHeight: accom10.blurHeight || 0,
        },
      },
      {
        image: {
          ...accom11,
          blurDataURL: accom11.blurDataURL || "",
          blurWidth: accom11.blurWidth || 0,
          blurHeight: accom11.blurHeight || 0,
        },
      },
      {
        image: {
          ...accom12,
          blurDataURL: accom12.blurDataURL || "",
          blurWidth: accom12.blurWidth || 0,
          blurHeight: accom12.blurHeight || 0,
        },
      },
      {
        image: {
          ...accom13,
          blurDataURL: accom13.blurDataURL || "",
          blurWidth: accom13.blurWidth || 0,
          blurHeight: accom13.blurHeight || 0,
        },
      },
      {
        image: {
          ...accom14,
          blurDataURL: accom14.blurDataURL || "",
          blurWidth: accom14.blurWidth || 0,
          blurHeight: accom14.blurHeight || 0,
        },
      },
      {
        image: {
          ...accom15,
          blurDataURL: accom15.blurDataURL || "",
          blurWidth: accom15.blurWidth || 0,
          blurHeight: accom15.blurHeight || 0,
        },
      },
      {
        image: {
          ...accom16,
          blurDataURL: accom16.blurDataURL || "",
          blurWidth: accom16.blurWidth || 0,
          blurHeight: accom16.blurHeight || 0,
        },
      },
      {
        image: {
          ...accom17,
          blurDataURL: accom16.blurDataURL || "",
          blurWidth: accom16.blurWidth || 0,
          blurHeight: accom16.blurHeight || 0,
        },
      },
    ],
    "areas-carousel": [
      {
        image: {
          ...area1,
          blurDataURL: area1.blurDataURL || "",
          blurWidth: area1.blurWidth || 0,
          blurHeight: area1.blurHeight || 0,
        },
      },
      {
        image: {
          ...area2,
          blurDataURL: area2.blurDataURL || "",
          blurWidth: area2.blurWidth || 0,
          blurHeight: area2.blurHeight || 0,
        },
      },
      {
        image: {
          ...area4,
          blurDataURL: area4.blurDataURL || "",
          blurWidth: area4.blurWidth || 0,
          blurHeight: area4.blurHeight || 0,
        },
      },
      {
        image: {
          ...area5,
          blurDataURL: area5.blurDataURL || "",
          blurWidth: area5.blurWidth || 0,
          blurHeight: area5.blurHeight || 0,
        },
      },
      {
        image: {
          ...area6,
          blurDataURL: area6.blurDataURL || "",
          blurWidth: area6.blurWidth || 0,
          blurHeight: area6.blurHeight || 0,
        },
      },
      {
        image: {
          ...area7,
          blurDataURL: area7.blurDataURL || "",
          blurWidth: area7.blurWidth || 0,
          blurHeight: area7.blurHeight || 0,
        },
      },
      {
        image: {
          ...area11,
          blurDataURL: area11.blurDataURL || "",
          blurWidth: area11.blurWidth || 0,
          blurHeight: area11.blurHeight || 0,
        },
      },
    ],
    "hunting-carousel": [
      {
        image: {
          ...hunting1,
          blurDataURL: hunting1.blurDataURL || "",
          blurWidth: hunting1.blurWidth || 0,
          blurHeight: hunting1.blurHeight || 0,
        },
      },
      {
        image: {
          ...hunting3,
          blurDataURL: hunting3.blurDataURL || "",
          blurWidth: hunting3.blurWidth || 0,
          blurHeight: hunting3.blurHeight || 0,
        },
      },
      {
        image: {
          ...hunting4,
          blurDataURL: hunting4.blurDataURL || "",
          blurWidth: hunting4.blurWidth || 0,
          blurHeight: hunting4.blurHeight || 0,
        },
      },
      {
        image: {
          ...hunting5,
          blurDataURL: hunting5.blurDataURL || "",
          blurWidth: hunting5.blurWidth || 0,
          blurHeight: hunting5.blurHeight || 0,
        },
      },
      {
        image: {
          ...hunting7,
          blurDataURL: hunting7.blurDataURL || "",
          blurWidth: hunting7.blurWidth || 0,
          blurHeight: hunting7.blurHeight || 0,
        },
      },
      {
        image: {
          ...hunting8,
          blurDataURL: hunting8.blurDataURL || "",
          blurWidth: hunting8.blurWidth || 0,
          blurHeight: hunting8.blurHeight || 0,
        },
      },
    ],
  };

  const carouselTitles = {
    "accommodation-carousel": "Luxury Accommodation",
    "areas-carousel": "Service",
    "hunting-carousel": "Shooting",
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
    setFullScreenImage(src);
  };

  const handleCloseImage = () => {
    setFullScreenImage(null);
  };

  useEffect(() => {
    if (activeCarousel) {
      const timeout = setTimeout(() => setIsLoading(false), 500);
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
                  onClick={() => handleImageClick(item.imageSrc.src)}
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
              &times;
            </button>
            <Image
              src={fullScreenImage}
              alt="Full Screen"
              layout="intrinsic"
              width={800}
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