import { type FC } from "react";
import { FormattedMessage } from "react-intl";

import { Layout } from "@/components";
import { useLocale } from "@/providers/useLocale";

import styles from "./styles.module.css";

export const ArticleUiBy: FC = () => {
  const { locale } = useLocale();

  return (
    <Layout>
      <main className={styles.article} dir={locale.startsWith('ar') ? 'rtl' : 'ltr'}>
        <h1>
          <FormattedMessage 
            id="articleUiBy.title"
            defaultMessage="Bilingual Interface: Combining Russian and Belarusian in One Product"
          />
        </h1>
        <p>
          <FormattedMessage 
            id="articleUiBy.text"
            defaultMessage="Creating an interface for Belarus is a bilingual challenge. The product should be understandable for both Russian-speaking and Belarusian-speaking users. We examine how to organize the translation structure, what UX solutions exist for language switching, and why it's important to pay attention to the authenticity of Belarusian content."
          />
        </p>

      </main>
    </Layout>
  );
};