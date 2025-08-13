import { Link, Title } from '../atoms';

import React from 'react';

const informLinks = [
  {
    href: '/delivery',
    label: 'Доставка та оплата',
  },
  {
    href: '/payment',
    label: 'Обмін та повернення',
  },
  {
    href: '/size-guide',
    label: 'Підбір розміру',
  },
  {
    href: '/blog',
    label: 'Блог',
  },
];

export const FooterInfoBlock: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 text-lg font-normal">
      <Title
        level={4}
        style={{ color: '#ffffff', fontSize: '18px', marginBottom: 0 }}
      >
        Клієнтам
      </Title>
      {informLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="hover:scale-110 focus:scale-110 text-white text-lg"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};
