import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routesMap } from '@/constants/router';

export const PublicRoutes = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <Routes>
      {routesMap.map(({ path, component: Component }) => (
        <Route
          key={path}
          path={path}
          element={<Component />}
        />
      ))}
    </Routes>
  </Suspense>
);

// добавить приватные роуты
