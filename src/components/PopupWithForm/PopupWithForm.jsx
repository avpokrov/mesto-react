function PopupWithForm({ name, title, children, isOpen, closePopup }) {

    return (
        <section className={`popup popup-${name} ${ isOpen ? 'popup_opened' : ''}`}>
            <div className={'popup__container'}>
                <button onClick={closePopup} className={'button button_close active-element'}></button>
                <h2 className={'popup__header'}>{title}</h2>
                <form name={name} className={'popup__form'} noValidate>
                    {children}
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;