import { type FC } from "react";
import { FormattedMessage } from "react-intl";

import { Layout } from "@/components";
import { useLocale } from "@/providers/useLocale";

import styles from "./styles.module.css";

export const ArticleI18nKz: FC = () => {
  const { locale } = useLocale();

  return (
    <Layout>
      <main 
        className={styles.article}
        dir={locale.startsWith('ar') ? 'rtl' : 'ltr'}
      >
        <h1>
          <FormattedMessage 
            id="articleI18nKz.title"
            defaultMessage="Russian and Kazakh: Effective Localization for Kazakhstan"
          />
        </h1>

        <p>
          <FormattedMessage 
            id="articleI18nKz.text"
            defaultMessage="Kazakhstan is a unique market where two languages are used simultaneously: Russian and Kazakh. Moreover, Kazakh can be written in both Cyrillic and Latin scripts. We explain how to properly support both languages, including date formats, translations, and language switching in the interface."
          />
        </p>
      </main>
    </Layout>
  );
};