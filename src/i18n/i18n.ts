import i18n, { LanguageDetectorAsyncModule } from "i18next"
import { initReactI18next } from "react-i18next"
import { resources } from "../assets/locale"
import { storageKey } from "../constants/common"
import vi from '../assets/locale/vi/strings.json'
const languageDetector: LanguageDetectorAsyncModule = {
  type: "languageDetector",
  async: true,
  detect: async (callback) => {
    const languageCode = localStorage.getItem(storageKey.LANG_CODE)
    callback(languageCode || "vi")
  },
  cacheUserLanguage: (lng) => {
    localStorage.setItem(storageKey.LANG_CODE,lng)
  },
  init: () => {},
}
/**
 * Config i18n for app
 */
i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "vi",
    resources: resources,
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  })

export default i18n
type DefaultLocale = typeof vi
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}:${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`
}[keyof TObj & string]
