Тема для моего блога на Drupal8/9.

Репозиторий на github: https://github.com/nitkevs/web_dev
Репозиторий на pakagist.org: https://packagist.org/packages/nitkevs/web_dev

Установить с помощью composer:

    В корне сайта:
    composer require nitkevs/web_dev

Для правильной работы темы предполагаются настройки:

    Схема блоков:

    В "Шапке" сайта находится только блок "Брендинг сайта".
    В "Primary menu" так же один блок - "Основная навигация".
    В "Footer third" - "Сделано на Drupal".
    В "Footer first" - блок "Основная навигация".
    В "Footer second" - блок с кастомным меню "footer second menu".
    Остальные регионы можно оставить как есть.

    Настройка блоков:

    В "Брендинг сайта".
    "Логотип сайта" и "Слоган сайта" отключены. Включено только "Название сайта".

    В "Поиск".
    Заголовок блока отключён.

    В "Основная навигация" футера и боковой панели.
    Заголовок блока отключён

    В записях блога и комментариях используется кастомный формат даты node_creation_date_format.
    Формат: j F Y - H:i

Тема так же содержит стили для модулей TagCloud, Geshi Filter и CAPTCHA:

    https://www.drupal.org/project/tagclouds
    https://www.drupal.org/project/geshifilter
    https://www.drupal.org/project/captcha
