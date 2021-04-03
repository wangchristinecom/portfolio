import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="Summary">
      <div className="mb-6">
        <p>{about}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
