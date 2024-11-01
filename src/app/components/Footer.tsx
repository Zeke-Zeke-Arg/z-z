"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { navItems } from "@/libs/data";
import { InstagramIcon, PhoneIcon, EmailIcon } from "@/libs/icons";
import logo from "@/app/assets/images/footer-logo.webp";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-12 ">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href={"#home"} scroll>
              <Image
                src={logo}
                alt="Z&Z Luxury Hunting Logo"
                width={200}
                height={100}
                className="mb-4"
              />
            </Link>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">{t("Quick Links")}</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    scroll
                    className="hover:text-gold transition-colors duration-300"
                  >
                    {t(item.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">{t("Contact Us")}</h4>
            <div className="flex items-center mb-2">
              <PhoneIcon />
              <span className="pl-5">
                <a
                  href="https://wa.me/5493513721512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-300"
                >
                  +549 3513721512
                </a>{" "}
                /{" "}
                <a
                  href="https://wa.me/5493525532959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors duration-300"
                >
                  +549 3525532959
                </a>
              </span>
            </div>
            <div className="flex items-center mb-2">
              <InstagramIcon />
              <a
                className="pl-5 hover:text-gold transition-colors duration-300"
                href="https://www.instagram.com/zk.zeke"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ zk.zeke
              </a>{" "}
            </div>
            <div className="flex items-center">
              <EmailIcon />
              <a
                href="mailto:info@zekezeke.us"
                rel="noopener noreferrer"
                className=" hover:text-gold transition-colors duration-300"
              >
                <span className="pl-5">info@zekezeke.us</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} {t("Z&Z Outfitters. All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
