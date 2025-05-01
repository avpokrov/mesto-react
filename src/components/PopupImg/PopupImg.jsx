function PopupImg ({imgUrl, closePopup}) {
    return(
        <section class="popup popup-img">
        <div class="popup-img__container">
          <button class="button button_close active-element" onClick={closePopup}></button>
          <img class="popup-img__image" src={imgUrl} alt="" />
          <h3 class="popup-img__text"></h3>
        </div>
      </section>
    );
}

export default PopupImg;