import { createI18n } from 'vue-i18n'

import en from './en.json'
import zh from './zh.json'

const messages = {
  en: {
    ...en
  },
  zh: {
    ...zh
  },
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
