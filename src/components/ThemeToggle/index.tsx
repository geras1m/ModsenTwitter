import { Toggle, ToggleWrapper } from '@/components/ThemeToggle/styled';
import { ThemeType, ThemeValue } from '@/constants/theme/types';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { setTheme } from '@/store/slices/themeSlice';

export const ThemeToggle = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const handleSwitchTheme = (currentTheme: ThemeType) => {
    const themeValue = currentTheme === ThemeValue.light ? ThemeValue.dark : ThemeValue.light;
    dispatch(setTheme(themeValue));
  };

  return (
    <ToggleWrapper
      data-testid='toggle'
      onClick={() => handleSwitchTheme(theme)}
    >
      <Toggle
        data-testid='toggle-element'
        theme={theme}
      />
    </ToggleWrapper>
  );
};
