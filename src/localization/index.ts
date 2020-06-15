import * as RNLocalize from 'react-native-localize';
import en from './en';
import fr from './fr';

export const AvailableLanguageCodes = ['en', 'fr'];

export const AvailableLocalizations = {
  en,
  fr,
};

export const GetLocalizedStrings = () => {
  let languageCode = RNLocalize.getLocales()[0].languageCode;
  switch (languageCode) {
    case 'en':
      return AvailableLocalizations.en;
    case 'fr':
      return AvailableLocalizations.fr;
    default:
      return AvailableLocalizations.en;
  }
};
