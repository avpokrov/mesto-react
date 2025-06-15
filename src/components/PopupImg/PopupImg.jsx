function PopupImg ({closePopup, card}) {
    return(
        <section className={`popup popup-img ${card.link ? 'popup_opened' : '' }`}>
        <div className='popup-img__container'>
          <button className='button button_close active-element' onClick={closePopup}></button>
          <img className='popup-img__image' src={`${card.link ? card.link : null}`} alt='' />
          <h3 className='popup-img__text'></h3>
        </div>
      </section>
    );
}

export default PopupImg;