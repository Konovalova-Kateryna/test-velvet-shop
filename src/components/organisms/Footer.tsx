import { footerImg } from '../../assets/icons';
import { LogoFooter } from '../atoms/index';
import { FooterNavBlock } from '../molecules/FooterNavBlock';
import { FooterInfoBlock } from '../molecules/FooterInfo';
import { StayInformed } from '../molecules/StayInformed';
import { Socials } from '../molecules/Socials';

const Footer: React.FC = () => {
  return (
    <footer className="text-grey8">
      <picture className="absolute w-full h-full z-0 ">
        <img
          src={footerImg}
          alt="Footer Background"
          className="w-full h-[512px] object-cover"
        />
      </picture>
      <div className="w-full  max-w-[1268px] rounded-[20px] mx-auto px-[26px] py-[30px] flex flex-col backdrop-blur-2xl">
        <div className=" w-full mx-auto flex items-center justify-center gap-[60px] mb-3">
          <hr className="flex-1 border-[0.5px] border-grey8" />

          <LogoFooter />
          <hr className="flex-1 border-[0.5px] border-grey8" />
        </div>
        <div className="px-[18px] py-10 flex justify-between items-start gap-10">
          <StayInformed />
          <FooterNavBlock />
          <FooterInfoBlock />
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
