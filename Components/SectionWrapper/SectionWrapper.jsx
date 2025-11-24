'use client';

import './SectionWrapper.css';

export const SectionWrapper = ({ children }) => (
  <section className="section">
    <div className="wrapper">{children}</div>
  </section>
);
