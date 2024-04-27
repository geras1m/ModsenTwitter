import { assets } from '@/assets';
import { searchTweetPlaceholder } from '@/components/SearchBar/config';
import {
  Image,
  Input,
  InputWrapper,
  NotFoundMessage,
  SuggestionBlock,
} from '@/components/SearchBar/styled';
import { TweetCard } from '@/components/SearchBar/TweetCard';
import { SuggestionTitle } from '@/components/SearchBar/TweetSearchBlock/styled';
import { tweetsSearchPath } from '@/constants';
import { useSearchBlockLogic } from '@/hooks/useSearchBlockLogic';

const { SearchIcon } = assets;

export const TweetSearchBlock = () => {
  const {
    isLoading,
    itemsList: tweetsList,
    searchValue,
    debouncedValue,
    handleChangeValue,
    handleOpenItemOnNewPage,
  } = useSearchBlockLogic(tweetsSearchPath);

  const tweets = tweetsList.map(({ authorName, text, date, uis }) => (
    <TweetCard
      key={uis}
      authorName={authorName}
      date={date}
      text={text}
      id={uis.toString()}
      handleOpenTweet={handleOpenItemOnNewPage}
    />
  ));

  return (
    <>
      <InputWrapper>
        <Image src={SearchIcon} />
        <Input
          data-testid='tweets-search-input'
          type='text'
          placeholder={searchTweetPlaceholder}
          value={searchValue}
          onChange={handleChangeValue}
        />
      </InputWrapper>

      <SuggestionBlock data-testid='tweets-suggestion-block'>
        <SuggestionTitle>Search results</SuggestionTitle>
        {debouncedValue !== '' && !isLoading && tweetsList.length !== 0 && <div>{tweets}</div>}
        {debouncedValue !== '' && !isLoading && tweetsList.length === 0 && (
          <NotFoundMessage>The tweet was not found for your query &#128577;</NotFoundMessage>
        )}
      </SuggestionBlock>
    </>
  );
};
