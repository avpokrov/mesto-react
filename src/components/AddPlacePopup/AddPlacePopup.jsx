import PopupWithForm from "../PopupWithForm/PopupWithForm";

function AddPlacePopup() {
    return (
        <PopupWithForm
            name={'createCard'}
            title={'Новое место'}
            isOpen={isAddPlacePopupOpen}
            closePopup={closeAllPopup}
        >
            <input id='addCard' name='name' className={'popup__input popup__field-text popup-name'} placeholder='Название'
                minLength='2' maxLength='30' required></input>
            <span className={'addCard-error popup__field-text-error'}></span>
            <input id='urlCard' name='link' className={'popup__input popup__field-text popup-description'}
                placeholder='Введите url' type='url'></input>
            <span className={'urlCard-error popup__field-text-error'}></span>
            <button className={'popup__button active-element'}>Создать</button>
        </PopupWithForm>
    )
}