'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

const featuredImages = [
  '/images/products/strain-nxjg-4.jpg',
  '/images/products/parallel-jc-41c.jpg',
  '/images/products/ipc-grounding.jpg',
  '/images/products/helmet-abs-v.jpg'
];

export default function HomePage() {
  const { t } = useLanguage();
  const names = [
    t.products.names.strain,
    t.products.names.parallel,
    t.products.names.ipc,
    t.products.names.helmet
  ];

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <div className="eyebrow">{t.home.eyebrow}</div>
            <h1>{t.home.title}</h1>
            <p className="lead">{t.home.lead}</p>
            <p className="hero-note">{t.home.inquiryLead}</p>
            <div className="actions">
              <Link className="btn primary" href="/products">{t.buttons.products}</Link>
              <Link className="btn secondary" href="/contact">{t.buttons.contact}</Link>
            </div>
          </div>
          <div className="hero-grid" aria-label="Featured products">
            {featuredImages.map((src, index) => (
              <div className="hero-card" key={src}>
                <img src={src} alt={names[index]} />
                <strong>{names[index]}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">V1.0</div>
              <h2>{t.home.sectionTitle}</h2>
            </div>
            <p>{t.home.sectionLead}</p>
          </div>
          <div className="product-grid">
            {t.products.items.map((item) => (
              <Link className="card product-card" href={`/products#${item.id}`} key={item.id}>
                <img src={item.images[0]} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container grid-2">
          <div>
            <h2>{t.home.strengthTitle}</h2>
            <p className="lead">{t.home.strengthLead}</p>
          </div>
          <div className="card contact-panel">
            <h3>{t.companyEn}</h3>
            <p>{t.companyZh}</p>
            <div className="actions">
              <a className="btn primary" href="/catalogues/zhenyang-catalogue-en-vi.pdf">{t.buttons.catalogue}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
