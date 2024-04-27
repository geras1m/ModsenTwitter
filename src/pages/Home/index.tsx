import { BurgerMenu } from '@/components/BurgerMenu';
import { CreateTweet } from '@/components/CreateTweet';
import { SearchButton } from '@/components/SearchBar/SearchButton';
import { ThemeToggle } from '@/components/ThemeToggle';
import { TweetsBlock } from '@/components/TweetsBlock';
import { homeValue } from '@/constants';
import { useAppSelector } from '@/hooks/reduxHooks';
import { HomeHeader, HomeWrapper, PageName, ToggleWrapper } from '@/pages/Home/styled';

export const Home = () => {
  const { id } = useAppSelector((state) => state.user);

  return (
    <HomeWrapper>
      <HomeHeader>
        <BurgerMenu />
        <PageName>Home</PageName>
        <ToggleWrapper>
          <SearchButton />
          <ThemeToggle />
        </ToggleWrapper>
      </HomeHeader>
      <CreateTweet />
      <TweetsBlock
        page={homeValue}
        id={id!}
      />
    </HomeWrapper>
  );
};
