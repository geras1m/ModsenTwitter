import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { BackgroundLoader } from '@/components/Router/styled';
import { Spinner } from '@/components/Spinner';
import { routes } from '@/constants';
import {
  privateRedirectRoutesMap,
  privateRouteMap,
  publicRedirectRoutesMap,
  publicRoutesMap,
} from '@/constants/router';
import { useAuth } from '@/hooks/useAuth';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const AppRoutes = () => {
  const { isAuth } = useAuth();

  const unAuthUserRoutes = publicRoutesMap.map(({ path, component: Component }) => (
    <Route
      key={path}
      path={path}
      element={<Component />}
    />
  ));

  const redirectPublicRoutes = publicRedirectRoutesMap.map(({ path, to }) => (
    <Route
      key={path}
      path={path}
      element={<Navigate to={to} />}
    />
  ));

  const publicRoutes = [...unAuthUserRoutes, ...redirectPublicRoutes];

  const { path: rootPath, component: Component, routes: authUserRoutesData } = privateRouteMap;

  const authUserRoutes = authUserRoutesData.map(
    ({ path: privatePath, component: PrivateComponent }) => {
      if (privatePath === routes.home)
        return (
          <Route
            index
            key={privatePath}
            element={<PrivateComponent />}
          />
        );

      return (
        <Route
          key={privatePath}
          path={privatePath}
          element={<PrivateComponent />}
        />
      );
    },
  );

  const redirectPrivateRoutes = privateRedirectRoutesMap.map(({ path, to }) => (
    <Route
      key={path}
      path={path}
      element={<Navigate to={to} />}
    />
  ));

  const privateRoutes = (
    <Route
      path={rootPath}
      element={<Component />}
    >
      {authUserRoutes}
      {redirectPrivateRoutes}
    </Route>
  );

  return (
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
      <Routes>
        {isAuth ? privateRoutes : publicRoutes}
        <Route
          path={routes.notFound}
          element={<NotFoundPage />}
        />
      </Routes>
    </Suspense>
  );
};
