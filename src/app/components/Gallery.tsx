'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Expandable from './animata/carousel/expandable';
import caceriaImage from '../assets/images/caceria.jpg';
import caceria2Image from '../assets/images/caceria2.jpg';
import caceria3Image from '../assets/images/caceria3.jpg';
import cazadorImage from '../assets/images/cazador.jpg';
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
    <section id="gallery" className="h-screen my-10 py-10 bg-background">
      <div className="h-full container mx-auto px-4">
          {/* <h2 className="text-4xl font-bold text-center mb-12 text-text font-serif">{t('Gallery')}</h2> */}
        <div className="flex flex-col md:flex-row h-full">
          <div className="w-full md:w-3/5 mb-8 md:mb-0 md:pr-4 h-full">
            <Expandable list={images} autoPlay={true} className="w-full h-full" />
          </div>
          <div className="w-full md:w-2/5 md:pl-4 h-full flex flex-col">
            <div className="flex flex-col space-y-8 h-full justify-between">
              <ServiceCard
                icon="🕊️"
                title={t('Pigeon Hunting')}
                description={t('Experience unique pigeon hunting and build relationships with farm owners.')}
              />
              <ServiceCard
                icon="🏨"
                title={t('Luxury Accommodations')}
                description={t('Enjoy 5-star lodging with en-suite bathrooms, gym, pool, and fire-pit.')}
              />
              <ServiceCard
                icon="🏞️"
                title={t('Exclusive Land')}
                description={t('Hunt on our privately owned land for a truly exclusive experience.')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
