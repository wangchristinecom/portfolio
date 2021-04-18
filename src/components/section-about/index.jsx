import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  if (!about.length) return null;

  return (
    <Section title="About Me">
      <div className="mb-6">
        <p>{about.p1}</p>
        <p>{about.p2}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;




