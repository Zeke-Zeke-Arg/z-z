"use client";

import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroLodge from "./components/HeroLodge";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import PanZoomGallery from "./components/PanZoomGallery";
import ContactForm from "./components/ContactForm";
import AboutUs from "./components/AboutUs";
import CharterSection from "./components/CharterSection";

const Home: React.FC = () => {
  useEffect(() => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });

      window.history.replaceState(null, "", "/");
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <AboutUs />
      <HeroLodge />
      <PanZoomGallery />
      <Gallery />
      <CharterSection />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Home;
