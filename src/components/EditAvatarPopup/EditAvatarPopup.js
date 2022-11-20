import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useRef } from 'react';

function EditAvatarPopup(props) {
    const avatarInput = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(avatarInput.current.value);

        props.onUpdateAvatar({
            avatar: avatarInput.current.value,
        });
        avatarInput.current.value = ''; 
    }
    return (
        <PopupWithForm
            name='edit_img'
            title='Обновить аватар'
            titleButton='Сохранить'
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >
            <input ref={avatarInput} type="url" placeholder="Ссылка на аватар"
                id="srcAvatar" name="link"
                className="popup__input popup__input_src-avatar" required
            />
            <span className="popup__error srcAvatar-error"></span>
        </PopupWithForm>
    )
}


export default EditAvatarPopup;