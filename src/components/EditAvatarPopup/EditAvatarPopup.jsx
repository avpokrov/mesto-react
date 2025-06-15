import PopupWithForm from "../PopupWithForm/PopupWithForm";
import {useRef} from 'react';

function EditAvatarPopup({isOpen, onClose, handleUpdateAvatar}) {
    const inputUrlRef = useRef()

    function handleSubmit (e){
        e.preventDefault();
        handleUpdateAvatar(inputUrlRef.current.value);
        inputUrlRef.current.value= "";
    }

    return (
        <PopupWithForm
            name={'updateAvatar'}
            title={'Обновить аватар'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input ref={inputUrlRef} id='urlAvatar' name='link' className={'popup__input popup__field-text popup-link'} placeholder='Введите url'
                pattern='https?://.+' type='url' required></input>
            <span className={'urlAvatar-error popup__field-text-error'}></span>
            <button className={'popup__button active-element'}>Сохранить</button>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;
