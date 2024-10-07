'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const CharterService: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="charter-service" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">{t('Luxury Charter Service')}</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/private-jet.jpg"
              alt={t('Luxury Private Jet')}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold mb-4">{t('Experience Unparalleled Comfort')}</h3>
            <p className="text-gray-300 mb-6">
              {t('Our luxury charter service offers the ultimate in comfort and convenience. Travel in style to your hunting destination with our fleet of state-of-the-art private jets, ensuring a seamless and luxurious journey from start to finish.')}
            </p>
            <ul className="text-gray-300 mb-6">
              <li>{t('✓ Flexible scheduling to suit your needs')}</li>
              <li>{t('✓ Gourmet catering options available')}</li>
              <li>{t('✓ Experienced and professional flight crew')}</li>
              <li>{t('✓ Direct flights to remote hunting locations')}</li>
            </ul>
            <button className="bg-gold text-black font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300">
              {t('Book Your Flight')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharterService;