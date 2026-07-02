'use client';

import PageTitle from './PageTitle';
import { useLanguage } from './LanguageProvider';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageTitle title={t.about.title} subtitle={t.about.subtitle} />
      <section className="section">
        <div className="container grid-3">
          {t.about.points.map((point, index) => (
            <div className="card contact-panel" key={point}>
              <div className="eyebrow">0{index + 1}</div>
              <h3>{point}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
