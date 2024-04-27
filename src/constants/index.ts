export const routes = {
  home: '/',
  profile: '/profile',
  tweetsSearch: 'tweets-search/:id',
  usersSearch: 'users-search/:id',
  welcome: '/welcome',
  sign_up: '/sign-up',
  login: '/login',
  notFound: '/*',
} as const;

export const usersSearchPath = 'users-search';
export const tweetsSearchPath = 'tweets-search';

export const successMessage = 'Success!';

export const defaultErrorMessage = 'Error!';

export const footerLinks = [
  'About',
  'Help Center',
  'Terms of Service',
  'Privacy Policy',
  'Cookie Policy',
  'Ads info',
  'Blog',
  'Status',
  'Carres',
  'Brand Resources',
  'Advertsing',
  'Marketing',
  'Twitter for Business',
  'Developers',
  'Directory',
  'Settings',
  '© 2024 Twitter, Inc.',
];

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const shortMonthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
