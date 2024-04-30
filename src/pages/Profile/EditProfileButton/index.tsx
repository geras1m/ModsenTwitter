import { useState } from 'react';

import { EditProfileForm } from '@/components/EditProfileForm';
import { useChangeDocumentBodyOverflow } from '@/hooks/useChangeDocumentBodyOverflow';
import { EditButton } from '@/pages/Profile/EditProfileButton/styled';

export const EditProfileButton = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  useChangeDocumentBodyOverflow(isOpenModal);

  const handleOpenEditModal = () => {
    setIsOpenModal(!isOpenModal);
  };

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
