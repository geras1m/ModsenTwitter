import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  editFormInputsTextData,
  maxNameInputLength,
  minNameInputLength,
} from '@/components/EditProfileForm/config';
import {
  Background,
  Button,
  CloseButton,
  EditForm,
  EditProfileFormWrapper,
  GenderInputWrapper,
  Input,
  Label,
  Legend,
} from '@/components/EditProfileForm/styled';
import { PasswordInput } from '@/components/PasswordInput';
import { Portal } from '@/components/Portal';
import { ErrorMessage } from '@/components/SignUpForm/styled';
import { Spinner } from '@/components/Spinner';
import { defaultErrorMessage, successMessage, usersValue } from '@/constants';
import { namePattern, passwordPattern, telegramNicknamePattern } from '@/constants/validation';
import { useToast } from '@/context/toastContext';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { useOutsideClick } from '@/hooks/useOutClick';
import { useSetToastError } from '@/hooks/useSetToastError';
import { FirebaseService } from '@/service';
import { setUser } from '@/store/slices/userSlice';
import { ToastType } from '@/types';

interface IEditProfileFormProps {
  closeModal: () => void;
}

interface EditProfileFormDataType {
  name?: string;
  surname?: string;
  gender?: string;
  currentPassword?: string;
  newPassword?: string;
  telegramLink?: string;
}

export const EditProfileForm = ({ closeModal }: IEditProfileFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast();
  const dispatch = useAppDispatch();
  const { id, email, isGoogleAuth } = useAppSelector((state) => state.user);
  const outsideRef = useOutsideClick(closeModal);
  const { setToastError } = useSetToastError();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<EditProfileFormDataType>({ mode: 'onBlur' });

  const handleSubmitUpdatedUserData: SubmitHandler<EditProfileFormDataType> = async (data) => {
    setIsLoading(true);

    const { name, surname, gender, telegramLink, currentPassword, newPassword } = data;

    try {
      await FirebaseService.ChangeUserData({
        id: id!,
        email,
        name,
        surname,
        gender,
        telegramLink,
        currentPassword,
        newPassword,
      });

      const updatedUserData = await FirebaseService.GetDataItemFromDB(id!, usersValue);
      if (updatedUserData)
        await FirebaseService.UpdateUserDataInTweets(
          id!,
          updatedUserData.name,
          updatedUserData.telegramLink,
        );

      if (updatedUserData)
        dispatch(
          setUser({
            id: updatedUserData.uis,
            isGoogleAuth: updatedUserData.isGoogleAuth,
            telegramLink: updatedUserData.telegramLink,
            name: updatedUserData.name,
            surname: updatedUserData.surname,
            gender: updatedUserData.gender,
            phone: updatedUserData.phone,
            email: updatedUserData.email,
          }),
        );

      toast?.open(successMessage, ToastType.success);
    } catch (error) {
      setToastError(error);
    }

    setIsLoading(false);
    reset();
  };

  const { name, surname, telegramLink, currentPassword, newPassword, female, male } =
    editFormInputsTextData;

  return (
    <Portal>
      <Background>
        <EditProfileFormWrapper
          data-testid='edit-form'
          ref={outsideRef}
        >
          <EditForm onSubmit={handleSubmit(handleSubmitUpdatedUserData)}>
            <CloseButton
              type='button'
              onClick={closeModal}
            />

            <ErrorMessage>
              {errors?.name && (errors?.name?.message?.toString() || defaultErrorMessage)}
            </ErrorMessage>
            <Input
              data-testid='profile-input-name'
              type={name.type}
              placeholder={name.placeholder}
              {...register(name.name, {
                minLength: { value: minNameInputLength, message: name.minLength },
                maxLength: {
                  value: maxNameInputLength,
                  message: name.maxLength,
                },
                pattern: {
                  value: namePattern,
                  message: name.pattern,
                },
              })}
            />

            <ErrorMessage>
              {errors?.surname && (errors?.surname?.message?.toString() || defaultErrorMessage)}
            </ErrorMessage>
            <Input
              data-testid='profile-input-surname'
              type={surname.type}
              placeholder={surname.placeholder}
              {...register(surname.name, {
                minLength: { value: minNameInputLength, message: surname.minLength },
                maxLength: {
                  value: maxNameInputLength,
                  message: surname.maxLength,
                },
                pattern: {
                  value: namePattern,
                  message: surname.pattern,
                },
              })}
            />
            <GenderInputWrapper>
              <Legend>What is your gender?</Legend>

              <Label htmlFor={female}>
                <Input
                  id={female}
                  type='radio'
                  value={female}
                  {...register('gender')}
                />
                Female
              </Label>

              <Label htmlFor={male}>
                <Input
                  id={male}
                  type='radio'
                  value={male}
                  {...register('gender')}
                />
                Male
              </Label>
            </GenderInputWrapper>

            <ErrorMessage>
              {errors?.telegramLink &&
                (errors?.telegramLink?.message?.toString() || defaultErrorMessage)}
            </ErrorMessage>

            <Input
              data-testid='profile-input-telegram'
              type={telegramLink.type}
              placeholder={telegramLink.placeholder}
              {...register(telegramLink.name, {
                minLength: { value: minNameInputLength, message: telegramLink.minLength },
                maxLength: {
                  value: maxNameInputLength,
                  message: telegramLink.maxLength,
                },
                pattern: {
                  value: telegramNicknamePattern,
                  message: telegramLink.pattern,
                },
              })}
            />

            <ErrorMessage>
              {errors?.currentPassword &&
                (errors?.currentPassword?.message?.toString() || defaultErrorMessage)}
            </ErrorMessage>
            {!isGoogleAuth && (
              <PasswordInput
                placeholder={currentPassword.placeholder}
                register={{
                  ...register(currentPassword.name, {
                    pattern: {
                      value: passwordPattern,
                      message: currentPassword.pattern,
                    },
                  }),
                }}
              />
            )}

            <ErrorMessage>
              {errors?.newPassword &&
                (errors?.newPassword?.message?.toString() || defaultErrorMessage)}
            </ErrorMessage>
            {!isGoogleAuth && (
              <PasswordInput
                placeholder={newPassword.placeholder}
                register={{
                  ...register(newPassword.name, {
                    pattern: {
                      value: passwordPattern,
                      message: newPassword.pattern,
                    },
                  }),
                }}
              />
            )}

            <Button
              data-testid='profile-edit-button'
              disabled={isLoading}
              type='submit'
            >
              {isLoading ? (
                <Spinner
                  width='20px'
                  border='5px'
                />
              ) : (
                'Save'
              )}
            </Button>
          </EditForm>
        </EditProfileFormWrapper>
      </Background>
    </Portal>
  );
};
