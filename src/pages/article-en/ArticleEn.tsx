import { type FC } from "react";
import { FormattedMessage } from "react-intl";

import { Layout } from "@/components";

import styles from "./styles.module.css";

export const ArticleEn: FC = () => {
  return (
    <Layout>
      <main className={styles.article}>
        <h1>
          <FormattedMessage 
            id="articleEn.title"
            defaultMessage="Designing for a Global Audience: English as a Universal Language"
          />
        </h1>

        <p>
          <FormattedMessage 
            id="articleEn.text"
            defaultMessage="English is often used in interfaces as a universal language, especially at the MVP stage or when targeting international markets. We share recommendations on how to write interface texts that remain clear, neutral and easy to translate in the future."
          />
        </p>
      </main>
    </Layout>
  );
};