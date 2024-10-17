'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { navItems } from '@/libs/data';
import { FacebookIcon, InstagramIcon, PhoneIcon } from '@/libs/icons';
import logo from '@/app/assets/images/webp/footer-logo.webp';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-12 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image 
              src={logo} 
              alt="Z&Z Luxury Hunting Logo" 
              width={200} 
              height={100} 
              className="mb-4"
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">{t('Quick Links')}</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-gold transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">{t('Contact Us')}</h4>
            <div className="flex items-center mb-2">
              <PhoneIcon />
              <span>+549 3513721512 / +549 3525532959</span>
            </div>
            <div className="flex items-center mb-2">
              <InstagramIcon />
              <span>@ZK.ZEKE</span>
            </div>
            <div className="flex items-center">
              <FacebookIcon />
              <span>ZEKE & ZEKE</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} {t('Z&Z Luxury Hunting. All rights reserved.')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
