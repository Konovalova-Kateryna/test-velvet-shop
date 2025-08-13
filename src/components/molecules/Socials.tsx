import { Link, Title } from '../atoms';
import React from 'react';
import FacebookIcon from '../../assets/icons/footerIcons/facebook.svg';
import InstagramIcon from '../../assets/icons/footerIcons/instagram.svg';
import YoutubeIcon from '../../assets/icons/footerIcons/youtube.svg';
import TiktokIcon from '../../assets/icons/footerIcons/tiktok.svg';

const socialItems = [
  {
    icon: FacebookIcon,
    link: '',
  },
  {
    icon: InstagramIcon,
    link: '',
  },
  {
    icon: YoutubeIcon,
    link: '',
  },
  {
    icon: TiktokIcon,
    link: '',
  },
];
export const Socials: React.FC = () => {
  return (
    <div>
      <Title
        level={4}
        style={{ color: '#ffffff', fontSize: '18px', marginBottom: '21px' }}
      >
        Слідкуй за нами
      </Title>

      <div className="flex gap-2">
        {socialItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className=" rounded-[50%] bg-black w-10 h-10 flex items-center justify-center hover:bg-pink5"
          >
            <img src={item.icon} alt="Social Icon" className="w-6 h-6" />
          </Link>
        ))}
      </div>
    </div>
  );
};
