import { Link } from '../atoms';

import React from 'react';

const navLinks = [
  {
    href: '/',
    label: 'Головна',
  },
  {
    href: '/about',
    label: 'Про нас',
  },
  {
    href: '/news',
    label: 'Новини',
  },
  {
    href: '/underwear',
    label: 'Білизна',
  },
  {
    href: '/homewear',
    label: 'Домашній одяг',
  },
  {
    href: '/promotions',
    label: 'Акції',
  },
];

export const FooterNavBlock: React.FC = () => {
  return (
    <nav className=" flex flex-col gap-5 text-lg font-normal">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="hover:scale-110 focus:scale-110 text-white text-lg"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
