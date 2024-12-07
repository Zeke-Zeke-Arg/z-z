"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import diningRoom from "@/app/assets/images/zeke-zeke-dinning-room-1.webp";
import room8 from "@/app/assets/images/zeke-zeke-room-1.webp";
import jacuzzi from "@/app/assets/images/zeke-zeke-jacuzzi-view.webp";
import Fade from "react-reveal/Fade";

const PanZoomGallery: React.FC = () => {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);
  const { t } = useTranslation();

  const lodge = [
    {
      title: t("Accommodations"),
      description: t("Escape to our accommodations, designed for relaxation and unforgettable moments. Unwind, create memories, and enjoy a peaceful atmosphere, far from daily stress."),
      image: diningRoom,
      alt: t("Accommodations"),
    },
    {
      title: t("Rooms"),
      description: t(
        "Relax in comfort at our lodge with six double rooms, each with en-suite bathrooms and air conditioning. Enjoy stunning mountain views, sunsets, and unwind by the fire pit or heated outdoor pool. Perfect for private hunting retreats, accommodating up to 12 guests."
      ),
      image: room8,
      alt: t("Rooms"),
    },
    {
      title: t("Relaxation"),
      description: t("After a long day, unwind and recharge in complete comfort. Our relaxation services are available daily, providing the perfect way to ease into the evening and enhance your stay."),
      image: jacuzzi,
      alt: t("Relaxation"),
    },
  ];
  const images = lodge;

  const handleMouseEnter = (index: number) => {
    setHoveredTile(index);
  };

  const handleMouseLeave = () => {
    setHoveredTile(null);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoveredTile !== null) {
      const tile = e.currentTarget;
      const rect = tile.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      tile.style.setProperty("--x", `${x}%`);
      tile.style.setProperty("--y", `${y}%`);
    }
  };

  return (
    <section id="lodge" className="relative w-full min-h-screen bg-background overflow-hidden pt-20">
      <h2 className="text-4xl font-bold text-center mb-8 z-20 text-white text-shadow font-serif mt-12">
        {t("The Lodge")}
      </h2>
      <div className="w-full h-full flex flex-col md:flex-row">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full md:w-1/3 h-[33vh] md:h-[calc(100vh-12rem)] overflow-hidden"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 ease-out ${
                hoveredTile === index ? "scale-110" : ""
              }`}
              style={{ transformOrigin: "var(--x) var(--y)" }}
            >
              <Image
                src={image.image}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
            <div className="absolute z-20 bottom-[10%] left-0 right-0 text-center text-white text-shadow px-4">
              <Fade bottom duration={1000} delay={200}>
              <div className="text-2xl mb-2">{image.title}</div>
              <div className="text-sm max-w-xs mx-auto">
                {image.description}
              </div>
              </Fade>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </section>
  );
};

export default PanZoomGallery;
