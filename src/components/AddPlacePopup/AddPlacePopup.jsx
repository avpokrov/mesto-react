import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useState } from "react";

function AddPlacePopup({ isOpen, onClose, addCard }) {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeUrl(e) {
        setUrl(e.target.value);
    }

    function handleOnSubmit(e){
        e.preventDefault();
        addCard({name, link: url})
        setName('');
        setUrl('');
    }

    return (
        <PopupWithForm
            name={'createCard'}
            title={'Новое место'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleOnSubmit}
        >
            <input id='addCard' name='name' onChange={handleChangeName} value={name} className={'popup__input popup__field-text popup-name'} placeholder='Название'
                minLength='2' maxLength='30' required></input>
            <span className={'addCard-error popup__field-text-error'}></span>
            <input id='urlCard' name='link' onChange={handleChangeUrl} value={url} className={'popup__input popup__field-text popup-description'}
                placeholder='Введите url' type='url'></input>
            <span className={'urlCard-error popup__field-text-error'}></span>
            <button className={'popup__button active-element'}>Создать</button>
        </PopupWithForm>
    )
}

export default AddPlacePopup;
