function ImagePopup() {
    return (
        <div className="popup popup_card-img">
            <div className="popup__content popup__content_card">
                <button className="popup__close button"></button>
                <img src="" alt="" className="popup__img" />
                <h2 className="popup__title popup__title_img"></h2>
            </div>
        </div>
    );
}

export default ImagePopup;