import { FC, useState } from 'react';

import { assets } from '@/assets';
import { Image, MenuButton, RemoveButton } from '@/components/TweetItem/RemoveTweetButton/styled';

const { EllipsisIcon } = assets;

interface IRemoveTweetButtonProps {
  tweetId: string;
  handleRemoveTweet: (tweetId: string) => void;
}

export const RemoveTweetButton: FC<IRemoveTweetButtonProps> = ({ handleRemoveTweet, tweetId }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <MenuButton
      type='button'
      onClick={() => setIsOpen(!isOpen)}
    >
      <Image src={EllipsisIcon} />

      {isOpen && (
        <RemoveButton
          type='button'
          onClick={() => handleRemoveTweet(tweetId)}
        >
          Remove
        </RemoveButton>
      )}
    </MenuButton>
  );
};
