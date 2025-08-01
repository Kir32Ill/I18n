import { type FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { Layout } from "@/components";
import { useLocale } from "@/providers/useLocale";

import styles from "./styles.module.css";

export const ArticleL10nRu: FC = () => {
  const { locale } = useLocale();
  const { formatNumber, formatDate } = useIntl();

  const textParams = {
    usersCount: formatNumber(98_000_000),
    percent: formatNumber(0.78, { style: 'percent' }),
    date: formatDate(new Date(2015, 8, 1), { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  };

  return (
    <Layout>
      <main className={styles.article} dir={locale.startsWith('ar') ? 'rtl' : 'ltr'}>
        <h1>
          <FormattedMessage 
            id="articleL10nRu.title"
            defaultMessage="How to adapt a web application for Russian users: localization nuances"
          />
        </h1>

        <p>
          <FormattedMessage 
            id="articleL10nRu.text1"
            // eslint-disable-next-line formatjs/enforce-placeholders
            defaultMessage="The Russian audience is one of the largest in Eastern Europe, with more than {usersCount} internet users. About {percent} prefer sites in Russian. When localizing, it's important to consider number formats (e.g., decimal separator is a comma), currencies and dates."
            values={textParams}
          />
        </p>

        <p>
          <FormattedMessage 
            id="articleL10nRu.text2"
            // eslint-disable-next-line formatjs/enforce-placeholders
            defaultMessage="Legal aspects should also be considered: the personal data law requires information to be stored on servers within the country. Many companies have complied with this requirement since {date}."
            values={textParams}
          />
        </p>

      </main>
    </Layout>
  );
};