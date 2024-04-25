# Приложение Modsen Twitter Clone

## Использование:

- Клонируйте репозиторий;
- Установите Node.js;
- Запустите yarn install (Пакетный менеджер являеющийся альтернативой NPM)
- Установите зависимости командой:
<pre>npm install</pre>
- Запустить приложение в режиме разработки:
<pre>npm run dev</pre>
- Чтобы выполнить production сборку, выполните команду:
<pre>npm run build</pre>

## Функционал приложения:

- авторизация пользователя;
- регистрация пользователя;
- возможность создания нового tweet;
- поиск других tweets;
- валидация введенных данных;
- изменение данных пользователя;
- смена темы приложения.

## Описание экранов

1. Страница [Sign Up](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A368&t=T3Vik0PUWZKXqlCN-0)

На данной странице пользователь может ввести свое имя и номер телефона, дату рождения для того, чтобы зарегистрироваться. Все поля должны быть обязательными.
При нажатии на "Use email" пользователя переходит на страницу [авторизации](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A869&t=T3Vik0PUWZKXqlCN-0).
На этой странице пользователь может зарегистрироваться с помощью google-аккаунта или перейти на страницу [регистрации](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A350&t=T3Vik0PUWZKXqlCN-0)


2. Страница [Log In](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Twitter?node-id=1%3A350&t=V0ikbnKD4YdfNcCd-0)

На данной странице пользователь может зайти в аккаунт введя свой логин или телефон. В случае того, если аккаунта не существует, оповестить об этом пользователя.
При нажатии на "Sign up to Twitter" пользователь переходит на страницу [авторизации](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A869&t=T3Vik0PUWZKXqlCN-0).

3. Страница [Profile](https://www.figma.вom/file/KaвuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A58&t=T3Vik0PUWZKXqlCN-0)

На странице профиля отображается информация о пользователе. При нажатии на edit profile открывается модальное окно в котором можно добавить/изменить данные о пользователе:
имя, фамилия, пароль, пол, ссылка на телеграмм.
В категории "What’s happening" можно создать новый пост, также есть возможность добавить картинку, поставить лайк и удалить созданный tweet.
В категории Tweets отображаются созданные пользователем посты.
В поле ввода Search Input можно ввести название tweet и в списке должен появиться tweet, при нажатии на который он открывается в новом окне.
При нажатии на Tweet(в сайдбаре) открывается модальное окно, в котором можно также создать новый tweet(также с добавление картинки).
Также предусмотрена возможность выхода из аккаунта.

4. Страница [Feed](https://www.figma.com/file/KaCuGri1cQKxx4FMIfBZ6T/Modsen-Twitter?node-id=1%3A465&t=T3Vik0PUWZKXqlCN-0)

В шапке страницы есть возможность сменить общую тему приложения.
На странице есть возможность создать новый твит, который добавится на текущей странице и на странице самого пользователя, а также отображаются посты других пользователей.
В поиске Search Twitter происходит список пользователей Twitter(поиск должен происходить на стороне firebase и была возможность у твитов поставить лайк).

## Используемые технологии

- ***node.js*** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код);
- ***babel*** - транспайлер, преобразующий код из одного стандарта в другой;
- ***eslint*** - линтер для JavaScript кода;
- ***firebase*** - платформа для разработки приложений, предоставляет облачное хранилище, аналитику и многое другое;
- ***yarn*** - менеджер пакетов;
- ***react-hook-forms*** - библиотека для обработки элементов ввода формы;
- ***styled-components*** - система стилизации react компонентов;
- ***react*** - JavaScript-библиотека для создания пользовательских интерфейсов;
- ***typescript*** - строго типизированный язык для уменьшения количества потенциальных багов;
- ***vite*** -  сборщик модулей, который позволяет скомпилировать JavaScript-модули в единый JS-файл;
- ***cypress*** — e2e тестирование для web-приложений;
- ***jest*** — unit-тестирование.
