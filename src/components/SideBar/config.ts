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
    path: routes.notFound,
  },
  {
    title: 'Notifications',
    icon: NotificationsIcon,
    path: routes.notFound,
  },
  {
    title: 'Messages',
    icon: MessagesIcon,
    path: routes.notFound,
  },
  {
    title: 'Bookmarks',
    icon: BookmarksIcon,
    path: routes.notFound,
  },
  {
    title: 'Lists',
    icon: ListsIcon,
    path: routes.notFound,
  },
  {
    title: 'Profile',
    icon: ProfileIcon,
    path: routes.profile,
  },
  {
    title: 'More',
    icon: MoreIcon,
    path: routes.notFound,
  },
];
