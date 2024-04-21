import { memo } from 'react';

import { assets } from '@/assets';
import { BurgerMenu } from '@/components/BurgerMenu';
import { SearchButton } from '@/components/SearchBar/SearchButton';
import { Header, Image, LinkItem, ToggleWrapper } from '@/components/SearchHeader/styled';
import { ThemeToggle } from '@/components/ThemeToggle';
import { routes } from '@/constants';

const { LeftArrowIcon } = assets;
export const SearchHeader = memo(() => (
  <Header>
    <BurgerMenu />

    <LinkItem to={routes.home}>
      <Image src={LeftArrowIcon} />
      Home
    </LinkItem>

    <ToggleWrapper>
      <SearchButton />
      <ThemeToggle />
    </ToggleWrapper>
  </Header>
));
