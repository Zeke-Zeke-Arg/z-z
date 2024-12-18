'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import heroImage from '../assets/images/PigeonHunting.webp';
import Fade from 'react-reveal/Fade';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Fade bottom duration={1000} delay={200}>
      <section id="PigeonHunting" className="relative h-screen flex items-end justify-start text-white mt-20">
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
        <div className="relative z-20 md:justify-start md:mx-10 px-2 md:px-8 pb-10">

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('Pigeon')}
          </h1>

          <div className="text-lg mx-auto">
          {t("Combine High Volume dove shooting with exceptional wild pigeon Hunting. Zeke Crea is passionate about pigeon hunting, in contrast to many other lodges, he knows exactly what it takes to offer the best experience. For many years he has developed a unique relationship with farmers that give us access to the best fields in Cordoba with the highest hunting limit available.")}
          </div>

        </div>
        
      </section>
    </Fade>
  );
};

export default Hero;
