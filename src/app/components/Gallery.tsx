'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Expandable from './animata/carousel/expandable';
import caceriaImage from '../assets/images/webp/caceria.webp';
import caceria2Image from '../assets/images/webp/caceria2.webp';
import caceria3Image from '../assets/images/webp/caceria3.webp';
import cazadorImage from '../assets/images/webp/cazador.webp';
import ServiceCard from './ServiceCard';

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  const images = [
    { image: caceriaImage, title: t('Luxury Lodging') },
    { image: caceria2Image, title: t('Exclusive Hunting Areas') },
    { image: caceria3Image, title: t('Client Experiences') },
    { image: cazadorImage, title: t('Scenic Views') },
  ];

  return (
    <section id="our-services" className="h-screen mt-10 py-10 bg-background">
      <div className="h-full container mx-auto px-4">
          <h2 className="p-6 -mt-20 text-4xl font-bold text-center text-text font-serif">{t('Our Experience')}</h2>
        <div className="flex flex-col md:flex-row h-full">
          <div className="w-full md:w-3/5 mb-8 md:mb-0 md:pr-4 h-full">
            <Expandable list={images} autoPlay={true} className="w-full h-full" />
          </div>
          <div className="w-full md:w-2/5 md:pl-4 h-full flex flex-col">
            <div className="flex flex-col space-y-8 h-full justify-between">
              <ServiceCard
                icon="🕊️"
                title={t('Pigeon Hunting')}
                description={t('Enjoy world-class pigeon hunting across vast agricultural lands, offering unmatched bird activity and guided hunts. Experience personalized services and immersive outdoor action for all skill levels.')}
              />
              <ServiceCard
                icon="🏨"
                title={t('Luxury Accommodations')}
                description={t('Indulge in premium lodging featuring spacious suites, gourmet dining, and modern amenities. After a day in the field, relax in comfort with access to a pool, gym, and serene surroundings.')}
              />
              <ServiceCard
                icon="🏞️"
                title={t('Exclusive Land')}
                description={t('Hunt on privately-owned, expansive properties reserved exclusively for our clients. These well-maintained areas provide a secluded and rich hunting experience, away from public access.')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
