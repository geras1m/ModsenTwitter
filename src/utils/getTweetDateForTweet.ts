export const getTweetDateForTweet = () => {
  const monthIndex = new Date().getMonth();
  const monthDate = new Date().getDate();
  const monthNames = [
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
  return `${monthNames[monthIndex]} ${monthDate}`;
};
