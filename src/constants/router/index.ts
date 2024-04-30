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

const ProfilePage = lazy(() =>
  import('@/pages/Profile').then(({ Profile }) => ({ default: Profile })),
);

const HomePage = lazy(() => import('@/pages/Home').then(({ Home }) => ({ default: Home })));

const TweetSearchPage = lazy(() =>
  import('@/pages/TweetSearchPage').then(({ TweetSearchPage: TweetSearch }) => ({
    default: TweetSearch,
  })),
);

const UserSearchPage = lazy(() =>
  import('@/pages/UserSearchPage').then(({ UserSearchPage: UserSearch }) => ({
    default: UserSearch,
  })),
);

export const privateRouteMap = {
  path: routes.home,
  component: MainAppPage,
  routes: [
    {
      path: routes.home,
      component: HomePage,
    },
    {
      path: routes.profile,
      component: ProfilePage,
    },
    {
      path: routes.tweetsSearch,
      component: TweetSearchPage,
    },
    {
      path: routes.usersSearch,
      component: UserSearchPage,
    },
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
  {
    path: routes.tweetsSearch,
    to: routes.welcome,
  },
  {
    path: routes.usersSearch,
    to: routes.welcome,
  },
];
