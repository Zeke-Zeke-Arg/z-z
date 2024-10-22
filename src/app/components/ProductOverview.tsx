import React from "react";
import Image, { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";
import Fade from 'react-reveal/Fade';

interface ProductOverviewProps {
  id?: string;
  title?: string;
  description?: string;
  image: string | StaticImageData;
  alt: string;
  imageSide?: "left" | "right";
}

const ProductOverview: React.FC<ProductOverviewProps> = ({
  id,
  title,
  description,
  image,
  alt,
  imageSide = "left",
}) => {
  const { t } = useTranslation();
  const hasContent = title && description;

  const imageContent = (
    <Fade bottom duration={1000} delay={200}>
      <div
        className={`relative ${hasContent ? "w-full md:w-1/2" : "w-full"} h-[50vh] md:h-full rounded-lg overflow-hidden`}
      >
        <Image src={image} alt={t(alt)} fill style={{ objectFit: "cover" }} />
      </div>
    </Fade>
  );
  
  const textContent = hasContent && (
    <Fade bottom duration={1000} delay={400}>
      <div
        className={`w-full md:w-1/2 p-8 flex flex-col h-full items-start ${
          imageSide === "left" ? "md:items-end" : ""
        }`}
      >
        <h2 className="text-4xl font-bold mb-6 text-left w-full">
          <span className="text-white-400">{t(title)}</span>
        </h2>
        <p
          className="text-gray-300 text-lg mb-8"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {t(description)}
        </p>
      </div>
    </Fade>
  );

  return (
    <div id={id} className="overflow-hidden bg-background">
      <section className="min-h-screen md:h-screen w-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row text-white rounded-lg overflow-hidden md:h-[calc(100vh-80px)]">
            {hasContent ? (
              imageSide === "left" ? (
                <>
                  {imageContent}
                  {textContent}
                </>
              ) : (
                <>
                  {textContent}
                  {imageContent}
                </>
              )
            ) : (
              imageContent
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductOverview;
