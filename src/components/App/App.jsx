import React from 'react';
import Header from '../header/header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import PopupImg from '../PopupImg/PopupImg';

function App() {
  debugger;
  return (

    <div className="page">
      <main className="main center">
        <Header />
        <Main />
        <Footer />
      </main>
      <PopupWithForm
        name='editProfile'
        title='Редактировать профиль'
      >
        <input id='nameProfile' name='name' className={'popup__input popup__field-text popup-name'} minLength='2'
          maxLength='40' required placeholder="Имя" />
        <span className={'nameProfile-error popup__field-text-error'}></span>
        <input id='descriptionProfile' name='about' className={'popup__input popup__field-text popup-description'}
          minLength='2' maxLength='200' required placeholder="Описание" />
        <span className={'descriptionProfile-error popup__field-text-error'}></span>
        <button className={'popup__button active-element'}>Сохранить</button>
      </PopupWithForm>

      <PopupWithForm
        name={'createCard'}
        title={'Новое место'}
      >
        <input id="addCard" name="name" class="popup__input popup__field-text popup-name" placeholder="Название"
          minlength="2" maxlength="30" required></input>
        <span class="addCard-error popup__field-text-error"></span>
        <input id="urlCard" name="link" class="popup__input popup__field-text popup-description"
          placeholder="Введите url" type="url"></input>
        <span class="urlCard-error popup__field-text-error"></span>
        <button class="popup__button active-element">Создать</button>
      </PopupWithForm>

      <PopupWithForm
        name={'accept'}
        title={'Вы уверены?'}
      >
        <div class="popup-accept__block">
          <button class="popup__button active-element popup__button_accept popup__button_accept_accept">Да</button>
          <button class="popup__button active-element popup__button_accept popup__button_accept_cancel">Нет</button>
        </div>
      </PopupWithForm>

      <PopupWithForm
        name={'updateAvatar'}
        title={'Обновить аватар'}
      >
        <input id="urlAvatar" name="link" class="popup__input popup__field-text popup-link" placeholder="Введите url"
          pattern="https?://.+" type="url" required></input>
        <span class="urlAvatar-error popup__field-text-error"></span>
        <button class="popup__button active-element">Сохранить</button>
      </PopupWithForm>

      <PopupImg />

    </div>


  );
}

export default App;
