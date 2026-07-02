'use client';

import PageTitle from './PageTitle';
import { useLanguage } from './LanguageProvider';

export default function ContactPage() {
  const { t } = useLanguage();
  const rows = [
    [t.contact.company, t.companyEn],
    [t.contact.companyCn, t.companyZh],
    [t.contact.phone, t.contact.pending],
    [t.contact.email, t.contact.pending],
    [t.contact.whatsapp, t.contact.pending],
    [t.contact.address, t.contact.pending],
    [t.contact.catalogue, '/catalogues/zhenyang-catalogue-en-vi.pdf']
  ];

  return (
    <>
      <PageTitle title={t.contact.title} subtitle={t.contact.subtitle} />
      <section className="section">
        <div className="container grid-2">
          <div className="card contact-panel">
            {rows.map(([label, value]) => (
              <div className="contact-row" key={label}>
                <strong>{label}</strong>
                {value.startsWith('/') ? <a href={value}>{t.buttons.catalogue}</a> : <span>{value}</span>}
              </div>
            ))}
          </div>
          <div className="card contact-panel">
            <h2>{t.buttons.contact}</h2>
            <p>{t.contact.subtitle}</p>
            <p>{t.products.labels.details}: Please contact us for technical details.</p>
          </div>
        </div>
      </section>
    </>
  );
}
