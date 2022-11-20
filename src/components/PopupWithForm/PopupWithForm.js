function PopupWithForm({ title, name, onSubmit, titleButton, isOpen,onClose , children}) {

    return (
        <div className={isOpen ? `popup popup_${name} popup__open` : `popup popup_${name}`}>
            <div className="popup__content">
                <button className="popup__close button" onClick={onClose}></button>
                <h2 className="popup__title">{title}</h2>
                <form noValidate action="" name={name} className="popup__form popup__form-profile" onSubmit={onSubmit}>
                    {children}
                    <button type="submit" className="popup__button-submit button">{titleButton}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;