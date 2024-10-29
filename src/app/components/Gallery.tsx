"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import Image from "next/image";

import Expandable from "./animata/carousel/expandable";
import caceria1Image from "@/app/assets/images/zeke-zeke-go-hunting-1.jpg";
import caceria2Image from "@/app/assets/images/zeke-zeke-go-hunting-2.jpg";
import caceria3Image from "@/app/assets/images/zeke-zeke-go-hunting-3.jpg";
import caceria4Image from "@/app/assets/images/zeke-zeke-go-hunting-4.jpg";
import caceria5Image from "@/app/assets/images/zeke-zeke-go-hunting-5.jpg";
import hunterImage from "@/app/assets/images/zeke-zeke-hunter-mountains.jpg";
import livingRoom from "@/app/assets/images/zeke-zeke-livingroom-1.jpg";
import diningRoom from "@/app/assets/images/zeke-zeke-dinning-room-1.jpg";
import roomImage2 from "@/app/assets/images/zeke-zeke-room-2.jpg";
import roomImage3 from "@/app/assets/images/zeke-zeke-room-3.jpg";
import roomImage4 from "@/app/assets/images/zeke-zeke-room-4.jpg";
import areas1 from "@/app/assets/images/zeke-zeke-areas-1.png";
import areas2 from "@/app/assets/images/zeke-zeke-areas-2.png";
import areas3 from "@/app/assets/images/zeke-zeke-areas-3.png";
import areas4 from "@/app/assets/images/zeke-zeke-areas-4.jpg";

import ImageCarousel from "./animata/carousel/ImageCarousel";

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  const [activeCarousel, setActiveCarousel] = useState<string | null>(null);

  const imagesForGallery = [
    { image: caceria1Image, title: t("Luxury Lodging") },
    { image: caceria2Image, title: t("Exclusive Hunting Areas") },
    { image: hunterImage, title: t("Scenic Views") },
    { image: caceria3Image, title: t("Client Experiences") },
  ];

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
      { image: caceria3Image },
      { image: caceria2Image },
      { image: caceria4Image },
      { image: caceria3Image },
    ],
    "accommodation-carousel": [
      { image: diningRoom },
      { image: roomImage4 },
      { image: roomImage3 },
      { image: roomImage2 },
    ],
    "areas-carousel": [{ image: areas1 }, { image: areas2 }, { image: areas3 }, { image: areas4 }],
  };
  const carouselTitles = {
    "hunting-carousel": "Pigeon Hunting",
    "accommodation-carousel": "Luxury Accommodation",
    "areas-carousel": "Exclusive Hunting Areas",
  };

  return (
    <div id="our-services" className="overflow-hidden bg-background">
      <section className="min-h-screen w-full flex items-center py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text font-serif mb-6 mt-12 md:mb-8">
            {t("Our Experience")}
          </h2>
          <div className="flex flex-col md:flex-row md:h-[calc(100vh-180px)] space-y-6 md:space-y-0 md:space-x-4">
            <Fade bottom duration={1000} delay={200}>
              <div className="w-full md:w-3/5 mb-6 md:mb-0 h-[50vh] md:h-full">
                <Expandable list={imagesForGallery} autoPlay={true} className="w-full h-full" />
              </div>
            </Fade>

            <Fade right duration={1000} delay={200}>
              <div className="w-full md:w-2/5 flex flex-col space-y-4 h-full">
                {imagesForGrid.map((item, index) => (
                  <div
                    key={index}
                    className="relative group w-full h-56 md:h-[33%] overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => setActiveCarousel(item.carouselId)}
                  >
                    <Image
                      src={item.imageSrc}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      className="transition duration-300 group-hover:brightness-75"
                    />
                    <p className="absolute bottom-4 left-4 text-xl sm:text-2xl md:text-4xl font-serif shadow-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-4xl font-bold mb-6 text-center w-full">
          <span className="text-white-400">
            {t(
              activeCarousel
                ? carouselTitles[activeCarousel]
                : "Pigeon Hunting, Luxury Accommodation and Exclusive Hunting Areas",
            )}
          </span>
        </h2>

        <div className="relative">
          <ImageCarousel
            images={
              activeCarousel
                ? carousels[activeCarousel as CarouselKeys]
                : [...Object.values(carousels).flat()]
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
