'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Expandable from './animata/carousel/expandable';
import caceriaImage from '../assets/images/caceria.jpg';
import caceria2Image from '../assets/images/caceria2.jpg';
import caceria3Image from '../assets/images/caceria3.jpg';
import cazadorImage from '../assets/images/cazador.jpg';
import ServiceCard from './ServiceCard';
import Fade from 'react-reveal/Fade';

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  const images = [
    { image: caceriaImage, title: t('Luxury Lodging') },
    { image: caceria2Image, title: t('Exclusive Hunting Areas') },
    { image: caceria3Image, title: t('Client Experiences') },
    { image: cazadorImage, title: t('Scenic Views') },
  ];

  return (
    <div id="our-services" className="overflow-hidden bg-background">
      <section className="min-h-screen w-full flex items-center py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text font-serif mb-6 md:mb-8">{t('Our Experience')}</h2>
          <div className="flex flex-col md:flex-row md:h-[calc(100vh-180px)]">
            <Fade bottom duration={1000} delay={200}>
            <div className="w-full md:w-3/5 mb-6 md:mb-0 md:pr-4 h-[50vh] md:h-full">
              <Expandable list={images} autoPlay={true} className="w-full h-full" />
            </div>
            </Fade>
            <Fade right duration={1000} delay={200}>
            <div className="w-full md:w-2/5 md:pl-4 h-full flex flex-col">
              <div className="flex flex-col space-y-4 md:space-y-8 h-full justify-between">
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
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
