function PopupWithForm({ title, name, onFormSubmit, titleButton ,children}) {

    return (
        <div className={`popup popup_${name}`}>
            <div className="popup__content">
                <button className="popup__close button"></button>
                <h2 className="popup__title">{title}</h2>
                <form novalidate action="" name={name} className="popup__form popup__form-profile" onSubmit={onFormSubmit}>
                    {children}
                    <button type="submit" className="popup__button-submit button">{titleButton}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;