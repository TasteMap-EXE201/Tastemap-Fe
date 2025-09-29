import React from 'react';
import ContactInfoCard from '@/component/restaurant/contact/ContactInfoCard';
import ContactPlaceholderCard from '@/component/restaurant/contact/ContactPlaceholderCard';

const contact = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ContactInfoCard />
      <ContactPlaceholderCard />
    </section>
  );
};

export default contact;