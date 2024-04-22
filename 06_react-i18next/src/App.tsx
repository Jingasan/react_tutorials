/**
 * React-i18next
 * Reactの多言語対応ライブラリ
 * https://react.i18next.com/
 *
 * React-i18nextは、I18nextProviderで囲んだコンポーネントツリー以下で利用できる。
 * useTranslationで読み込んだt関数にtranslation.jsonで定義したキーを指定することで、
 * 指定された言語での翻訳語を利用できる。
 */
import i18n from "./i18n";
import { I18nextProvider, useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t } = useTranslation();

  /**
   * 言語を変更する関数
   * @param lng 言語
   */
  const ChangeLng = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  /**
   * 翻訳コンポーネントボタン
   * @param props
   * @returns
   */
  interface TranslationButtonProps {
    buttonName: string; // ボタン名
    language: string; // 翻訳言語
  }
  const TranslationButton = (props: TranslationButtonProps) => {
    const { buttonName, language } = props;
    return <button onClick={() => ChangeLng(language)}>{buttonName}</button>;
  };

  return (
    // I18nextProviderで囲んだコンポーネントツリー以下でReact-i18nextを利用できる。
    <I18nextProvider i18n={i18n}>
      <TranslationButton language="ja" buttonName="日本語翻訳" />
      <TranslationButton language="en" buttonName="英語翻訳" />
      <TranslationButton language="fr" buttonName="フランス語翻訳" />
      <h2>{t("Welcome to React")}</h2>
    </I18nextProvider>
  );
};

export default App;
