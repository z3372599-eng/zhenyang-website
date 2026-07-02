'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>{t.companyEn}</h3>
          <p>{t.footerIntro}</p>
        </div>
        <div>
          <h3>{t.nav.products}</h3>
          <p><Link href="/products">{t.products.names.strain}</Link></p>
          <p><Link href="/products">{t.products.names.parallel}</Link></p>
          <p><Link href="/products">{t.products.names.ipc}</Link></p>
        </div>
        <div>
          <h3>{t.nav.contact}</h3>
          <p>{t.contact.phone}: {t.contact.pending}</p>
          <p>{t.contact.email}: {t.contact.pending}</p>
          <p>{t.contact.whatsapp}: {t.contact.pending}</p>
        </div>
      </div>
    </footer>
  );
}
