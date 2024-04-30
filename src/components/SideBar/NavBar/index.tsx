import { memo } from 'react';

import { navBarLinksData } from '@/components/SideBar/config';
import { LinksImg, LinksItem, LinksList, SideBarNav } from '@/components/SideBar/NavBar/styled';
import { ThemeValue } from '@/constants/theme/types';
import { useAppSelector } from '@/hooks/reduxHooks';

export const NavBar = memo(() => {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <SideBarNav>
      <LinksList>
        {navBarLinksData.map(({ title, icon, iconLight, path }) => (
          <LinksItem
            to={path}
            key={title}
          >
            <LinksImg src={theme === ThemeValue.light ? icon : iconLight} /> {title}
          </LinksItem>
        ))}
      </LinksList>
    </SideBarNav>
  );
});
