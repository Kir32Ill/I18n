import { type FC, type PropsWithChildren,useEffect } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";

import { BRAND_NAMES } from "@/constants";
import { BrandLogoIcon, TelegramIcon, VkontakteIcon } from "@/icons";
import { useLocale } from "@/providers/useLocale";

import { LangSelect } from "../lang-select";
import styles from "./styles.module.css";
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { locale } = useLocale();
    const intl = useIntl();
    
      useEffect(() => {
        // eslint-disable-next-line formatjs/enforce-default-message
        const brandName = intl.formatMessage({ id: "layout.header.brandName" });
        document.title = `${brandName}`;
      }, [intl]);
      useEffect(() => {
    const html = document.documentElement;
    const baseLang = locale.split("-")[0];
    const dir = baseLang === "ar" ? "rtl" : "ltr";

    html.setAttribute("lang", baseLang);
    html.setAttribute("dir", dir);
  }, [locale]);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link className={styles.headerBrand} to={`/${locale}/`}>
            <BrandLogoIcon />
            <span className={styles.headerBrandText}>{BRAND_NAMES[locale]}</span>
          </Link>
          <LangSelect />
        </div>
      </header>

      <div className={styles.contentContainer}>{children}</div>

      <footer className={styles.footer}>
  <div className={styles.footerSocialLinks} data-testid="social-icons">
    {[TelegramIcon, VkontakteIcon].map((Icon, index) => (
      <a key={index} href="">
        <Icon />
      </a>
    ))}
  </div>

  <span className={styles.footerText}>
    <FormattedMessage
      id="layout.footer.copyright"
      defaultMessage="© {yearStart}-{yearEnd}, LLC «<link>{brand}</link>». All rights reserved"
      values={{
        yearStart: 2024,
        yearEnd: 2025,
        link: (chunks) => <a className={styles.textLink} href="">{chunks}</a>,
        brand: BRAND_NAMES[locale],
      }}
    />
  </span>
</footer>
    </>
  );
};