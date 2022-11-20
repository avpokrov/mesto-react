import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useState } from 'react';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const [nameCard, setNameCard] = useState('');
    const [linkCard, setLinkCard] = useState('');

    function handleChangeNameCard(e) {
        setNameCard(e.target.value);
    }

    function handleChangeLinkCard(e) {
        setLinkCard(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        onAddPlace({nameCard, linkCard})
        setNameCard('');
        setLinkCard('');
        

    }

    return (
        <PopupWithForm
            name='card_add'
            title='Новое место'
            titleButton='Сохранить'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input type="text" placeholder="Название" id="InfoCard"
                value={nameCard} onChange={handleChangeNameCard}
                name="name" className="popup__input popup__input_info-card"
                minLength="2" maxLength="30" required />
            <span className="popup__error InfoCard-error"></span>
            <input type="url" placeholder="Ссылка на картинку"
                value={linkCard} onChange={handleChangeLinkCard}
                id="srcCard" name="link"
                className="popup__input popup__input_src-card" required />
            <span className="popup__error srcCard-error"></span>
        </PopupWithForm>
    );

}

export default AddPlacePopup;