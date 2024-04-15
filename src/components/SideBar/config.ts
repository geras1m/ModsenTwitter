import { assets } from '@/assets';

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
    path: '/',
  },
  {
    title: 'Explore',
    icon: ExploreIcon,
    path: '1',
  },
  {
    title: 'Notifications',
    icon: NotificationsIcon,
    path: '2',
  },
  {
    title: 'Messages',
    icon: MessagesIcon,
    path: '3',
  },
  {
    title: 'Bookmarks',
    icon: BookmarksIcon,
    path: '4',
  },
  {
    title: 'Lists',
    icon: ListsIcon,
    path: '5',
  },
  {
    title: 'Profile',
    icon: ProfileIcon,
    path: '/profile',
  },
  {
    title: 'More',
    icon: MoreIcon,
    path: '6',
  },
];
