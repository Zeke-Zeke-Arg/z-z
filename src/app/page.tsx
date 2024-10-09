'use client';

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import TestimonialSection from './components/Testimonial';
import CharterService from './components/CharterService';
import Footer from './components/Footer';

const Home: React.FC = () => {
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
};

export default Home;
