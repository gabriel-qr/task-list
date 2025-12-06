import { getCalendars, getLocales } from 'expo-localization';

export const getFormattedDate = () => {
  const userTimeZone = getCalendars()[0].timeZone;
  const userLocale = getLocales()[0].languageTag;

  const now = new Date();
  return new Intl.DateTimeFormat(userLocale, {
    dateStyle: 'short',
    timeZone: userTimeZone!,
  }).format(now);
};
