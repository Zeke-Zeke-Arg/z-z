"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import entradaImage from "../assets/images/zeke-zeke-accommodation-1.webp";
import Fade from "react-reveal/Fade";

import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientSubject: "",
    clientMessage: "",
  });

  const [errors, setErrors] = useState({
    clientName: "",
    clientEmail: "",
    clientSubject: "",
    clientMessage: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    const formErrors = { clientName: "", clientEmail: "", clientSubject: "", clientMessage: "" };
    let isValid = true;

    if (!formData.clientName.trim()) {
      formErrors.clientName = t("Name is required.");
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.clientEmail.trim()) {
      formErrors.clientEmail = t("Email is required.");
      isValid = false;
    } else if (!emailPattern.test(formData.clientEmail)) {
      formErrors.clientEmail = t("Please enter a valid email. E.g name@domain.com");
      isValid = false;
    }

    if (!formData.clientSubject.trim() || formData.clientSubject.length < 3) {
      formErrors.clientSubject = t("Subject is required. Minimum 3 characters.");
      isValid = false;
    }

    if (!formData.clientMessage.trim() || formData.clientMessage.length < 10) {
      formErrors.clientMessage = t("Message is required. Minimum 10 characters.");
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const result = await emailjs.sendForm(
          "service_aflfe3i",
          "template_ld5pz2k",
          e.target as HTMLFormElement,
          "j8N6uYq0BnzpgjMFs",
        );
        console.log("Email sent successfully:", result.text);
        setFormSubmitted(true);
        setFormData({ clientName: "", clientEmail: "", clientSubject: "", clientMessage: "" });
        setErrors({ clientName: "", clientEmail: "", clientSubject: "", clientMessage: "" });

        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } catch (error) {
        console.error("Failed to submit form - Error:", error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section
      id="contact-form"
      className="relative min-h-screen flex items-center justify-center text-white py-12 sm:py-16"
    >
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <Image
        src={entradaImage}
        alt="Contact form background"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        className="z-0"
        priority
      />
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <Fade left duration={1000} delay={200}>
            <div className="w-full md:w-2/3 text-center md:text-left">

              <div className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto md:mx-0">

                <h1 className="font-bold mb-2">{t("HIGH VOLUME DOVE HUNTING")}</h1>
                <h2 className="font-bold mb-2">{t("Regular rate:")}</h2>
                <ul className="list-disc list-inside mb-4 text-left ">
                  <li>{t("Per hunter per night $549")}</li>
                  <li>{t("With +8 hunters you can request")}</li>
                  <li>{t("private lodging")}</li>
                </ul>

                <h2 className="font-bold mb-2">{t("WHAT’S INCLUDED")}</h2>
                <ul className="list-disc list-inside mb-4 text-left text-sm">
                  <li>{t("Meet and assistance on arrival and departure at Cordoba International Airport.")}</li>
                  <li>{t("Full time coordinator from the moment you book your trip.")}</li>
                  <li>{t("All ground transportation from/to Cordoba airport and hunting fields.")}</li>
                  <li>{t("All Wonderful gourmet meals, breakfast, lunch, snacks and dinner.")}</li>
                  <li>{t("All beverages, including real good quality Argentinean wine, local beers, and local hard liquor.")}</li>
                  <li>{t("All local taxes and service charges. All field leases.")}</li>
                  <li>{t("Professional hunting guides and personal assistants.")}</li>
                  <li>{t("Gun cleaning service.")}</li>
                  <li>{t("Free WiFi.")}</li>
                </ul>
                
                <h2 className="font-bold mb-2">{t("NOT INCLUDED")}</h2>
                <ul className="list-disc list-inside mb-4 text-left text-sm">
                  <li>{t("Airfare.")}</li>
                  <li>{t("Shells ($19.95 per box of 25).")}</li>
                  <li>{t("Gun rental ($85 per day).")}</li>
                  <li>{t("Hunting License ($65 per day).")}</li>
                  <li>{t("Gratuities to house staff and bird boys.")}</li>
                  <li>{t("Single room ($60 per night).")}</li>
                  <li>{t("Pigeon Hunt ($250, 200 pigeons limit per day).")}</li>
                  <li>{t("Non hunter $350 per day.")}</li>
                </ul>

              </div>
            </div>
          </Fade>

          <Fade right duration={1000} delay={200}>
            <form
              onSubmit={submitForm}
              className="w-full md:w-1/3 space-y-4 max-w-md mx-auto md:mx-0"
            >
              <input
                name="clientName"
                type="text"
                placeholder={errors.clientName ? `* ${errors.clientName}` : t("Name")}
                value={formData.clientName}
                onChange={handleChange}
                className={`w-full rounded-md py-3 px-4 bg-black bg-opacity-60 text-white text-sm outline-none border border-white focus:ring-2 ${
                  errors.clientName ? "focus:ring-red-500 border-red-500" : "focus:ring-white"
                }`}
              />

              <input
                name="clientEmail"
                type="email"
                placeholder={errors.clientEmail ? `* ${errors.clientEmail}` : t("Email")}
                value={formData.clientEmail}
                onChange={handleChange}
                className={`w-full rounded-md py-3 px-4 bg-black bg-opacity-60 text-white text-sm outline-none border border-white focus:ring-2 ${
                  errors.clientEmail ? "focus:ring-red-500 border-red-500" : "focus:ring-white"
                }`}
              />

              <input
                name="clientSubject"
                type="text"
                placeholder={errors.clientSubject ? `* ${errors.clientSubject}` : t("Subject")}
                value={formData.clientSubject}
                onChange={handleChange}
                className={`w-full rounded-md py-3 px-4 bg-black bg-opacity-60 text-white text-sm outline-none border border-white focus:ring-2 ${
                  errors.clientSubject ? "focus:ring-red-500 border-red-500" : "focus:ring-white"
                }`}
              />

              <textarea
                name="clientMessage"
                placeholder={errors.clientMessage ? `* ${errors.clientMessage}` : t("Message")}
                rows={6}
                value={formData.clientMessage}
                onChange={handleChange}
                className={`w-full rounded-md px-4 py-3 bg-black bg-opacity-60 text-white text-sm outline-none border border-white focus:ring-2 ${
                  errors.clientMessage ? "focus:ring-red-500 border-red-500" : "focus:ring-white"
                }`}
                style={{ minHeight: "100px", maxHeight: "400px" }}
              ></textarea>

              <button
                type="submit"
                className="w-full bg-transparent hover:bg-gold text-white font-semibold hover:text-black py-3 px-4 border border-white hover:border-transparent rounded transition duration-300"
              >
                {formSubmitted ? t("Thank you, we will be in touch soon!") : t("Send")}
              </button>
            </form>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
