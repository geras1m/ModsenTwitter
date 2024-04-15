import { lazy } from 'react';

import { routes } from '@/constants';

const WelcomePage = lazy(() =>
  import('@/pages/WelcomePage').then(({ SignUpPage }) => ({ default: SignUpPage })),
);

const SignUp = lazy(() =>
  import('@/pages/SignUpWithFormPage').then(({ SignUpWithFormPage }) => ({
    default: SignUpWithFormPage,
  })),
);

const Login = lazy(() =>
  import('@/pages/LogInPage').then(({ LogInPage }) => ({ default: LogInPage })),
);

const MainAppPage = lazy(() =>
  import('@/pages/AppPage').then(({ AppPage }) => ({ default: AppPage })),
);

const MainProfile = lazy(() =>
  import('@/components/Profile').then(({ Profile }) => ({ default: Profile })),
);

// const Feed = lazy(() => import('@/components/Feed').then(({ Feed }) => ({ default: Feed })));

export const privateRouteMap = {
  path: routes.home,
  component: MainAppPage,
  routes: [
    {
      path: routes.profile,
      component: MainProfile,
    },
    // {
    //   path: routes.feed,
    //   component: Feed,
    // },
  ],
};

export const privateRedirectRoutesMap = [
  {
    path: routes.welcome,
    to: routes.profile,
  },
  {
    path: routes.sign_up,
    to: routes.profile,
  },
  {
    path: routes.login,
    to: routes.profile,
  },
];

export const publicRoutesMap = [
  {
    path: routes.welcome,
    component: WelcomePage,
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

export const publicRedirectRoutesMap = [
  {
    path: routes.profile,
    to: routes.welcome,
  },
  {
    path: routes.home,
    to: routes.welcome,
  },
];
