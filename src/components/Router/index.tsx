import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
  privateRedirectRoutesMap,
  privateRouteMap,
  publicRedirectRoutesMap,
  publicRoutesMap,
} from '@/constants/router';
import { useAuth } from '@/hooks/useAuth';

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
    ({ path: privatePath, component: PrivateComponent }) => (
      <Route
        index
        key={privatePath}
        path={privatePath}
        element={<PrivateComponent />}
      />
    ),
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
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {isAuth ? privateRoutes : publicRoutes}
        {/* <Route path={routes.notFound}>{<NotFoundPage />}</Route> */}
      </Routes>
    </Suspense>
  );
};
