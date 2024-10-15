"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Image from 'next/image';
import entradaImage from '../assets/images/Entrada.jpg';

interface ContactFormProps {
  id?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ id }) => {
  const { t } = useTranslation();

  return (
    <section id={id} className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <Image
        src={entradaImage}
        alt="Contact form background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        className="z-0"
        priority
      />
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
              {t("Let's Talk")}
            </h1>
            <div className="text-lg md:text-xl mb-12 max-w-2xl">
              <h2 className="font-bold mb-2">{t("High Volume Dove Hunting Package:")}</h2>
              <ul className="list-disc list-inside mb-4">
                <li>{t("All-inclusive experience with meals, drinks, and lodging")}</li>
                <li>{t("Professional guides and full-time coordinator")}</li>
                <li>{t("Airport transfers and ground transportation")}</li>
                <li>{t("Optional add-ons: shells, gun rental, hunting license")}</li>
              </ul>
              <h2 className="font-bold mb-2">{t("Dove and Pigeon Deluxe Package (4 Nights/5 Days):")}</h2>
              <ul className="list-disc list-inside">
                <li>{t("4-night stay in deluxe lodge, 6 hunting sessions")}</li>
                <li>{t("All-inclusive with meals, drinks, and transportation")}</li>
                <li>{t("Gun rental, hunting license, and 1000-2000 shells included")}</li>
                <li>{t("Optional add-ons for non-hunters and extra amenities")}</li>
              </ul>
            </div>
          </div>
          <form className="w-full md:w-1/3 space-y-4">
            <input
              type="text"
              placeholder={t("Name")}
              className="w-full rounded-md py-3 px-4 bg-black bg-opacity-60 text-white text-sm outline-none border border-white focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder={t("Email")}
              className="w-full rounded-md py-3 px-4 bg-black bg-opacity-60 text-white text-sm outline-none border border-white focus:ring-2 focus:ring-white"
            />
            <input
              type="text"
              placeholder={t("Subject")}
              className="w-full rounded-md py-3 px-4 bg-black bg-opacity-60 text-white text-sm outline-none border border-white focus:ring-2 focus:ring-white"
            />
            <textarea
              placeholder={t("Message")}
              rows={6}
              className="w-full rounded-md px-4 bg-black bg-opacity-60 text-white text-sm pt-3 outline-none border border-white focus:ring-2 focus:ring-white"
            ></textarea>
            <button
              type="button"
              className="w-full bg-transparent hover:bg-gold text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded transition duration-300"
            >
              {t("Send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
