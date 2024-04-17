import { ChangeEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { assets } from '@/assets';
import {
  AddTweetButton,
  ControlButtonsWrapper,
  CreateTweetWrapper,
  Image,
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
import { defaultErrorMessage } from '@/constants';
import { useAppSelector } from '@/hooks/reduxHooks';
import { FirebaseService } from '@/service';
import { getTweetDateForTweet } from '@/utils/getTweetDateForTweet';

type CreateTweetFormDataType = {
  textarea: string;
};

const bytesInMb = 1048576;

export const CreateTweet = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<null | File>(null);
  const [isUploadFile, setIsUploadFile] = useState<boolean>(false);
  const { id: userId, name: authorName, telegramLink } = useAppSelector((state) => state.user);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
    clearErrors,
  } = useForm<CreateTweetFormDataType>({ mode: 'onBlur' });

  const { UploadImageIcon } = assets;

  const handleCreateTweet: SubmitHandler<CreateTweetFormDataType> = async (data) => {
    const { textarea } = data;

    if (textarea.length === 0) {
      setError('textarea', { message: 'Please, add some text!' });
      return;
    }

    setIsLoading(true);

    try {
      const id = Date.now();
      const date = getTweetDateForTweet();

      const savedImageUrl = selectedImage
        ? await FirebaseService.AddImageToStorage(id, selectedImage)
        : null;

      await FirebaseService.CreateNewTweetInDB(
        id,
        textarea,
        savedImageUrl,
        date,
        userId,
        authorName,
        telegramLink,
      );
    } catch (error) {
      console.log(error);
    }

    reset();
    setIsUploadFile(false);
    setSelectedImage(null);
    setIsLoading(false);
  };

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      if (2 * bytesInMb < e.target.files[0].size) {
        setError('textarea', { message: 'Overweight, maximum size of image is 2MB' });
        return;
      }
      clearErrors();
      setIsUploadFile(true);
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <CreateTweetWrapper>
      <ProfileAvatar size='s' />
      <TweetForm onSubmit={handleSubmit(handleCreateTweet)}>
        {errors?.textarea && (
          <ErrorMessage>
            {errors?.textarea?.message?.toString() || defaultErrorMessage}
          </ErrorMessage>
        )}
        <Textarea
          placeholder='What’s happening'
          {...register('textarea', {
            maxLength: { value: 200, message: 'The maximum number of symbols is 200' },
          })}
        />
        <ControlButtonsWrapper>
          <UploadWrapper>
            <UploadImageInput
              id='file'
              type='file'
              accept='image/jpeg'
              onChange={handleUploadFile}
            />
            <UploadImageLabel htmlFor='file'>
              <Image src={UploadImageIcon} />
            </UploadImageLabel>
            {isUploadFile && <Notification>File is attached!</Notification>}
          </UploadWrapper>
          <AddTweetButton disabled={isLoading}>
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
};
