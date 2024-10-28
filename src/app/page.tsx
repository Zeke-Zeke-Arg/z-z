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
import foundersImage2 from "./assets/images/Z&Z-founders-black.png";

import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const aboutUsDescription1 = `${t(
    `Zeke & Zeke Outfitters is owned by Zeke Leuci and Zeke Crea and was born in 2022, the year when we decided to start our operation by adopting our experience and knowledge acquired during more than 35 years combined operating dove hunting in Argentina, we are taking advantage of all these years where we worked in hunting lodges who were considered the best in the business, and we have developed a new version of doing it. We had only rescued the best of the best to provide an unprecedented experience like no other in the country.`,
  )}`;
  const aboutUsDescription2 = `${t(
    `Zeke Crea has been in the business as a hunting and fishing guide for more than 20 years, offering the best hunts around the country for several hunting lodges, being responsible for many hunters breaking world records of thousands of doves killed in one day and making them always achieved their goals, this is due to extensive knowledge and an excellent relationship with farm owners if you want the best flyways you could get, Zeke is the man you want to be in charge.`,
  )}`;
  const enhancedDescription = `
  ${t(
    `Together we ensure to provide you with excellence. We invite you to come and have the best experience of your life with us.`,
  )}
  `;

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
        description={aboutUsDescription1}
        image={cazadorImage}
        alt="about us"
        imageSide="right"
      />
      <ProductOverview
        id="about-us-2"
        title={" "}
        description={aboutUsDescription2}
        enhancedDescription={enhancedDescription}
        image={foundersImage2}
        alt="about us"
        imageSide="left"
        allowEnhancedDescription
        divider={false}
      />
      <Gallery />
      <PanZoomGallery />
      <ContactForm id="contact-form" />
      <Footer />
    </main>
  );
};

export default Home;
