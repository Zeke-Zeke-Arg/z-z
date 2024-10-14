import React from "react";
import { languages } from "../i18n/settings.mjs";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import PanZoomGallery from "../components/PanZoomGallery";


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
      <PanZoomGallery />
      {/* <ProductOverviewCarousel /> */}
      {/* <TestimonialSection /> */}
      {/* <CharterService /> */}
      <Footer />
    </main>
  );
}
