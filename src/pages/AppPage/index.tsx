import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { BackgroundLoader } from '@/components/Router/styled';
import { SearchBar } from '@/components/SearchBar';
import { SideBar } from '@/components/SideBar';
import { Spinner } from '@/components/Spinner';
import { Container } from '@/pages/AppPage/styled';

export const AppPage = () => (
  <Container>
    <SideBar />

    <Suspense
      fallback={
        <BackgroundLoader>
          <Spinner
            width='100px'
            border='10px'
          />
        </BackgroundLoader>
      }
    >
      <Outlet />
    </Suspense>
    <SearchBar />
  </Container>
);
