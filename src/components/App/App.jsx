import React from 'react';
import { useState, useEffect } from 'react';
import currentUserContext from '../../contexts/currentUserContexts';
import api from '../../utils/Api';
import Header from '../header/header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import AddPlacePopup from '../AddPlacePopup/AddPlacePopup';
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
        setCards(values[1].reverse());
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

  function handleUpdateAvatar(url) {
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

  function addCard(card) {
    api.addCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards])
        closeAllPopup();
      })
      .catch((err) => console.log(err));
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
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopup}
          addCard={addCard}
        >
        </AddPlacePopup>

        <PopupImg
          closePopup={closeAllPopup}
          card={selectedCard} />
      </currentUserContext.Provider>
    </>


  );
}

export default App;
