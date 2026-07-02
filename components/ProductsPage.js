'use client';

import PageTitle from './PageTitle';
import ProductDetail from './ProductDetail';
import { useLanguage } from './LanguageProvider';

export default function ProductsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageTitle title={t.products.title} subtitle={t.products.subtitle} />
      <section className="section">
        <div className="container">
          {t.products.items.map((product) => (
            <ProductDetail key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
