import React from 'react';
import { useState, useEffect } from 'react';
import currentUserContext from '../../contexts/currentUserContexts';
import api from '../../utils/Api';
import Header from '../header/header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup';
import PopupImg from '../PopupImg/PopupImg';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpen, changeIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, changeIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, changeIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    Promise.all([api.getMyInfo(), api.getCards()])
      .then((values) => {
        setCurrentUser(values[0]);
        setCards(values[1]);
      })
      .catch((err) => console.log(err));
  }, [])

  function updateProfile(dataProfile) {
    api.editProfile(dataProfile)
      .then((newProfile) => {
        setCurrentUser(newProfile);
        closeAllPopup();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar (url) {
    api.updateAvatar(url)
      .then((newProfile) => {
        console.log(newProfile);
        setCurrentUser(newProfile);
        closeAllPopup();
      })  
      .catch((err) => console.log(err));
  }

  function handleClickLike(card) {
    const isLike = card.likes.some(i => i === currentUser._id);
    api.changeLikeCard(card._id, isLike)
      .then((newCard) => {
        setCards((state) => state.map((item) => (item._id === newCard._id ? newCard : item)))
      })
      .catch((err) => console.log(err));

  }

  function handleCardDelete(card) {
    if (currentUser._id === card.owner) {
      api.delCard(card._id)
        .then((delCard) => {
          setCards((state) => state.filter((item) => item._id !== delCard._id));
        })
        .catch((err) => console.log(err));
    }
  }

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
        setSelectedCard({});
        break;
    }
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (

    <>
      <currentUserContext.Provider value={currentUser}>
        <main className='main center'>
          <Header />
          <Main
            cards={cards}
            openProfilePopupOpen={changeIsEditProfilePopupOpen}
            openAddPlacePopupOpen={changeIsAddPlacePopupOpen}
            openEditAvatarPopupOpen={changeIsEditAvatarPopupOpen}
            handleCardClick={handleCardClick}
            handleClickLike={handleClickLike}
            handleCardDelete={handleCardDelete}
          />
          <Footer />
        </main>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopup}
          onUpdateUser={updateProfile}
        >
        </EditProfilePopup>
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopup}
          handleUpdateAvatar={handleUpdateAvatar}
        >
        </EditAvatarPopup>


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

        <PopupImg
          closePopup={closeAllPopup}
          card={selectedCard} />
      </currentUserContext.Provider>
    </>


  );
}

export default App;
