import { memo, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import CloseEye from '@/assets/icons/close-eye.svg';
import OpenEye from '@/assets/icons/open-eye.svg';
import { Button, EyeImage, Input, PasswordInputWrapper } from '@/components/PasswordInput/styled';

interface PasswordInputProps {
  placeholder: string;
  register: UseFormRegisterReturn;
}

export const PasswordInput = memo((config: PasswordInputProps) => {
  const { placeholder, register } = config;
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleChangeVisibilityOfPassword = () => setIsShowPassword(!isShowPassword);

  return (
    <PasswordInputWrapper>
      <Input
        type={isShowPassword ? 'text' : 'password'}
        placeholder={placeholder}
        {...register}
      />
      <Button
        type='button'
        onClick={handleChangeVisibilityOfPassword}
      >
        <EyeImage src={isShowPassword ? CloseEye : OpenEye} />
      </Button>
    </PasswordInputWrapper>
  );
});
