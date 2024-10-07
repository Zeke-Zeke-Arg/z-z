'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/config';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getOptions } from './i18n/settings.mjs';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const lng = params?.lng as string;

  useEffect(() => {
    if (lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng]);

  useEffect(() => {
    const options = getOptions(lng);
    i18n.init(options);
  }, [lng]);

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}