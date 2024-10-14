"use client";

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
// import CharterService from "./components/CharterService";
import Footer from "./components/Footer";
import PanZoomGallery from "./components/PanZoomGallery";
import ContactForm from "./components/ContactForm";
// import ProductOverviewCarousel from "./components/ProductOverviewCarousel";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Gallery />
      <PanZoomGallery />
      <ContactForm />
      {/* <ProductOverviewCarousel /> */}
      {/* <TestimonialSection /> */}
      {/* <CharterService /> */}
      <Footer />
    </main>
  );
};

export default Home;
