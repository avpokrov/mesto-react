import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';



function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);

    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    },[currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
          name,
          about: description
        });
      } 

    return (
        <PopupWithForm
            name='profile_edit'
            title='Редактировать профиль'
            titleButton='Сохранить'
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <input type="text" id="nameProfile" name="nameProfile"
                value={name || ""} onChange={handleChangeName}
                className="popup__input popup__input_name"
                minLength="2" maxLength="40" required
            />
            <span className="popup__error nameProfile-error"></span>
            <input type="text" id="infoProfile" name="infoProfile"
                value={description || ""} onChange={handleChangeDescription}
                className="popup__input popup__input_info" minLength="2"
                maxLength="200" required
            />
            <span className="popup__error infoProfile-error"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;