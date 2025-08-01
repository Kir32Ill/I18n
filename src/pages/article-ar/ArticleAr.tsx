import { type FC } from "react";
import { FormattedMessage } from "react-intl";

import { Layout } from "@/components";
import { useLocale } from "@/providers/useLocale";

import styles from "./styles.module.css";

export const ArticleAr: FC = () => {
  const { locale } = useLocale();

  return (
    <Layout>
      <main 
        className={styles.article} 
        dir={locale.startsWith('ar') ? 'rtl' : 'ltr'}
        lang={locale.split('-')[0]} 
      >
        <h1>
          <FormattedMessage 
            id="articleAr.title"
            defaultMessage="Localization for the Arabic-speaking world: RTL, formats and cultural codes"
          />
        </h1>

        <p>
          <FormattedMessage 
            id="articleAr.text"
            defaultMessage="Arabic interfaces require rethinking the usual element order: the writing direction changes to RTL. In this article, we explain how to properly adapt layout, typography and icons so that the interface looks natural for Arabic-speaking users while remaining universal."
          />
        </p>

      </main>
    </Layout>
  );
};