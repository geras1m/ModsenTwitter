import { ChangeEvent, memo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FirebaseError } from 'firebase/app';

import { assets } from '@/assets';
import {
  errorMessages,
  inputName,
  maxValueLength,
  notificationMessage,
  placeholderTextarea,
} from '@/components/CreateTweet/config';
import {
  AddTweetButton,
  ClearAttachedFileButton,
  ControlButtonsWrapper,
  CreateTweetWrapper,
  Image,
  LimitNotificationMessage,
  Notification,
  Textarea,
  TweetForm,
  UploadImageInput,
  UploadImageLabel,
  UploadWrapper,
} from '@/components/CreateTweet/styled';
import { ProfileAvatar } from '@/components/ProfileAvatar';
import { ErrorMessage } from '@/components/SignUpForm/styled';
import { Spinner } from '@/components/Spinner';
import { defaultErrorMessage, successMessage } from '@/constants';
import { useToast } from '@/context/toastContext';
import { useAppSelector } from '@/hooks/reduxHooks';
import { FirebaseService } from '@/service';
import { AvatarSizes, ErrorsMessages, ToastType } from '@/types';
import { getTweetDateForTweet } from '@/utils/getTweetDateForTweet';

type CreateTweetFormDataType = {
  textarea: string;
};

const bytesInMb = 1048576;

export const CreateTweet = memo(() => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<null | File>(null);
  const [isUploadFile, setIsUploadFile] = useState<boolean>(false);
  const { id: userId, name: authorName, telegramLink } = useAppSelector((state) => state.user);
  const [isShowLimitNotification, setIsShowLimitNotification] = useState<boolean>(false);
  const toast = useToast();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
    clearErrors,
    setValue,
  } = useForm<CreateTweetFormDataType>({ mode: 'onBlur' });

  const { UploadImageIcon } = assets;

  const handleCreateTweet: SubmitHandler<CreateTweetFormDataType> = async (data) => {
    const { textarea } = data;

    if (textarea.length === 0) {
      setError(inputName, { message: errorMessages.textarea });
    }

    setIsLoading(true);

    try {
      const id = Date.now();
      const date = getTweetDateForTweet();

      const savedImageUrl = selectedImage
        ? await FirebaseService.AddImageToStorage(id, selectedImage)
        : null;

      await FirebaseService.CreateNewTweetInDB({
        id,
        authorName,
        authorId: userId!,
        text: textarea!,
        imgLink: savedImageUrl,
        authorTag: telegramLink,
        date,
      });
      toast?.open(successMessage, ToastType.success);
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast?.open(ErrorsMessages.unexpectedError, ToastType.error);
      } else {
        console.error(error);
      }
    }

    reset();
    setIsUploadFile(false);
    setSelectedImage(null);
    setIsLoading(false);
  };

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (2 * bytesInMb < file.size) {
        setError(inputName, { message: errorMessages.maxWeightOfFile });
        return;
      }
      clearErrors();
      setIsUploadFile(true);
      setSelectedImage(file);
    }
  };

  const handleRemoveAttachedFile = () => {
    setIsUploadFile(false);
    setSelectedImage(null);
  };

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.length > maxValueLength) {
      setError(inputName, { message: errorMessages.symbolLimit });
      setValue(inputName, value.slice(0, maxValueLength));
      return;
    }
    clearErrors();
  };

  return (
    <CreateTweetWrapper>
      <ProfileAvatar size={AvatarSizes.small} />
      <TweetForm onSubmit={handleSubmit(handleCreateTweet)}>
        <ErrorMessage>
          {errors?.textarea && (errors?.textarea?.message?.toString() || defaultErrorMessage)}
        </ErrorMessage>

        <Textarea
          data-testid='tweet-textarea-input'
          placeholder={placeholderTextarea}
          {...register(inputName, {
            maxLength: { value: maxValueLength, message: errorMessages.symbolLimit },
            onChange: handleChangeInputValue,
          })}
          onBlur={() => setIsShowLimitNotification(false)}
          onFocus={() => setIsShowLimitNotification(true)}
        />
        <ControlButtonsWrapper>
          <UploadWrapper>
            <UploadImageInput
              data-testid='tweet-image-input'
              id='file'
              type='file'
              accept='image/jpeg'
              onChange={handleUploadFile}
            />
            <UploadImageLabel htmlFor='file'>
              <Image src={UploadImageIcon} />
            </UploadImageLabel>
            {isUploadFile && (
              <Notification>
                File is attached!{' '}
                <ClearAttachedFileButton
                  type='button'
                  onClick={handleRemoveAttachedFile}
                />
              </Notification>
            )}
          </UploadWrapper>

          {isShowLimitNotification && !isUploadFile && (
            <LimitNotificationMessage>{notificationMessage}</LimitNotificationMessage>
          )}

          <AddTweetButton
            data-testid='tweet-create-button'
            disabled={isLoading}
          >
            {isLoading ? (
              <Spinner
                width='20px'
                border='5px'
              />
            ) : (
              'Tweet'
            )}
          </AddTweetButton>
        </ControlButtonsWrapper>
      </TweetForm>
    </CreateTweetWrapper>
  );
});
