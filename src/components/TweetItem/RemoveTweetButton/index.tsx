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
import { useOutsideClick } from '@/hooks/useOutClick';
import { changeDocumentBodyOverflow } from '@/utils/changeDocumentBodyOverflow';

const { EllipsisIcon } = assets;

interface IRemoveTweetButtonProps {
  tweetId: string;
  handleRemoveTweet: (tweetId: string) => void;
}

export const RemoveTweetButton: FC<IRemoveTweetButtonProps> = ({ handleRemoveTweet, tweetId }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState<boolean>(false);

  const handleCloseConfirmModal = () => {
    setIsOpenConfirmModal(false);
  };

  const outsideRef = useOutsideClick(handleCloseConfirmModal);

  useEffect(() => {
    changeDocumentBodyOverflow(isOpenConfirmModal);
  }, [isOpenConfirmModal]);

  const handleRemove = () => {
    handleRemoveTweet(tweetId);
    setIsOpenConfirmModal(false);
  };

  return (
    <>
      <MenuButton
        data-testid='remove-tweet-menu-button'
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={EllipsisIcon} />

        {isOpen && (
          <RemoveButton
            data-testid='remove-tweet-button'
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
            <ConfirmModal ref={outsideRef}>
              <WarningText>Are you sure you want to delete the tweet?</WarningText>
              <ConfirmRemoveButton
                data-testid='remove-confirm-tweet-remove-button'
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
