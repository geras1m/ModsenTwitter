import { assets } from '@/assets';
import { Header, Image, LinkItem } from '@/components/SearchHeader/styled';
import { ThemeToggle } from '@/components/ThemeToggle';

const { LeftArrowIcon } = assets;
export const SearchHeader = () => (
  <Header>
    <LinkItem to='/'>
      <Image src={LeftArrowIcon} />
      Home
    </LinkItem>
    <ThemeToggle />
  </Header>
);
