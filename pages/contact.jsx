import React from 'react';
import Contact from '../components/Contact';
import Hero from '../components/Hero';

const contact = () => {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Send me a message through this form and let's connect !"
      />
      <Contact />
    </div>
  );
};

export default contact;
