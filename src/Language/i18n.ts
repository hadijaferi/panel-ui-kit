import path from "path";
import NextI18Next from "next-i18next";

const NextI18NextInstance = new NextI18Next({
  defaultNS: "common",
  defaultLanguage: "fa",
  otherLanguages: [],
  serverLanguageDetection: false,
  browserLanguageDetection: false,
  debug: false,
  lng: "fa",
  localePath: path.resolve("./public/Languages"),
});

export const {
  appWithTranslation,
  useTranslation,
  withTranslation,
} = NextI18NextInstance;

export const translator = NextI18NextInstance.i18n;

export default NextI18NextInstance;
