'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useRouter, useParams } from 'next/navigation';
import { languages } from '../i18n/settings';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const params = useParams();
  const currentLang = params?.lng as string || 'en';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.push(`/${lng}`);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">{t('Welcome to Z&Z')}</div>
        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            {['About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white hover:text-gold transition-colors duration-300">
                  {t(item)}
                </Link>
              </li>
            ))}
          </ul>
          <select 
            onChange={(e) => changeLanguage(e.target.value)}
            value={currentLang}
            className="bg-transparent text-white border border-white rounded px-2 py-1"
          >
            {languages.map((lng) => (
              <option key={lng} value={lng}>
                {lng.toUpperCase()}
              </option>
            ))}
          </select>
        </nav>
      </div>
    </header>
  );
};

export default Header;