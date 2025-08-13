import { EmailForm } from '../atoms/EmailForm';
import { Title, Text } from '../atoms/index';

export const StayInformed = () => {
  return (
    <div className="flex flex-col w-[492px]">
      <Title
        level={3}
        style={{ color: '#ffffff', fontSize: '34px' }}
        className="font-manrope font-bold text-[32px] leading-[1.2] mb-2.5"
      >
        Залишайся в курсі
      </Title>
      <Text className="font-manrope font-medium text-[18px] leading-[1.5]  mb-4 text-white">
        Будьте першим, хто дізнається про наші спеціальні пропозиції та все, що
        стосується Velvet Secrets.
      </Text>

      <EmailForm />
    </div>
  );
};
