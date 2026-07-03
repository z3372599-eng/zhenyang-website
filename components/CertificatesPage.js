'use client';

import PageTitle from './PageTitle';
import { useLanguage } from './LanguageProvider';

export default function CertificatesPage() {
  const { t } = useLanguage();
  const highlights = t.certificates.highlights || [];
  const documents = t.certificates.documents || [];

  return (
    <>
      <PageTitle title={t.certificates.title} subtitle={t.certificates.subtitle} />
      <section className="section">
        <div className="container certificate-layout">
          <div className="certificate-intro">
            <div className="eyebrow">{t.certificates.kicker}</div>
            <h2>{t.certificates.heading}</h2>
            <p>{t.certificates.body}</p>
            <div className="certificate-actions">
              <a className="btn primary" href="/contact">{t.buttons.contact}</a>
              <a className="btn secondary" href="/catalogues/zhenyang-catalogue-en-vi.pdf">{t.buttons.catalogue}</a>
            </div>
          </div>
          <div className="certificate-highlights">
            {highlights.map((item, index) => (
              <div className="mini-stat" key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">{t.certificates.previewLabel}</div>
              <h2>{t.certificates.previewTitle}</h2>
            </div>
            <p>{t.certificates.previewLead}</p>
          </div>
          <div className="credential-grid certificate-preview-grid">
            {documents.map((item) => (
              <article className="credential-card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="credential-caption">
                  <div className="eyebrow">{item.kicker}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section compact-section">
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
