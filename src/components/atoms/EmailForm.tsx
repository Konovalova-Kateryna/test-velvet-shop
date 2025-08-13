import React from 'react';
import { Button, ConfigProvider, Form, Input } from 'antd';

export const EmailForm: React.FC = () => {
  const onSubmit = (values: { email: string }) => {
    console.log('Email submitted:', values.email);
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#c31f5c',
          borderRadius: 4,
          fontFamily: 'Manrope',
        },
      }}
    >
      <Form
        name="emailForm"
        layout="vertical"
        onFinish={onSubmit}
        className="w-full max-w-sm bg-transparent custom-form flex flex-col gap-8"
      >
        <Form.Item
          label="Електронна пошта"
          name="email"
          required={false}
          rules={[
            { required: true, message: 'Введіть електронну пошту' },
            { type: 'email', message: 'Невірний формат електронної пошти' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="custom-button-hero text-xl w-[194px] h-[60px] px-10 py-5"
          >
            Відправити
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};
