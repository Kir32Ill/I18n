import { createContext, useContext } from "react";

import { DEFAULT_LOCALE, type SupportedLocale } from "@/constants";

export type LocaleContextType = {
    locale: SupportedLocale;
    setLocale: (locale: SupportedLocale) => void;
};

export const LocaleContext = createContext<LocaleContextType>({
    locale: DEFAULT_LOCALE,
    setLocale: () => {},
});

export function useLocale() {
    return useContext(LocaleContext);
}