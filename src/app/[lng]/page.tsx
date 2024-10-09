import React from 'react';
import { languages } from '../i18n/settings.mjs';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import TestimonialSection from '../components/Testimonial';
import CharterService from '../components/CharterService';
import Footer from '../components/Footer';

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  // The 'lng' parameter is used by the i18n provider in a parent component
  // We're keeping it in the props to maintain the expected structure
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const currentLang = lng;

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Gallery />
      <TestimonialSection />
      <CharterService />
      <Footer />
    </main>
  );
}
