'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-gold">
      <div className="text-gold text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{t(title)}</h3>
      <p className="text-gray-300">{t(description)}</p>
    </div>
  );
};

export default ServiceCard;