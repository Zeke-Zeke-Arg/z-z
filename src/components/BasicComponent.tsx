import React from 'react';
import { useTranslation } from 'react-i18next';

const BasicComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-blue-800 mb-2">{t('This is a basic component')}</h2>
      <p className="text-blue-600">
        {t('This component demonstrates Tailwind CSS styling and i18n integration.')}
      </p>
    </div>
  );
};

export default BasicComponent;