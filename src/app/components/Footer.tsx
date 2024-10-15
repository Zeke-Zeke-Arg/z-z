'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { navItems } from '@/libs/data';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px" className="inline-block mr-2">
    <path style={{fill: 'none', stroke: '#ffffff', strokeWidth: 2, strokeLinecap: 'round', strokeMiterlimit: 10}} d="M25,4C13.402,4,4,13.402,4,25c0,10.528,7.756,19.222,17.861,20.74V30.566h-5.196v-5.52h5.196v-3.673c0-6.081,2.963-8.751,8.017-8.751c2.421,0,3.701,0.179,4.307,0.261v4.818h-3.447c-2.145,0-2.895,2.034-2.895,4.327v3.017h6.289l-0.853,5.52h-5.435v15.22C38.093,44.395,46,35.631,46,25C46,13.402,36.598,4,25,4z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px" className="inline-block mr-2">
    <path style={{fill: 'none', stroke: '#ffffff', strokeWidth: 2, strokeMiterlimit: 10}} d="M16,46h18c6.627,0,12-5.373,12-12V16c0-6.627-5.373-12-12-12H16C9.373,4,4,9.373,4,16v18C4,40.627,9.373,46,16,46z"/>
    <circle style={{fill: 'none', stroke: '#ffffff', strokeWidth: 2, strokeMiterlimit: 10}} cx="25" cy="25" r="10"/>
    <circle style={{fill: '#ffffff'}} cx="37" cy="13" r="2"/>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20px" height="20px" className="inline-block mr-2">
    <path style={{fill: 'none', stroke: '#ffffff', strokeWidth: 2, strokeMiterlimit: 10}} d="M36,44.99H14c-4.971,0-9-4.029-9-9v-22c0-4.971,4.029-9,9-9h22c4.971,0,9,4.029,9,9v22C45,40.961,40.971,44.99,36,44.99z"/>
    <path style={{fill: 'none', stroke: '#ffffff', strokeWidth: 2, strokeMiterlimit: 10}} d="M34.556,37.001c0.803,0,3.564-1.443,3.41-5.007c-0.027-0.628-0.38-1.204-0.923-1.552c-0.618-0.396-1.577-1.011-2.828-1.811c-1.141-0.729-2.615-0.781-3.805-0.129l-1.083,0.464c-0.564,0.396-1.287,0.475-1.923,0.209c-0.99-0.414-2.511-1.216-3.937-2.642c-1.426-1.426-2.228-2.947-2.642-3.937c-0.266-0.636-0.187-1.359,0.209-1.923l0.464-1.083c0.652-1.19,0.601-2.664-0.129-3.805c-0.8-1.251-1.415-2.21-1.811-2.828c-0.348-0.543-0.924-0.896-1.552-0.923c-3.564-0.154-5.007,2.607-5.007,3.41c0,0.556-0.761,7.239,6.778,14.778S34,37.001,34.556,37.001z"/>
  </svg>
);



const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-12 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('Z&Z Luxury Hunting')}</h3>
            <p>{t('Experience the pinnacle of hunting excellence')}</p>
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
