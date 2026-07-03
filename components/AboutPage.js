'use client';

import PageTitle from './PageTitle';
import { useLanguage } from './LanguageProvider';

export default function AboutPage() {
  const { t } = useLanguage();
  const credentials = t.about.credentials || [];

  return (
    <>
      <PageTitle title={t.about.title} subtitle={t.about.subtitle} />
      <section className="section">
        <div className="container about-layout">
          <div className="about-copy">
            <div className="eyebrow">{t.about.profileLabel}</div>
            <h2>{t.about.profileTitle}</h2>
            <p>{t.about.profileBody}</p>
          </div>
          <div className="about-facts">
          {t.about.points.map((point, index) => (
              <div className="fact-item" key={point}>
              <div className="eyebrow">0{index + 1}</div>
              <h3>{point}</h3>
            </div>
          ))}
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">{t.about.credentialsLabel}</div>
              <h2>{t.about.credentialsTitle}</h2>
            </div>
            <p>{t.about.credentialsLead}</p>
          </div>
          <div className="credential-grid">
            {credentials.map((item) => (
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
    </>
  );
}
