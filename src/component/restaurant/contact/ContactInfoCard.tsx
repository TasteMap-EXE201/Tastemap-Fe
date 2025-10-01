import React from 'react';
import ContactInfoList from './ContactInfoList';

const ContactInfoCard = () => {
  return (
    <section className="bg-white rounded-lg p-8">
      <header className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Thông tin liên hệ</h2>
      </header>
      <ContactInfoList />
    </section>
  );
};

export default ContactInfoCard;