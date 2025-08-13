import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/headerLogo/logo-dark.svg';

export const LogoFooter: React.FC = () => (
  <Link to="/" className="flex items-center">
    <Image
      src={Logo}
      alt="Logo"
      width={104}
      height={52}
      preview={false}
      style={{ width: 104, height: 52 }}
    />
  </Link>
);
