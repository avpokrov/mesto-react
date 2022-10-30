import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import ImagePopup from '../ImagePopup/ImagePopup'

function App() {

  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');


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

      <Main
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name='profile_edit'
        title='Редактировать профиль'
        titleButton='Сохранить'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" id="nameProfile" name="nameProfile" className="popup__input popup__input_name" minLength="2" maxLength="40" required />
        <span className="popup__error nameProfile-error"></span>
        <input type="text" id="infoProfile" name="infoProfile" className="popup__input popup__input_info" minLength="2" maxLength="200" required />
        <span className="popup__error infoProfile-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name='edit_img'
        title='Обновить аватар'
        titleButton='Сохранить'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input type="url" placeholder="Ссылка на аватар" id="srcAvatar" name="link" className="popup__input popup__input_src-avatar" required />
        <span className="popup__error srcAvatar-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name='card_add'
        title='Новое место'
        titleButton='Сохранить'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" placeholder="Название" id="InfoCard" name="name" className="popup__input popup__input_info-card" minLength="2" maxLength="30" required />
        <span className="popup__error InfoCard-error"></span>
        <input type="url" placeholder="Ссылка на картинку" id="srcCard" name="link" className="popup__input popup__input_src-card" required />
        <span className="popup__error srcCard-error"></span>
      </PopupWithForm>

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
