import React from 'react';
import { useState, useEffect } from 'react';
import currentUserContext from '../../contexts/currentUserContexts';
import api from '../../utils/Api';
import Header from '../header/header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import PopupImg from '../PopupImg/PopupImg';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isEditProfilePopupOpen, changeIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, changeIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, changeIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    api.getMyInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => console.log(err));
  }, [])

  function closeAllPopup() {
    switch (true) {
      case isEditProfilePopupOpen:
        changeIsEditProfilePopupOpen(false);
        break;
      case isAddPlacePopupOpen:
        changeIsAddPlacePopupOpen(false);
        break;
      case isEditAvatarPopupOpen:
        changeIsEditAvatarPopupOpen(false);
        break;
      default:
        setSelectedCard(null);
        break;
    }
  }

  function handleCardClick(imgUrl) {
    setSelectedCard(imgUrl);
  }

  return (

    <>
      <currentUserContext.Provider value={currentUser}>
        <main className='main center'>
          <Header />
          <Main
            openProfilePopupOpen={changeIsEditProfilePopupOpen}
            openAddPlacePopupOpen={changeIsAddPlacePopupOpen}
            openEditAvatarPopupOpen={changeIsEditAvatarPopupOpen}
            handleCardClick={handleCardClick}
          />
          <Footer />
        </main>
        <PopupWithForm
          name='editProfile'
          title='Редактировать профиль'
          isOpen={isEditProfilePopupOpen}
          closePopup={closeAllPopup}
        >
          <input id='nameProfile' name='name' className={'popup__input popup__field-text popup-name'} minLength='2'
            maxLength='40' required placeholder='Имя' />
          <span className={'nameProfile-error popup__field-text-error'}></span>
          <input id='descriptionProfile' name='about' className={'popup__input popup__field-text popup-description'}
            minLength='2' maxLength='200' required placeholder='Описание' />
          <span className={'descriptionProfile-error popup__field-text-error'}></span>
          <button className={'popup__button active-element'}>Сохранить</button>
        </PopupWithForm>

        <PopupWithForm
          name={'createCard'}
          title={'Новое место'}
          isOpen={isAddPlacePopupOpen}
          closePopup={closeAllPopup}
        >
          <input id='addCard' name='name' className={'popup__input popup__field-text popup-name'} placeholder='Название'
            minLength='2' maxLength='30' required></input>
          <span className={'addCard-error popup__field-text-error'}></span>
          <input id='urlCard' name='link' className={'popup__input popup__field-text popup-description'}
            placeholder='Введите url' type='url'></input>
          <span className={'urlCard-error popup__field-text-error'}></span>
          <button className={'popup__button active-element'}>Создать</button>
        </PopupWithForm>

        <PopupWithForm
          name={'accept'}
          title={'Вы уверены?'}
          closePopup={closeAllPopup}
        >
          <div className='popup-accept__block'>
            <button className={'popup__button active-element popup__button_accept popup__button_accept_accept'}>Да</button>
            <button className={'popup__button active-element popup__button_accept popup__button_accept_cancel'}>Нет</button>
          </div>
        </PopupWithForm>

        <PopupWithForm
          name={'updateAvatar'}
          title={'Обновить аватар'}
          isOpen={isEditAvatarPopupOpen}
          closePopup={closeAllPopup}
        >
          <input id='urlAvatar' name='link' className={'popup__input popup__field-text popup-link'} placeholder='Введите url'
            pattern='https?://.+' type='url' required></input>
          <span className={'urlAvatar-error popup__field-text-error'}></span>
          <button className={'popup__button active-element'}>Сохранить</button>
        </PopupWithForm>

        <PopupImg
          closePopup={closeAllPopup}
          selectedCard={selectedCard} />
      </currentUserContext.Provider>
    </>


  );
}

export default App;
