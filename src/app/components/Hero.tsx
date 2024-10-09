'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import heroImage from '../assets/images/hero-image.jpg';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <Image
        src={heroImage}
        alt="Hero background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        className="z-0"
        priority
      />
      <div className="relative z-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          {t('Experience the Pinnacle of Hunting Excellence')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {t('Indulge in the perfect blend of luxury accommodations and high-volume bird hunting')}
        </p>
        <button className="bg-transparent hover:bg-gold text-white font-semibold hover:text-black py-2 px-4 border border-gold hover:border-transparent rounded transition duration-300">
          {t('Explore More')}
        </button>
      </div>
    </section>
  );
};

export default Hero;
