import { assets } from '@/assets';
import { routes } from '@/constants';

const {
  HomeIcon,
  HomeLightIcon,
  ExploreIcon,
  ExploreLightIcon,
  NotificationsIcon,
  NotificationsLightIcon,
  MessagesIcon,
  MessagesLightIcon,
  BookmarksIcon,
  BookmarksLightIcon,
  ListsIcon,
  ListsLightIcon,
  ProfileIcon,
  ProfileLightIcon,
  MoreIcon,
  MoreLightIcon,
} = assets;

export const noName = 'No name';

export const noTelegram = 'No telegram';

export const navBarLinksData = [
  {
    title: 'Home',
    icon: HomeIcon,
    iconLight: HomeLightIcon,
    path: routes.home,
  },
  {
    title: 'Explore',
    icon: ExploreIcon,
    iconLight: ExploreLightIcon,
    path: routes.notFound,
  },
  {
    title: 'Notifications',
    icon: NotificationsIcon,
    iconLight: NotificationsLightIcon,
    path: routes.notFound,
  },
  {
    title: 'Messages',
    icon: MessagesIcon,
    iconLight: MessagesLightIcon,
    path: routes.notFound,
  },
  {
    title: 'Bookmarks',
    icon: BookmarksIcon,
    iconLight: BookmarksLightIcon,
    path: routes.notFound,
  },
  {
    title: 'Lists',
    icon: ListsIcon,
    iconLight: ListsLightIcon,
    path: routes.notFound,
  },
  {
    title: 'Profile',
    icon: ProfileIcon,
    iconLight: ProfileLightIcon,
    path: routes.profile,
  },
  {
    title: 'More',
    icon: MoreIcon,
    iconLight: MoreLightIcon,
    path: routes.notFound,
  },
];
