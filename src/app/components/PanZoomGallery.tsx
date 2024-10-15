"use client";

import React, { useState } from "react";
import Image from "next/image";
import { lodge } from "@/libs/data";
import { useTranslation } from "react-i18next";


const PanZoomGallery: React.FC = () => {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);
  const images = lodge
  const { t } = useTranslation();

  

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
    <section id="lodge" className="relative pt-20 mb-2 h-screen w-full bg-background overflow-hidden">
      <h2 className="absolute top-6 left-0 right-0 text-4xl font-bold text-center z-20 text-white text-shadow font-serif">
        {t("Our Lodge")}
      </h2>
      <div className="flex w-full h-full mt-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-1/3 h-full overflow-hidden"
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
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
            <div className="absolute z-20 bottom-[10%] left-0 right-0 text-center text-white text-shadow px-4">
              <div className="text-2xl mb-2">{image.title}</div>
              <div className="text-sm max-w-xs mx-auto">
                {image.description}
              </div>
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
