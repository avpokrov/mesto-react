import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import ImagePopup from '../ImagePopup/ImagePopup'
import api from '../../utils/Api';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup'
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup';
import AddPlacePopup from '../AddPlacePopup/AddPlacePopup';

function App() {

  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState('');
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api.getAllCard()
        .then((data) => {
            setCards(data);
        })
}, []);

function handleCardLike(card) {
  const isLiked = card.likes.some(i => i._id === currentUser._id);       
  api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  });
}

function handleCardDelete(card) {
  api.delCard(card._id).then((data) => {
      setCards(cards.filter((item) => {
          return item._id !== card._id;
      }));
  }).catch(err => console.log(err));
}

function handleAddCard(newCard){
  api.addCard(newCard).then((res) =>{
    setCards([res, ...cards]);
    closeAllPopups();
  }).catch(err => console.log(err));
}

  function handleUpdateUser(updateUser) {
    api.setUserInfo(updateUser).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    }).catch(err => console.log(err)); 
  }

  function onUpdateAvatar(data){
    api.setUserAvatar(data).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    }).catch(err => console.log(err)); 
  }

  useEffect(() => {
    api.getUserInfo().then((data) => {
      setCurrentUser(data);
    }).catch(err => console.log(err)); 
  }, [])


  const handleEditAvatarClick = () => {
    setAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setAvatarPopupOpen(false);
    setProfilePopupOpen(false);
    setPlacePopupOpen(false);
    setSelectedCard('');
  }

  return (
    <div className="container">
      <Header />
      <CurrentUserContext.Provider value={currentUser}>
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup onClose={closeAllPopups}
          isOpen={isEditAvatarPopupOpen}
          onUpdateAvatar={onUpdateAvatar}
        />
      </CurrentUserContext.Provider>

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddCard}
      >
        <input type="text" placeholder="Название" id="InfoCard" name="name" className="popup__input popup__input_info-card" minLength="2" maxLength="30" required />
        <span className="popup__error InfoCard-error"></span>
        <input type="url" placeholder="Ссылка на картинку" id="srcCard" name="link" className="popup__input popup__input_src-card" required />
        <span className="popup__error srcCard-error"></span>
      </AddPlacePopup>

      <PopupWithForm
        name='submit'
        title='Вы уверены?'
        titleButton='ДА'
      >
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;
