import React from 'react';
import ContactInfoItemRow from './ContactInfoItem';
import { contactInfoItems } from './contactInfo.items';

const ContactInfoList = () => {
  return (
    <div className="space-y-4">
      {contactInfoItems.map((item) => (
        <ContactInfoItemRow key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContactInfoList;