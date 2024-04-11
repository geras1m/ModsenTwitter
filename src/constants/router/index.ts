import { lazy } from 'react';

import { routes } from '@/constants';

const Home = lazy(() =>
  import('@/pages/SignUpPage').then(({ SignUpPage }) => ({ default: SignUpPage })),
);

const SignUp = lazy(() =>
  import('@/pages/SignUpWithFormPage').then(({ SignUpWithFormPage }) => ({
    default: SignUpWithFormPage,
  })),
);

const Login = lazy(() =>
  import('@/pages/LogInPage').then(({ LogInPage }) => ({ default: LogInPage })),
);

export const routesMap = [
  {
    path: routes.home,
    component: Home,
  },
  {
    path: routes.sign_up,
    component: SignUp,
  },
  {
    path: routes.login,
    component: Login,
  },
];
