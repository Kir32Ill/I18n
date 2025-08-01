import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { useLocation, useNavigate } from "react-router-dom";

import {
  DEFAULT_LOCALE,
  LANG_COOKIE_NAME,
  SUPPORTED_LANGS,
  SUPPORTED_LOCALES,
  type SupportedLang,
  type SupportedLocale,
} from "@/constants";
import { geoService } from "@/lib/geo-service";

import { LocaleContext } from "./LocaleContext";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [currentLocale, setCurrentLocale] = useState<SupportedLocale>(DEFAULT_LOCALE);
  const [currentMessages, setCurrentMessages] = useState<Record<string, string>>({});

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function determineLocale() {
      const pathLocale = location.pathname.split("/")[1];

      if (SUPPORTED_LOCALES.includes(pathLocale as SupportedLocale)) {
        const lang = pathLocale.split("-")[0];
        try {
          const loadedMessages = await import(`@/locales/${lang}.json`);
          setCurrentLocale(pathLocale as SupportedLocale);
          setCurrentMessages(loadedMessages.default);
        } catch {
          setCurrentMessages({});
        }
        return;
      }

     let lang: SupportedLang = DEFAULT_LOCALE.split("-")[0] as SupportedLang;

      if (pathLocale && SUPPORTED_LANGS.includes(pathLocale as SupportedLang)) {
        lang = pathLocale as SupportedLang;
      } else {
        const cookieLang = Cookies.get(LANG_COOKIE_NAME);
        const browserLang = navigator.language.split("-")[0];

        if (cookieLang && SUPPORTED_LANGS.includes(cookieLang as SupportedLang)) {
          lang = cookieLang as SupportedLang;
        } else if (browserLang && SUPPORTED_LANGS.includes(browserLang as SupportedLang)) {
          lang = browserLang as SupportedLang;
        }
      }

      const region = geoService.getCurrentRegion(location.search, location.pathname);
      let newLocale: SupportedLocale = lang as SupportedLocale;

      if (region) {
        const possibleLocale = `${lang}-${region}`;
        if (SUPPORTED_LOCALES.includes(possibleLocale as SupportedLocale)) {
          newLocale = possibleLocale as SupportedLocale;
        }
      }

      try {
        const loadedMessages = await import(`@/locales/${lang}.json`);
        setCurrentMessages(loadedMessages.default);
      } catch {
        setCurrentMessages({});
      }

      if (newLocale !== currentLocale) {
        setCurrentLocale(newLocale);
        Cookies.set(LANG_COOKIE_NAME, lang, { expires: 365 });
      }

      if (pathLocale !== newLocale) {
        const newPath = location.pathname.replace(/^\/[^/]+/, `/${newLocale}`);
        navigate(newPath, { replace: true });
      }
    }

    determineLocale();
  }, [currentLocale, location.pathname, location.search, navigate]);

  return (
    <LocaleContext.Provider value={{ locale: currentLocale, setLocale: setCurrentLocale }}>
      <IntlProvider
        locale={currentLocale}
        messages={currentMessages}
        defaultLocale="en"
        onError={() => {}}
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}