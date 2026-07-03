'use client';

import PageTitle from './PageTitle';
import { useLanguage } from './LanguageProvider';

export default function ContactPage() {
  const { t } = useLanguage();
  const rows = [
    { label: t.contact.company, value: t.companyEn },
    { label: t.contact.companyCn, value: t.companyZh },
    { label: t.contact.phone, value: t.contact.phoneValue || t.contact.pending, href: `tel:${t.contact.phoneValue || ''}` },
    { label: t.contact.email, value: t.contact.emailValue || t.contact.pending, href: `mailto:${t.contact.emailValue || ''}` },
    { label: t.contact.whatsapp, value: t.contact.whatsappValue || t.contact.pending, href: t.contact.whatsappLink },
    { label: t.contact.address, value: t.contact.addressValue || t.contact.pending },
    { label: t.contact.catalogue, value: t.buttons.catalogue, href: t.cataloguePath }
  ];

  return (
    <>
      <PageTitle title={t.contact.title} subtitle={t.contact.subtitle} />
      <section className="section">
        <div className="container grid-2">
          <div className="card contact-panel">
            {rows.map((row) => (
              <div className="contact-row" key={row.label}>
                <strong>{row.label}</strong>
                {row.href ? <a href={row.href}>{row.value}</a> : <span>{row.value}</span>}
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
