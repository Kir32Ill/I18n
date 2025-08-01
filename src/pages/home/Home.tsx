import { type FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";

import articleAr from "@/assets/article-ar.jpg";
import articleCss from "@/assets/article-css.jpg";
import articleEn from "@/assets/article-en.jpg";
import articleI18nKz from "@/assets/article-i18n-kz.jpg";
import articleL10nRu from "@/assets/article-l10n-ru.jpg";
import articleRtlIcons from "@/assets/article-rtl-icons.jpg";
import articleUiBy from "@/assets/article-ui-by.jpg";
import { Layout } from "@/components";
import { CONFERENCE_DATE } from "@/constants";
import { useLocale } from "@/providers/useLocale";

import styles from "./styles.module.css";

const ARTICLES = [
    {
        id: "rtl-icons",
        imageUrl: articleRtlIcons,
    },
    {
        id: "css",
        imageUrl: articleCss,
    }
];
function getTranslationKey(id: string) {
  return id.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}
type RegionArticle = {
    id: string;
    imageUrl: string;
};

const getRegionArticleByLocale = (locale: string): RegionArticle => {
    const lang = locale.split('-')[0];
    const region = locale.split('-')[1];
    
    if (lang === 'ru' && region) {
        switch (region) {
            case 'RU': return { id: 'l10nRu', imageUrl: articleL10nRu };
            case 'BY': return { id: 'uiBy', imageUrl: articleUiBy };
            case 'KZ': return { id: 'i18nKz', imageUrl: articleI18nKz };
        }
    }
    
    switch (lang) {
        case 'ar': return { id: 'ar', imageUrl: articleAr };
        default: return { id: 'en', imageUrl: articleEn };
    }
};
function formatArticleId(id: string): string {
  return id.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
export const Home: FC = () => {
    const { locale } = useLocale();
    const intl = useIntl();
    const regionArticle = getRegionArticleByLocale(locale);
    const articleId = formatArticleId(regionArticle.id);
    
    return (
        <Layout>
            <main className={styles.content}>
                <section className={styles.hero}>
                    <h1 className={styles.heroTitle}>
                        <FormattedMessage 
                            id="homePage.hero.title" 
                            defaultMessage="Connecting digital worlds in all languages" 
                        />
                    </h1>

                    <div className={styles.heroDetails}>
                        <span className={styles.heroDetailsItem}>
                            <FormattedMessage 
                                id="homePage.hero.conference" 
                                defaultMessage="I&L Conference {year}"
                                values={{ year: 2025 }}
                            />
                        </span>

                        <span className={styles.heroDetailsItem}>
                            {intl.formatDate(new Date(CONFERENCE_DATE), {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>

                        <span className={styles.heroDetailsItem}>
                            <FormattedMessage 
                                id="homePage.hero.location" 
                                defaultMessage="Moscow, Russia" 
                            />
                        </span>

                        <span className={styles.heroDetailsItem}>
                            <FormattedMessage 
                                id="homePage.hero.price" 
                                defaultMessage="{price} ticket"
                                values={{ price: intl.formatNumber(35000, { 
                                    style: 'currency', 
                                    currency: 'RUB',
                                    minimumFractionDigits: 2
                                }) }}
                            />
                        </span>
                    </div>

                    <a className={styles.heroRegister} href="">
                        <FormattedMessage 
                            id="homePage.hero.register" 
                            defaultMessage="Register" 
                        />
                    </a>
                </section>

                <section className={styles.regionArticle}>
                    <h2 className={styles.regionArticleTitle}>
                        <FormattedMessage 
                            id="homePage.regionArticle.title" 
                            defaultMessage="Relevant for your region" 
                        />
                    </h2>

                    <Link className={styles.articleCard} to={`article/${articleId}`}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>
                                <FormattedMessage 
                                    id={`homePage.${regionArticle.id}Article.title`}
                                    defaultMessage={
                                        regionArticle.id === 'l10nRu' 
                                            ? "How to adapt a web application for Russian users" 
                                            : regionArticle.id === 'uiBy' 
                                            ? "Bilingual interface for Belarus"
                                            : regionArticle.id === 'i18nKz' 
                                            ? "Localization for Kazakhstan"
                                            : regionArticle.id === 'ar' 
                                            ? "Localization for Arabic world"
                                            : "Designing for global audience"}
                                />
                            </h3>
                            <p className={styles.cardDescription}>
                                <FormattedMessage 
                                    id={`homePage.${regionArticle.id}Article.description`}
                                    defaultMessage={
                                        regionArticle.id === 'l10nRu' 
                                            ? "Russian localization specifics" 
                                            : regionArticle.id === 'uiBy' 
                                            ? "Supporting two languages in one product"
                                            : regionArticle.id === 'i18nKz' 
                                            ? "Kazakh and Russian language support"
                                            : regionArticle.id === 'ar' 
                                            ? "RTL and cultural adaptation"
                                            : "English as universal language"}
                                />
                            </p>
                            <span className={styles.cardRead}>
                                <FormattedMessage 
                                    id="homePage.article.read" 
                                    defaultMessage="Read" 
                                />
                            </span>
                        </div>
                        <img 
                            className={styles.cardImage} 
                            src={regionArticle.imageUrl} 
                            alt={regionArticle.id} 
                        />
                    </Link>
                </section>

                <section className={styles.articles}>
                    <h2 className={styles.articlesTitle}>
                        <FormattedMessage 
                            id="homePage.articles.title" 
                            defaultMessage="Articles" 
                        />
                    </h2>

                    {ARTICLES.length > 0 && (
                        <p className={styles.articlesDescription}>
                            <FormattedMessage 
                                id="homePage.articles.description" 
                                defaultMessage="{count, plural, one {# article} other {# articles}}"
                                values={{ count: ARTICLES.length }}
                            />
                        </p>
                    )}

                    <div className={styles.articlesList}>
                        {ARTICLES.map(({ id, imageUrl }) => (
                            <Link
                                key={id}
                                className={styles.articleCard}
                                to={`article/${id}`}
                            >
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>
                                        <FormattedMessage 
                                            id={`article${getTranslationKey(id)}.title`}
                                            defaultMessage={
                                                id === 'rtl-icons' 
                                                    ? "RTL icons adaptation" 
                                                    : "Logical CSS properties"}
                                        />
                                    </h3>
                                    <p className={styles.cardDescription}>
                                        <FormattedMessage 
                                            id={`article${getTranslationKey(id)}.intro`}
                                            defaultMessage={
                                                id === 'rtl-icons' 
                                                    ? "Handling icons for RTL languages" 
                                                    : "CSS for international interfaces"}
                                        />
                                    </p>
                                    <span className={styles.cardRead}>
                                        <FormattedMessage 
                                            id="homePage.article.read" 
                                            defaultMessage="Read" 
                                        />
                                    </span>
                                </div>
                                <img 
                                    className={styles.cardImage} 
                                    src={imageUrl} 
                                    alt={id} 
                                />
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </Layout>
    );
};