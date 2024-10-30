"use client";

import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import PanZoomGallery from "./components/PanZoomGallery";
import ContactForm from "./components/ContactForm";
import AboutUs from "./components/AboutUs";

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
      <Gallery />
      <PanZoomGallery />
      <ContactForm id="contact-form" />
      <Footer />
    </main>
  );
};

export default Home;
