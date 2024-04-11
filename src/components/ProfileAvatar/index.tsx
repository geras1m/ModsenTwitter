import { FC } from 'react';

import { icons } from '@/assets';
import { ProfileImage } from '@/components/ProfileAvatar/styled';

const { AvatarSmall, AvatarLarge } = icons;

export const ProfileAvatar: FC<{ size: 's' | 'l' }> = ({ size }) => (
  <ProfileImage
    alt='Avater'
    src={size === 's' ? AvatarSmall : AvatarLarge}
  />
);
