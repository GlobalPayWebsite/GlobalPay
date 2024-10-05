// components/Section.tsx
import React from 'react';

type SectionProps = {
  id: string;
  title: string;
  content: string[];
};

const Section = ({ id, title, content }: SectionProps) => {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  );
};

export default Section;
