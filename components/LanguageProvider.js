'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import zh from '../locales/zh.json';
import en from '../locales/en.json';
import vi from '../locales/vi.json';

const dictionaries = { zh, en, vi };
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('lang');
    const saved = window.localStorage.getItem('zhenyang-lang');
    if (fromUrl && dictionaries[fromUrl]) {
      setLang(fromUrl);
      return;
    }
    if (saved && dictionaries[saved]) {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem('zhenyang-lang', lang);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
