Тема для моего блога на Drupal8/9.

Репозиторий на github: https://github.com/nitkevs/web_dev

Установить с помощью git.

    В каталоге themes/contrib:
    git clone https://github.com/nitkevs/web_dev

Установить с помощью composer.

    Добавить репозиторий:
    {
        "type": "git",
        "url": "https://github.com/nitkevs/web_dev"
    }

    В корне сайта:
    composer require web_dev/web_dev

Для правильной работы темы предполагаются настройки:

    Схема блоков:

    В "Шапке" сайта находится только блок "Брендинг сайта".
    В "Primary menu" так же один блок - "Основная навигация".
    В "Footer third" - "Сделано на Drupal".
    В "Footer first" - блок с кастомным меню "footer menu first".
    В "Footer second" - блок с кастомным меню "footer menu second".
    Остальные регионы можно оставить как есть.

    Настройка блоков:

    В "Брендинг сайта".
    "Логотип сайта" и "Слоган сайта" отключены. Включено только "Название сайта".

    В "Поиск".
    Заголовок блока отключён.
