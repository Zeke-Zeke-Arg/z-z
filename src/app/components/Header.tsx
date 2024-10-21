'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { navItems } from '@/libs/data';
import logo from '@/app/assets/images/logo.webp'

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black opacity-80`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="#home" scroll className="flex items-center">
          <Image
            src={logo}
            alt="Z&Z Logo"
            width={75}
            height={25}
            className="object-contain"
          />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} scroll className="text-white hover:text-gold transition-colors duration-300">
                  {t(item.name)}
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
