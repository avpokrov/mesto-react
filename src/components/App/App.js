import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import PopupWithForm from '../PopupWithForm/PopupWithForm'
import ImagePopup from '../ImagePopup/ImagePopup' 

function App() {

  const handleEditAvatarClick = () => {
    document.querySelector('.popup_edit_img').classList.add('popup__open');
  }

  const handleEditProfileClick = () => {
    document.querySelector('.popup_profile_edit').classList.add('popup__open');
  }

  const handleAddPlaceClick = () => {
    document.querySelector('.popup_card_add').classList.add('popup__open');
  }


  return (
    <div className="container">
      <Header />

      <Main
        onAddPlace={handleAddPlaceClick}
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />

      <PopupWithForm
        name='profile_edit'
        title='Редактировать профиль'
        titleButton='Сохранить'
      >
        <input type="text" id="nameProfile" name="nameProfile" className="popup__input popup__input_name" minlength="2" maxlength="40" required />
        <span className="popup__error nameProfile-error"></span>
        <input type="text" id="infoProfile" name="infoProfile" className="popup__input popup__input_info" minlength="2" maxlength="200" required />
        <span className="popup__error infoProfile-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name='edit_img'
        title='Обновить аватар'
        titleButton='Сохранить'
      >
        <input type="url" placeholder="Ссылка на аватар" id="srcAvatar" name="link" className="popup__input popup__input_src-avatar" required />
        <span className="popup__error srcAvatar-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name='card_add'
        title='Новое место'
        titleButton='Сохранить'
      >
        <input type="text" placeholder="Название" id="InfoCard" name="name" className="popup__input popup__input_info-card" minlength="2" maxlength="30" required />
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

      <ImagePopup />

    </div>
  );
}

export default App;
