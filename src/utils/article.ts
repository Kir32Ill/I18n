type RegionArticle = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

export const getRegionArticleByLocale = (locale: string): RegionArticle => {
  const lang = locale.split("-")[0];
  const region = locale.split("-")[1];

  if (lang === "ru") {
    switch (region) {
      case "BY":
        return {
          id: "uiBy",
          title: "Двухъязычный интерфейс для Беларуси",
          description: "Создание интерфейса для Беларуси — это вызов двуязычия...",
          imageUrl: "/article-ui-by.jpg",
        };
      case "KZ":
        return {
          id: "i18nKz",
          title: "Русский и казахский: эффективная локализация для Казахстана",
          description: "Казахстан — уникальный рынок, где используются сразу два языка...",
          imageUrl: "/article-i18n-kz.jpg",
        };
      case "RU":
      default:
        return {
          id: "l10nRu",
          title: "Как адаптировать веб-приложение под российских пользователей",
          description: "Изучаем предпочтения русскоязычных пользователей...",
          imageUrl: "/article-l10n-ru.jpg",
        };
    }
  }

  switch (locale) {
    case "ar":
      return {
        id: "ar",
        title: "التوطين للعالم الناطق بالعربية",
        description: "Изучаем, как адаптировать интерфейс под направление письма справа налево...",
        imageUrl: "/article-ar.jpg",
      };
    default:
      return {
        id: "en",
        title: "Проектирование для глобальной аудитории",
        description: "Почему английский часто используется как язык по умолчанию...",
        imageUrl: "/article-en.jpg",
      };
  }
};