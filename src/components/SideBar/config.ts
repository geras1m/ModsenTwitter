import { assets } from '@/assets';
import { routes } from '@/constants';

const {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
} = assets;

export const navBarLinksData = [
  {
    title: 'Home',
    icon: HomeIcon,
    path: routes.home,
  },
  {
    title: 'Explore',
    icon: ExploreIcon,
    path: routes.welcome,
  },
  {
    title: 'Notifications',
    icon: NotificationsIcon,
    path: routes.welcome,
  },
  {
    title: 'Messages',
    icon: MessagesIcon,
    path: routes.welcome,
  },
  {
    title: 'Bookmarks',
    icon: BookmarksIcon,
    path: routes.welcome,
  },
  {
    title: 'Lists',
    icon: ListsIcon,
    path: routes.welcome,
  },
  {
    title: 'Profile',
    icon: ProfileIcon,
    path: routes.profile,
  },
  {
    title: 'More',
    icon: MoreIcon,
    path: routes.welcome,
  },
];
