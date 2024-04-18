import { CreateTweet } from '@/components/CreateTweet';
import { ThemeToggle } from '@/components/ThemeToggle';
import { TweetsBlock } from '@/components/TweetsBlock';
import { useAppSelector } from '@/hooks/reduxHooks';
import { HomeHeader, HomeWrapper, PageName } from '@/pages/Home/styled';

export const Home = () => {
  const { id } = useAppSelector((state) => state.user);

  return (
    <HomeWrapper>
      <HomeHeader>
        <PageName>Home</PageName>
        <ThemeToggle />
      </HomeHeader>
      <CreateTweet />
      <TweetsBlock
        page='home'
        id={id!}
      />
    </HomeWrapper>
  );
};
