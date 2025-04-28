import React from 'react';
import Header from '../header/header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function App() {
  return (

    <body class="page">
      <main class="main center">
        <Header />
        <Main />
        <Footer />
      </main>
      <PopupWithForm name='editProfile'
        title='Редактировать профиль'
      >
        <input id="nameProfile" name="name" className={'popup__input popup__field-text popup-name'} minlength="2"
          maxlength="40" required></input>
        <span className={'nameProfile-error popup__field-text-error'}></span>
        <input id="descriptionProfile" name="about" className={'popup__input popup__field-text popup-description'}
          minlength="2" maxlength="200" required></input>
        <span className={'descriptionProfile-error popup__field-text-error'}></span>
        <button className={'popup__button active-element'}>Сохранить</button>
      </PopupWithForm>


      <section class="popup popup-editProfile">
        <div class="popup__container">
          <button class="button button_close active-element"></button>
          <h2 class="popup__header">Редактировать профиль</h2>
          <form name="editProfile" class="popup__form" novalidate>
            <input id="nameProfile" name="name" class="popup__input popup__field-text popup-name" minlength="2"
              maxlength="40" required></input>
            <span class="nameProfile-error popup__field-text-error"></span>
            <input id="descriptionProfile" name="about" class="popup__input popup__field-text popup-description"
              minlength="2" maxlength="200" required></input>
            <span class="descriptionProfile-error popup__field-text-error"></span>
            <button class="popup__button active-element">Сохранить</button>
          </form>
        </div>
      </section>
      <section class="popup popup-createCard">
        <div class="popup__container">
          <button class="button button_close active-element"></button>
          <h2 class="popup__header">Новое место</h2>
          <form name="addCard" class="popup__form" novalidate>
            <input id="addCard" name="name" class="popup__input popup__field-text popup-name" placeholder="Название"
              minlength="2" maxlength="30" required></input>
            <span class="addCard-error popup__field-text-error"></span>
            <input id="urlCard" name="link" class="popup__input popup__field-text popup-description"
              placeholder="Введите url" type="url"></input>
            <span class="urlCard-error popup__field-text-error"></span>
            <button class="popup__button active-element">Создать</button>
          </form>
        </div>
      </section>
      <section class="popup popup-img">
        <div class="popup-img__container">
          <button class="button button_close active-element"></button>
          <img class="popup-img__image" src="" alt="" />
          <h3 class="popup-img__text"></h3>
        </div>
      </section>

      <section class="popup popup-accept">
        <div class="popup__container">
          <button class="button button_close active-element"></button>
          <h2 class="popup__header">Вы уверены?</h2>
          <div class="popup-accept__block">
            <button class="popup__button active-element popup__button_accept popup__button_accept_accept">Да</button>
            <button class="popup__button active-element popup__button_accept popup__button_accept_cancel">Нет</button>
          </div>
        </div>
      </section>
      <section class="popup popup-updateAvatar">
        <div class="popup__container">
          <button class="button button_close active-element"></button>
          <h2 class="popup__header">Обновить аватар</h2>
          <form name="updateAvatar" class="popup__form" novalidate>
            <input id="urlAvatar" name="link" class="popup__input popup__field-text popup-link" placeholder="Введите url"
              pattern="https?://.+" type="url" required></input>
            <span class="urlAvatar-error popup__field-text-error"></span>
            <button class="popup__button active-element">Сохранить</button>
          </form>
        </div>
      </section>

      <template id="card">
        <li class="card">
          <div class="trash active-element"></div>
          <img class="card__img" src="" alt="" />
          <div class="card__info">
            <h2 class="card__name"></h2>
            <div class="like__block">
              <div class="like active-element"></div>
              <div class="like__sum"></div>
            </div>
          </div>
        </li>
      </template>
    </body>


  );
}

export default App;
