"use client";

import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import PanZoomGallery from "./components/PanZoomGallery";
import ContactForm from "./components/ContactForm";
import ProductOverview from "./components/ProductOverview";
import cazadorImage from "./assets/images/about us white.jpg";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const aboutUsDescription = `${t("Zeke & Zeke Outfitters was established in 2022, leveraging over 35 years of combined experience in Argentina's dove hunting industry.")}

${t("Drawing from our extensive backgrounds working with some of the country's top hunting lodges, we've created a new standard for delivering premium hunting adventures.")}

${t("With more than 20 years of experience in hunting and fishing, we've helped hunters achieve world-record results by utilizing our deep expertise and close relationships with local farm owners, securing access to the best hunting grounds.")}  

${t("Our mission is to offer an unparalleled hunting experience, combining our passion for the sport with a personalized approach that guarantees success and enjoyment for every guest.")}

${t("At Zeke & Zeke Outfitters, you can expect nothing less than excellence in every aspect of your journey.")}`;

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
      <ProductOverview
        id="about-us"
        title={t("About Us")}
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
