import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProductOverviewProps {
  title?: string;
  description?: string;
  image: string | StaticImageData;
  alt: string;
  imageSide?: 'left' | 'right';
}

const ProductOverview: React.FC<ProductOverviewProps> = ({ title, description, image, alt, imageSide = 'left' }) => {
  const hasContent = title && description;

  const imageContent = (
    <div className={`relative ${hasContent ? 'w-1/2' : 'w-full'}`}>
      <Image
        src={image}
        alt={alt}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );

  const textContent = hasContent && (
    <div className="w-1/2 p-8 flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-6">
        <span className="text-white-400">{title}</span>
      </h2>
      <p className="text-gray-300 text-lg mb-8">
        {description}
      </p>
    </div>
  );

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex text-white rounded-lg overflow-hidden h-[600px]">
          {hasContent ? (
            imageSide === 'left' ? (
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
