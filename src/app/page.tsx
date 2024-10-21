"use client";

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import PanZoomGallery from "./components/PanZoomGallery";
import ContactForm from "./components/ContactForm";
import ProductOverview from "./components/ProductOverview";
import cazadorImage from "./assets/images/about us white.jpg";
import { aboutUsDescription } from "../libs/data";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <ProductOverview
        id="about-us"
        title="About us"
        description={aboutUsDescription}
        image={cazadorImage}
        alt="about us"
        imageSide="right"
      />
      <Gallery />
      <PanZoomGallery />
      <ContactForm id="contact-form" />
      <Footer />
    </main>
  );
};

export default Home;
