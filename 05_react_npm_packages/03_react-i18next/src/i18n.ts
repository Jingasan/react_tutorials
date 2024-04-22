import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translation from "./translation.json"; // 各言語の翻訳ファイル

/**
 * i18nextの初期化
 */
i18n.use(initReactI18next).init({
  resources: translation,
  lng: "ja", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
