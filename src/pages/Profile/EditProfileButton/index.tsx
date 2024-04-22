import { useEffect, useState } from 'react';

import { EditProfileForm } from '@/components/EditProfileForm';
import { EditButton } from '@/pages/Profile/EditProfileButton/styled';

export const EditProfileButton = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const handleOpenEditModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  useEffect(() => {
    document.body.style.overflow = isOpenModal ? 'hidden' : 'auto';
  }, [isOpenModal]);

  return (
    <>
      {isOpenModal && (
        <EditProfileForm
          data-testid='edit-modal'
          closeModal={handleOpenEditModal}
        />
      )}
      <EditButton
        data-testid='edit-button'
        type='button'
        onClick={handleOpenEditModal}
      >
        Edit profile
      </EditButton>
    </>
  );
};
