import { useForm } from 'react-hook-form';

import {
  EditProfileFormWrapper,
  GenderInputWrapper,
  Input,
  Label,
  Legend,
} from '@/components/EditProfileForm/styled';
import { PasswordInput } from '@/components/PasswordInput';
import { passwordPattern } from '@/constants/validation';

export const EditProfileForm = () => {
  const { register } = useForm({ mode: 'onBlur' });

  return (
    <EditProfileFormWrapper>
      <Input
        type='text'
        placeholder='Name'
      />
      <Input
        type='text'
        placeholder='Surname'
      />
      <GenderInputWrapper>
        <Legend>What is your gender?</Legend>

        <Label htmlFor='female'>
          <Input
            id='female'
            type='radio'
            name='sex'
            value='female'
          />
          Female
        </Label>

        <Label htmlFor='male'>
          <Input
            id='male'
            type='radio'
            name='sex'
            value='male'
          />
          Male
        </Label>
      </GenderInputWrapper>

      <Input
        type='text'
        placeholder='Link to Telegram'
      />
      <PasswordInput
        placeholder='New password'
        register={{
          ...register('confirmPassword', {
            required: 'confirmPassword.required',
            pattern: {
              value: passwordPattern,
              message: 'confirmPassword.pattern',
            },
          }),
        }}
      />
    </EditProfileFormWrapper>
  );
};

// сделать форму и перейти в др ветку
