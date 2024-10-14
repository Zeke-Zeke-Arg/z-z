import React from "react";
import Carousel from "./Carousel";
import ProductOverview from "./ProductOverview";
import { doveHunting } from "@/libs/data";

const ProductOverviewCarousel: React.FC = () => {
  const productData = doveHunting;

  const carouselItems = productData.map((product, index) => (
    <ProductOverview
      key={index}
      title={product.title}
      description={product.description}
      image={product.image}
      alt={product.alt}
    />
  ));

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full h-full">
        <Carousel items={carouselItems} />
      </div>
    </div>
  );
};

export default ProductOverviewCarousel;
