import { defaultLang } from "./languages";

export const ui = {
  ru: {
    "nav.home": "Главная",
    "nav.projects": "Проекты",
    "nav.contact": "Контакты",
    "theme.toggle": "Переключить тему",
    "project.meta.year": "Год",
    "project.meta.role": "Роль",
    "project.meta.stack": "Технологии",
    "project.meta.live": "Сайт проекта",
    "project.meta.github": "Репозиторий",
    "project.back": "Назад на главную",
    "footer.rights": "Все права защищены",
    "hero.role": "Software Developer",
    "hero.scroll": "Скролл",
    "about.title": "Обо мне",
    "about.lead": "Инженерный подход, чистая архитектура и внимание к деталям.",
    "about.text":
      "Я специализируюсь на создании высокопроизводительных веб-приложений и интерфейсов с акцентом на скорость, доступность и надежность. Разрабатываю масштабируемые решения с продуманной структурой и современным стеком технологий.",
    "projects.badge": "Проекты & Опыт",
    "projects.title": "Проекты и Домены",
    "projects.description":
      "Ключевые инженерные проекты: от распределенных платежных шлюзов до систем маршрутизации флота и корпоративной аналитики.",
    "projects.viewCase": "Смотреть кейс",
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "theme.toggle": "Toggle theme",
    "project.meta.year": "Year",
    "project.meta.role": "Role",
    "project.meta.stack": "Technologies",
    "project.meta.live": "Live Preview",
    "project.meta.github": "Repository",
    "project.back": "Back to Home",
    "footer.rights": "All rights reserved",
    "hero.role": "Software Developer",
    "hero.scroll": "Scroll",
    "about.title": "About Me",
    "about.lead":
      "Engineering approach, clean architecture, and precision in every detail.",
    "about.text":
      "I specialize in building high-performance web applications and interfaces focused on speed, accessibility, and resilience. Designing scalable digital products with robust architecture and modern tech stack.",
    "projects.badge": "Projects & Experience",
    "projects.title": "Projects & Domains",
    "projects.description":
      "Key engineering milestones: from distributed payment gateways to fleet routing platforms and enterprise data analytics.",
    "projects.viewCase": "View Case Study",
  },
  pl: {
    "nav.home": "Główna",
    "nav.projects": "Projekty",
    "nav.contact": "Kontakt",
    "theme.toggle": "Zmień motyw",
    "project.meta.year": "Rok",
    "project.meta.role": "Rola",
    "project.meta.stack": "Technologie",
    "project.meta.live": "Zobacz projekt",
    "project.meta.github": "Repozytorium",
    "project.back": "Powrót do strony głównej",
    "footer.rights": "Wszelkie prawa zastrzeżone",
    "hero.role": "Software Developer",
    "hero.scroll": "Przewiń",
    "about.title": "O mnie",
    "about.lead":
      "Inżynierskie podejście, czysta architektura i dbałość o detale.",
    "about.text":
      "Specjalizuję się w tworzeniu wydajnych aplikacji i interfejsów internetowych, stawiając na szybkość, dostępność i niezawodność. Projektuję skalowalne rozwiązania oparte na solidnej architekturze i nowoczesnym stosie technologicznym.",
    "projects.badge": "Projekty & Doświadczenie",
    "projects.title": "Projekty i Domeny",
    "projects.description":
      "Kluczowe projekty inżynieryjne: od rozproszonych bramek płatniczych po systemy wyznaczania tras floty i analitykę korporacyjną.",
    "projects.viewCase": "Zobacz studium przypadku",
  },
  uk: {
    "nav.home": "Головна",
    "nav.projects": "Проєкти",
    "nav.contact": "Контакти",
    "theme.toggle": "Змінити тему",
    "project.meta.year": "Рік",
    "project.meta.role": "Роль",
    "project.meta.stack": "Технології",
    "project.meta.live": "Сайт проєкту",
    "project.meta.github": "Репозиторій",
    "project.back": "Назад на головну",
    "footer.rights": "Усі права захищені",
    "hero.role": "Software Developer",
    "hero.scroll": "Скрол",
    "about.title": "Про мене",
    "about.lead":
      "Інженерний підхід, чиста архітектура та увага до кожної деталі.",
    "about.text":
      "Спеціалізуюся на розробці високопродуктивних вебзастосунків та інтерфейсів з фокусом на швидкість, доступність і надійність. Створюю масштабовані рішення з продуманою структурою та сучасним стеком.",
    "projects.badge": "Проєкти & Досвід",
    "projects.title": "Проєкти та Домени",
    "projects.description":
      "Ключові інженерні досягнення: від розподілених платіжних шлюзів до систем маршрутизації флоту та корпоративної аналітики.",
    "projects.viewCase": "Дивитися кейс",
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
