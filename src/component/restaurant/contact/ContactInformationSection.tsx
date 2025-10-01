import React from 'react';
import ContactInformationCard from './ContactInformationCard';

const ContactInformationSection = () => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-8">
      <header className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Liên hệ</h2>
      </header>
      <ContactInformationCard />
    </section>
  );
};

export default ContactInformationSection;