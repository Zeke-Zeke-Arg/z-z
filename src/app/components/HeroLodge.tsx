'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import heroImage from '../assets/images/HeroLodge/TheLodge.webp';
import Fade from 'react-reveal/Fade';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Fade bottom duration={1000} delay={200}>
      <section id="lodge" className="relative h-screen flex items-end justify-center text-white mt-20">
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
        <div className="relative z-20 text-center px-2 md:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {t('The Lodge')}
          </h1>
        </div>
        
        {/* Gradient Overlay at the Bottom */}
        {/*
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10"></div>
        */}
      </section>
    </Fade>
  );
};

export default Hero;
