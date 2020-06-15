import * as RNLocalize from 'react-native-localize';
import en from './en';

export const AvailableLanguageCodes = ['en'];

export const AvailableLocalizations = {
  en,
};

export const GetLocalizedStrings = () => {
  let languageCode = RNLocalize.getLocales()[0].languageCode;
  switch (languageCode) {
    case 'en':
      return AvailableLocalizations.en;

    default:
      return AvailableLocalizations.en;
  }
};
