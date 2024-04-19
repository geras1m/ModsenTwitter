import { memo } from 'react';

import { assets } from '@/assets';
import { Header, Image, LinkItem } from '@/components/SearchHeader/styled';
import { ThemeToggle } from '@/components/ThemeToggle';
import { routes } from '@/constants';

const { LeftArrowIcon } = assets;
export const SearchHeader = memo(() => (
  <Header>
    <LinkItem to={routes.home}>
      <Image src={LeftArrowIcon} />
      Home
    </LinkItem>
    <ThemeToggle />
  </Header>
));
