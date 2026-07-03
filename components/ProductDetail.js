'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export default function ProductDetail({ product }) {
  const { t } = useLanguage();
  const labels = t.products.labels;

  return (
    <article className="card product-detail" id={product.id}>
      <div>
        <img src={product.images[0]} alt={product.name} />
        {product.images.length > 1 && (
          <div className="gallery">
            {product.images.slice(1).map((src) => (
              <img key={src} src={src} alt={product.name} />
            ))}
          </div>
        )}
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>{product.summary}</p>
        <div className="spec-list">
          <div className="spec"><strong>{labels.features}</strong><span>{product.features}</span></div>
          <div className="spec"><strong>{labels.material}</strong><span>{product.material}</span></div>
          <div className="spec"><strong>{labels.application}</strong><span>{product.application}</span></div>
          <div className="spec"><strong>{labels.packing}</strong><span>{product.packing}</span></div>
          <div className="spec"><strong>{labels.customers}</strong><span>{product.customers}</span></div>
          <div className="spec"><strong>{labels.details}</strong><span>{product.details}</span></div>
        </div>
        <div className="actions">
          <Link className="btn primary" href="/contact">{t.buttons.contact}</Link>
          <a className="btn secondary" href="/catalogues/zhenyang-catalogue-en-vi.pdf">{t.buttons.catalogue}</a>
        </div>
      </div>
    </article>
  );
}
