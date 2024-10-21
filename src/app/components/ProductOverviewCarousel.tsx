import React from "react";
import Carousel from "./Carousel";
import ProductOverview from "./ProductOverview";
import caceria from '@/app/assets/images/caceria.jpg';
import caceria2 from '@/app/assets/images/caceria2.jpg';
import caceria3 from '@/app/assets/images/caceria3.jpg';
import cazador from '@/app/assets/images/cazador.jpg';
import counter from '@/app/assets/images/palomas.jpg';
import { useTranslation } from "react-i18next";



const ProductOverviewCarousel: React.FC = () => {
  const {t} = useTranslation()
  
  const doveHunting = [
    {
      title: t("Dove hunting"),
      description: t("Córdoba has for many years been reputed to be the best place in the world for dove hunting. Everyone who visits Córdoba is amazed by the number of doves they see and the size of the flocks for high volume dove hunting, the concentration can vary throughout the year, Zeke & Zeke makes sure you kill as many as you want , this is due to our non- stop scauting, great knowledge and the experience gained over the years."),
      image: caceria.src,
      alt: t("Dove Hunting"),
    },
    {
      image: caceria2.src,
      alt: t("Dove Hunting"),
    },
    {
      image: caceria3.src,
      alt: t("Dove Hunting"),
    },
    {
      image: cazador.src,
      alt: t("Dove Hunting"),
    },
    {
      image: counter.src,
      alt: t("Dove Hunting"),
    },
  ];
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
