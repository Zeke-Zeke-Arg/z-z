'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import heroImage from '../assets/images/DoveHunting.webp';
import Fade from 'react-reveal/Fade';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Fade bottom duration={1000} delay={200}>
      <section id="DoveHunting" className="relative h-screen flex items-end justify-center text-white mt-20">
        <div className="absolute inset-0 bg-black opacity-55 z-10"></div>
        <Image
          src={heroImage}
          alt="Hero background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className="z-0"
          priority
        />

        {/*
        <div className="relative z-20 text-center px-2 md:px-8 pb-10">

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('Dove Hunting')}
          </h1>

          <div className="text-lg mx-auto">
          {t("Located at the western side of Cordoba province in the largest irrigated area of Argentina, the peanut,sunflower and sorghum fields in the area together with many acres of roost make this area an incredible habitat for doves and pigeons.")}
          </div>

          <div className="text-lg mx-auto">
          {t("Everyone who visits Córdoba is amazed by the number of doves they see and the size of the flocks for high volume dove hunting, the concentration can vary throughout the year, Zeke & Zeke makes sure you hunt as many birds you want, this is due to our non-stop scouting, great knowledge and the experience gained over the years.")}
          </div>

        </div>
        
        */}

        <div className="container mx-auto flex items-center justify-center md:justify-start md:mx-10 z-10">
          <div className="z-10 relative px-4 py-12 sm:py-16 sm:w-1/2 max-w-[550px] md:mr-14">

            <h2 className="text-5xl font-bold mb-12">
              {t('Dove Hunting')}
            </h2>

            <div className="text-lg mx-auto mb-4">
              {t("Located at the western side of Cordoba province in the largest irrigated area of Argentina, the peanut,sunflower and sorghum fields in the area together with many acres of roost make this area an incredible habitat for doves and pigeons.")}
            </div>
            
            <div className="text-lg mx-automb-4">
              {t("Everyone who visits Córdoba is amazed by the number of doves they see and the size of the flocks for high volume dove hunting, the concentration can vary throughout the year, Zeke & Zeke makes sure you hunt as many birds you want, this is due to our non-stop scouting, great knowledge and the experience gained over the years.")}
            </div>
            
          </div>
        </div>


      </section>
    </Fade>
  );
};

export default Hero;
