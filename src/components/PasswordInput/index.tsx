import { memo, useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { assets } from '@/assets';
import { passwordInputTypes } from '@/components/PasswordInput/config';
import { Button, EyeImage, Input, PasswordInputWrapper } from '@/components/PasswordInput/styled';
import { ThemeValue } from '@/constants/theme/types';
import { useAppSelector } from '@/hooks/reduxHooks';

interface PasswordInputProps {
  placeholder: string;
  register: UseFormRegisterReturn;
}

const { CloseEyeIcon, CloseEyeLightIcon, OpenEyeIcon, OpenEyeLightIcon } = assets;

export const PasswordInput = memo((config: PasswordInputProps) => {
  const { placeholder, register } = config;
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { theme } = useAppSelector((state) => state.theme);

  const CloseIcon = theme === ThemeValue.dark ? CloseEyeLightIcon : CloseEyeIcon;
  const OpenIcon = theme === ThemeValue.dark ? OpenEyeLightIcon : OpenEyeIcon;

  const handleChangeVisibilityOfPassword = () => setIsShowPassword(!isShowPassword);

  return (
    <PasswordInputWrapper>
      <Input
        data-testid={`login-password-input-${placeholder.split(' ').join('-').toLowerCase()}`}
        type={isShowPassword ? passwordInputTypes.text : passwordInputTypes.password}
        placeholder={placeholder}
        {...register}
      />
      <Button
        type='button'
        onClick={handleChangeVisibilityOfPassword}
      >
        <EyeImage src={isShowPassword ? OpenIcon : CloseIcon} />
      </Button>
    </PasswordInputWrapper>
  );
});
