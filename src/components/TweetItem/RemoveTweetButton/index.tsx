import { FC, useEffect, useState } from 'react';

import { assets } from '@/assets';
import { Portal } from '@/components/Portal';
import {
  BackgroundModal,
  CloseModalButton,
  ConfirmModal,
  ConfirmRemoveButton,
  Image,
  MenuButton,
  RemoveButton,
  WarningText,
} from '@/components/TweetItem/RemoveTweetButton/styled';

const { EllipsisIcon } = assets;

interface IRemoveTweetButtonProps {
  tweetId: string;
  handleRemoveTweet: (tweetId: string) => void;
}

export const RemoveTweetButton: FC<IRemoveTweetButtonProps> = ({ handleRemoveTweet, tweetId }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isOpenConfirmModal ? 'hidden' : 'auto';
  }, [isOpenConfirmModal]);

  const handleRemove = () => {
    handleRemoveTweet(tweetId);
    setIsOpenConfirmModal(false);
  };

  const handleCloseConfirmModal = () => {
    setIsOpenConfirmModal(false);
  };

  return (
    <>
      <MenuButton
        type='button'
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={EllipsisIcon} />

        {isOpen && (
          <RemoveButton
            type='button'
            onClick={() => setIsOpenConfirmModal(!isOpenConfirmModal)}
          >
            Remove
          </RemoveButton>
        )}
      </MenuButton>

      {isOpenConfirmModal && (
        <Portal>
          <BackgroundModal>
            <ConfirmModal>
              <WarningText>Are you sure you want to delete the tweet?</WarningText>
              <ConfirmRemoveButton
                type='button'
                onClick={handleRemove}
              >
                Yes, I&apos;m sure!
              </ConfirmRemoveButton>
              <CloseModalButton
                type='button'
                onClick={handleCloseConfirmModal}
              />
            </ConfirmModal>
          </BackgroundModal>
        </Portal>
      )}
    </>
  );
};
