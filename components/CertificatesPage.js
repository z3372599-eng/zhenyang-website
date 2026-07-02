'use client';

import PageTitle from './PageTitle';
import { useLanguage } from './LanguageProvider';

export default function CertificatesPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageTitle title={t.certificates.title} subtitle={t.certificates.subtitle} />
      <section className="section">
        <div className="container cert-list">
          {t.certificates.items.map((item, index) => (
            <div className="card contact-panel" key={item}>
              <div className="eyebrow">CERT 0{index + 1}</div>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
