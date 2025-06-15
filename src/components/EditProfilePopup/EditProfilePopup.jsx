import PopupWithForm from "../PopupWithForm/PopupWithForm";
import currentUserContext from "../../contexts/currentUserContexts";
import { useContext, useState, useEffect } from "react";

function EditProfilePopup ({isOpen, onClose, onUpdateUser}){

  const currentUser = useContext(currentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentUser.name && currentUser.about){
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description 
    })
  } 
  
    return (
        <PopupWithForm
          name='editProfile'
          title='Редактировать профиль'
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
        >
          <input id='nameProfile' name='name' className={'popup__input popup__field-text popup-name'} minLength='2'
            maxLength='40' required placeholder='Имя' value={name} onChange={handleChangeName}/>
          <span className={'nameProfile-error popup__field-text-error'}></span>
          <input id='descriptionProfile' name='about' className={'popup__input popup__field-text popup-description'}
            minLength='2' maxLength='200' required placeholder='Описание' value={description} onChange={handleChangeDescription}/>
          <span className={'descriptionProfile-error popup__field-text-error'}></span>
          <button className={'popup__button active-element'}>Сохранить</button>
        </PopupWithForm>
    )
}

export default EditProfilePopup;