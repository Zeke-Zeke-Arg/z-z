import React from "react";
import Image, { StaticImageData } from "next/image";

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
  const hasContent = title && description;

  const imageContent = (
    <div className={`relative ${hasContent ? "w-1/2" : "w-full"} h-full`}>
      <Image src={image} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );

  const textContent = hasContent && (
    <div
      className={`w-1/2 p-8 flex flex-col h-full items-start ${
        imageSide === "left" ? "items-end" : ""
      }`}
    >
      <h2
        className={`-mt-10 text-4xl font-bold mb-6 text-left w-full`}
      >
        <span className="text-white-400 ">{title}</span>
      </h2>
      <p
        className="text-gray-300 text-lg mb-8"
        style={{ whiteSpace: "pre-wrap" }}
      >
        {description}
      </p>
    </div>
  );

  return (
    <section id={id} className="pt-16 -mb-20 bg-background h-screen w-full">
      <div className="container mx-auto px-4">
        <div className="flex text-white rounded-lg overflow-hidden h-[600px]">
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
  );
};

export default ProductOverview;
