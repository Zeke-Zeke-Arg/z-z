'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  const images = [
    { src: '/images/hunting.jpeg', alt: t('Luxury Lodging') },
    { src: '/images/hunting.jpeg', alt: t('Exclusive Hunting Areas') },
    { src: '/images/hunting.jpeg', alt: t('Client Experiences') },
    { src: '/images/hunting.jpeg', alt: t('Scenic Views') },
  ];

  return (
    <section id="gallery" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{t('Gallery')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg">
              <Image
                src={img.src}
                alt={img.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold p-4">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;