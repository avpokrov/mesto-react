function ImagePopup({card, onClose}) {
    return (
        <div className={card ? "popup popup_card-img popup__open" : "popup popup_card-img"}>
            <div className="popup__content popup__content_card">
            <button className="popup__close button" onClick={onClose}></button>
                <img src={card.link} alt="" className="popup__img"/>
                <h2 className="popup__title popup__title_img">{card.name}</h2>
            </div>
        </div>
    );
}

export default ImagePopup;