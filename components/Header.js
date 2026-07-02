'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageProvider';

const languages = ['zh', 'en', 'vi'];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/">
          <span className="brand-mark">ZY</span>
          <span>
            {t.companyShort}
            <small>{t.companyEn}</small>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <Link href="/">{t.nav.home}</Link>
          <Link href="/about">{t.nav.about}</Link>
          <Link href="/products">{t.nav.products}</Link>
          <Link href="/certificates">{t.nav.certificates}</Link>
          <Link href="/contact">{t.nav.contact}</Link>
        </nav>
        <div className="lang-switch" aria-label="Language switcher">
          {languages.map((item) => (
            <a
              key={item}
              className={lang === item ? 'active' : ''}
              href={`${pathname}?lang=${item}`}
              onClick={() => setLang(item)}
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
