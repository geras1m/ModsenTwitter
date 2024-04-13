import { FC } from 'react';

import { assets } from '@/assets';
import { ProfileImage } from '@/components/ProfileAvatar/styled';

const { AvatarSmall, AvatarLarge } = assets;

export const ProfileAvatar: FC<{ size: 's' | 'l' }> = ({ size }) => (
  <ProfileImage
    alt='Avater'
    src={size === 's' ? AvatarSmall : AvatarLarge}
  />
);
