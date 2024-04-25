import { shortMonthNames } from '@/constants';

export const getTweetDateForTweet = () => {
  const monthIndex = new Date().getMonth();
  const monthDate = new Date().getDate();

  return `${shortMonthNames[monthIndex]} ${monthDate}`;
};
