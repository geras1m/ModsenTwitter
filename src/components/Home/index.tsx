import { useCallback } from 'react';

import { CreateTweet } from '@/components/CreateTweet';
import { HomeHeader, HomeWrapper, PageName } from '@/components/Home/styled';
import { ThemeToggle } from '@/components/ThemeToggle';
import { TweetsBlock } from '@/components/TweetsBlock';
import { ThemeType, ThemeValue } from '@/constants/theme/types';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setTheme } from '@/store/slices/themeSlice';

export const Home = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const handleSwitchTheme = useCallback((currentTheme: ThemeType) => {
    const themeValue = currentTheme === ThemeValue.light ? ThemeValue.dark : ThemeValue.light;
    dispatch(setTheme(themeValue));
  }, []);

  return (
    <HomeWrapper>
      <HomeHeader>
        <PageName>Home</PageName>
        <ThemeToggle
          theme={theme}
          switchTheme={handleSwitchTheme}
        />
      </HomeHeader>
      <CreateTweet />
      <TweetsBlock page='home' />
    </HomeWrapper>
  );
};
