export const daysAgo = (date: Date): number => {
  const nowInMilliseconds: number = new Date().getTime();
  const dateInMilliseconds: number = date.getTime();
  const millisecondsSinceDate = nowInMilliseconds - dateInMilliseconds;
  const secondsSinceDate = millisecondsSinceDate / 1000;
  const daysSinceDate = secondsSinceDate / 60 / 60 / 24;
  return Math.floor(daysSinceDate);
};
