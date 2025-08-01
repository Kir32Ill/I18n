import { BrowserRouter, Navigate,Route, Routes } from 'react-router-dom';

import {
  ArticleAr,
  ArticleCss,
  ArticleEn,
  ArticleI18nKz,
  ArticleL10nRu,
  ArticleRtlIcons,
  ArticleUiBy
} from '@/pages';
import { Home } from '@/pages/home';
import { LocaleProvider } from '@/providers/LocaleProvider';

export default function App() {
  return (
    <BrowserRouter>
      <LocaleProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/ru-RU" replace />} />
        
          <Route path="/:locale" element={<Home />} />
          
          <Route path="/:locale/article/ar" element={<ArticleAr />} />
          <Route path="/:locale/article/css" element={<ArticleCss />} />
          <Route path="/:locale/article/en" element={<ArticleEn />} />
          <Route path="/:locale/article/i18n-kz" element={<ArticleI18nKz />} />
          <Route path="/:locale/article/l10n-ru" element={<ArticleL10nRu />} />
          <Route path="/:locale/article/rtl-icons" element={<ArticleRtlIcons />} />
          <Route path="/:locale/article/ui-by" element={<ArticleUiBy />} />
          
          <Route path="*" element={<Navigate to="/ru" replace />} />
        </Routes>
      </LocaleProvider>
    </BrowserRouter>
  );
}