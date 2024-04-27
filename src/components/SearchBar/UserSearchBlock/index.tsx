import { assets } from '@/assets';
import { SearchInputPlaceholder } from '@/components/SearchBar/config';
import {
  Image,
  Input,
  InputWrapper,
  NotFoundMessage,
  SuggestionBlock,
} from '@/components/SearchBar/styled';
import { SuggestionTitle } from '@/components/SearchBar/TweetSearchBlock/styled';
import { UserCard } from '@/components/SearchBar/UserCard';
import { usersSearchPath } from '@/constants';
import { useSearchBlockLogic } from '@/hooks/useSearchBlockLogic';

const { SearchIcon } = assets;

export const UserSearchBlock = () => {
  const {
    isLoading,
    itemsList: usersList,
    searchValue,
    debouncedValue,
    handleChangeValue,
    handleOpenItemOnNewPage,
  } = useSearchBlockLogic(usersSearchPath);

  const users = usersList.map(({ uis, name, telegramLink }) => (
    <UserCard
      key={uis!}
      id={uis!}
      name={name}
      tag={telegramLink}
      handleOpenUser={handleOpenItemOnNewPage}
    />
  ));

  return (
    <>
      <InputWrapper>
        <Image src={SearchIcon} />
        <Input
          data-testid='users-search-input'
          type='text'
          placeholder={SearchInputPlaceholder}
          value={searchValue}
          onChange={handleChangeValue}
        />
      </InputWrapper>

      <SuggestionBlock>
        <SuggestionTitle>Search results</SuggestionTitle>
        {debouncedValue !== '' && !isLoading && usersList.length !== 0 && <div>{users}</div>}
        {debouncedValue !== '' && !isLoading && usersList.length === 0 && (
          <NotFoundMessage>The user was not found for your query &#128577;</NotFoundMessage>
        )}
      </SuggestionBlock>
    </>
  );
};
