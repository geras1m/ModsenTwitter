import { FC } from 'react';

import { assets } from '@/assets';
import { ProfileImage } from '@/components/ProfileAvatar/styled';
import { AvatarSizes, AvatarSizeType } from '@/types';

const { AvatarSmall, AvatarLarge } = assets;

export const ProfileAvatar: FC<{ size: AvatarSizeType }> = ({ size }) => (
  <ProfileImage
    alt='Avater'
    src={size === AvatarSizes.small ? AvatarSmall : AvatarLarge}
  />
);
