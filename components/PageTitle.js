'use client';

export default function PageTitle({ title, subtitle }) {
  return (
    <section className="page-title">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
