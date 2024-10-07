'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Gallery from '../components/Gallery';
import TestimonialSection from '../components/Testimonial';
import CharterService from '../components/CharterService';
import Footer from '../components/Footer';

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  // The 'lng' parameter is used by the i18n provider in the parent component
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <section id="services" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t('Our Services')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </section>
      <Gallery />
      <TestimonialSection />
      <CharterService />
      <Footer />
    </main>
  );
}