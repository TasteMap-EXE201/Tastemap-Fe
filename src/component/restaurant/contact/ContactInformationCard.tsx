import React from 'react';
import ContactInfoCard from './ContactInfoCard';
import ContactPlaceholderCard from './ContactPlaceholderCard';

const ContactInformationCard = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <ContactInfoCard />
      <ContactPlaceholderCard />
    </section>
  );
};

export default ContactInformationCard;