import { type FC, useCallback, useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

import { SUPPORTED_LOCALES, type SupportedLocale } from "@/constants";
import DoneIcon from "@/icons/done.svg";
import EarthIcon from "@/icons/earth.svg";
import { useLocale } from "@/providers/useLocale";

import { useClickOutside } from "./hooks";
import styles from "./styles.module.css";

const LANG_LABEL: Record<string, string> = {
  "ru-RU": "Русский (РФ)",
  "ru-BY": "Русский (Беларусь)",
  "ru-KZ": "Русский (Казахстан)",
  en: "English",
  ar: "العربية",
};

export const LangSelect: FC = () => {
  const { locale, setLocale } = useLocale();
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClose = useCallback(() => {
    setShowMenu(false);
  }, []);

  const handleMenuToggle = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);

  const langSelectRef = useClickOutside<HTMLDivElement>(handleMenuClose);

  const handleChange = (newLocale: SupportedLocale) => {
    const path = location.pathname;
    const newPath = path.startsWith(`/${locale}`) 
        ? path.replace(/^\/[^/]+/, `/${newLocale}`) 
        : `/${newLocale}${path}`;
    
    navigate(newPath);
    setLocale(newLocale);
  };

  return (
    <div className={styles.langSelect} ref={langSelectRef}>
      <button
        className={styles.langSelectButton}
        onClick={handleMenuToggle}
        data-testid="lang-select-button"
      >
        <span className={styles.langSelectText}>
          {LANG_LABEL[locale] || "Language"}
        </span>
        <EarthIcon />
      </button>

      {showMenu && (
        <ul className={styles.langSelectMenu} data-testid="lang-select-menu">
          {SUPPORTED_LOCALES.map((lang) => (
            <li
              key={lang}
              className={styles.langSelectMenuItem}
              onClick={() => handleChange(lang)}
            >
              <span className={styles.langSelectMenuItemText}>
                {LANG_LABEL[lang]}
              </span>
              {lang === locale && <DoneIcon />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};