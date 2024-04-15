import { Outlet } from 'react-router-dom';

import { SearchBar } from '@/components/SearchBar';
import { SideBar } from '@/components/SideBar';
import { Container } from '@/pages/AppPage/styled';

export const AppPage = () => (
  <Container>
    <SideBar />
    <Outlet />
    <SearchBar />
  </Container>
);
