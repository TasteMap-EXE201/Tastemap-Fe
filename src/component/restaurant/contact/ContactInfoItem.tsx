import React from 'react';
import { ContactInfoItem } from './contactInfo.items';

const iconStyles = {
  wrapper: 'flex items-start gap-4',
  iconContainer: 'w-10 h-10 flex items-center justify-center rounded-full',
  textContainer: 'space-y-1',
  title: 'text-sm font-semibold text-gray-900',
  description: 'text-sm text-gray-600',
  detail: 'text-sm text-gray-600'
};

const iconMap: Record<ContactInfoItem['id'], { background: string; color: string; icon: React.ReactNode }> = {
  address: {
    background: 'bg-sky-100',
    color: 'text-sky-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.25c-3.729 0-6.75 3.021-6.75 6.75 0 4.119 4.275 8.76 5.978 10.463.441.441 1.153.441 1.594 0C14.475 17.76 18.75 13.119 18.75 9c0-3.729-3.021-6.75-6.75-6.75zm0 9.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      </svg>
    )
  },
  phone: {
    background: 'bg-green-100',
    color: 'text-green-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.194a1.125 1.125 0 0 0-.852-1.09l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a.75.75 0 0 1-.933.237 12.035 12.035 0 0 1-5.344-5.344.75.75 0 0 1 .237-.933l1.293-.97a1.125 1.125 0 0 0 .417-1.173L6.284 3.102A1.125 1.125 0 0 0 5.194 2.25H3.75A1.5 1.5 0 0 0 2.25 3.75v3z" />
      </svg>
    )
  },
  email: {
    background: 'bg-purple-100',
    color: 'text-purple-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21.75 6.75-9.3 5.812a1.125 1.125 0 0 1-1.2 0L2.25 6.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.125a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75" />
      </svg>
    )
  },
  hours: {
    background: 'bg-orange-100',
    color: 'text-orange-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    )
  },
  website: {
    background: 'bg-pink-100',
    color: 'text-pink-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c3.866 0 7 3.134 7 7 0 5.25-7 11-7 11s-7-5.75-7-11c0-3.866 3.134-7 7-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 10.5h3M12 9l1.5 1.5L12 12" />
      </svg>
    )
  }
};

const ContactInfoItemRow = ({ item }: { item: ContactInfoItem }) => {
  const iconConfig = iconMap[item.id];

  return (
    <div className={iconStyles.wrapper}>
      <span className={`${iconStyles.iconContainer} ${iconConfig.background}`}>
        <span className={`${iconConfig.color}`}>
          {iconConfig.icon}
        </span>
      </span>
      <div className={iconStyles.textContainer}>
        <p className={iconStyles.title}>{item.title}</p>
        {item.href && item.description ? (
          <a
            href={item.href}
            className="text-sm font-medium text-gray-800 hover:text-sky-600 transition-colors"
            target={item.id === 'website' ? '_blank' : undefined}
            rel={item.id === 'website' ? 'noopener noreferrer' : undefined}
          >
            {item.description}
          </a>
        ) : null}
        {!item.href && item.description ? (
          <p className={iconStyles.description}>{item.description}</p>
        ) : null}
        {item.details?.map((detail) => (
          <p key={detail} className={iconStyles.detail}>
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoItemRow;