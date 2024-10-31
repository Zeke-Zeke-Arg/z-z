"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import entradaImage from "../assets/images/zeke-zeke-accommodation-1.jpg";
import Fade from "react-reveal/Fade";

const actionURL = "https://formspree.io/f/xpwzpdpg";

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

  const submitForm = async () => {
    try {
      const response = await fetch(actionURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ clientName: "", clientEmail: "", clientSubject: "", clientMessage: "" });
        setErrors({ clientName: "", clientEmail: "", clientSubject: "", clientMessage: "" });

        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } else {
        console.error("Failed to submit form - Error:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to submit form - Error:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      submitForm();
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
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <Fade left duration={1000} delay={200}>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4">
                {t("Let's Talk")}
              </h1>
              <div className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto md:mx-0">
                <h2 className="font-bold mb-2">{t("High Volume Dove Hunting Package:")}</h2>
                <ul className="list-disc list-inside mb-4 text-left">
                  <li>{t("All-inclusive experience with meals, drinks, and lodging")}</li>
                  <li>{t("Professional guides and full-time coordinator")}</li>
                  <li>{t("Airport transfers and ground transportation")}</li>
                  <li>{t("Optional add-ons: shells, gun rental, hunting license")}</li>
                </ul>
                <h2 className="font-bold mb-2">
                  {t("Dove and Pigeon Deluxe Package (4 Nights/5 Days):")}
                </h2>
                <ul className="list-disc list-inside text-left">
                  <li>{t("4-night stay in deluxe lodge, 6 hunting sessions")}</li>
                  <li>{t("All-inclusive with meals, drinks, and transportation")}</li>
                  <li>{t("Gun rental, hunting license, and 1000-2000 shells included")}</li>
                  <li>{t("Optional add-ons for non-hunters and extra amenities")}</li>
                </ul>
              </div>
            </div>
          </Fade>

          <Fade right duration={1000} delay={200}>
            <form
              onSubmit={handleSubmit}
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
