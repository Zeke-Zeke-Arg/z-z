'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black opacity-80' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">{t('Welcome to Z&Z')}</div>
        <nav>
          <ul className="flex space-x-6">
            {['About Us', 'Services', 'Gallery', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white hover:text-gold transition-colors duration-300">
                  {t(item)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
