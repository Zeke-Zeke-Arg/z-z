'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('Z&Z Luxury Hunting')}</h3>
            <p>{t('Experience the pinnacle of hunting excellence')}</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">{t('Quick Links')}</h4>
            <ul className="space-y-2">
              {[t('About Us'), t('Services'), t('Gallery'), t('Contact')].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-gold transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">{t('Contact Us')}</h4>
            <p>{t('Email')}: info@zandzluxuryhunting.com</p>
            <p>{t('Phone')}: +1 (123) 456-7890</p>
            <div className="mt-4 space-x-4">
              {['facebook', 'twitter', 'instagram'].map((social) => (
                <a key={social} href={`https://${social}.com`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold">
                  <i className={`fab fa-${social} text-2xl`}></i>
                </a>
              ))}
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