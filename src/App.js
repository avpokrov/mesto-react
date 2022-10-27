
function App() {
  return (
    <div className="App">
      <header className="header section">
        <div className="header__logo"></div>
      </header>
      <main>
        <section className="profile section">
          <div className="profile__edit-box">
            <img className="profile__avatar-img" src="" alt="Кусто" />
            <div className="profile__edit-img button"></div>
          </div>
          <div>
            <div className="profile__info">
              <h1 className="profile__title"></h1>
              <button className="profile__edit-button button"></button>
            </div>
            <p className="profile__subtitle"></p>
          </div>
          <button className="profile__add-button button"></button>
        </section>
        <section className="cards-section section">
          <ul className="cards">
          </ul>
        </section>
      </main>
      <footer className="footer section">
        <p className="footer__text">&#169; 2020 Mesto Russia</p>
      </footer>
      <div className="popup popup_profile_edit">
        <div className="popup__content">
          <button className="popup__close button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form novalidate action="" className="popup__form popup__form-profile">
            <input type="text" id="nameProfile" name="nameProfile" className="popup__input popup__input_name" minlength="2" maxlength="40" required />
            <span className="popup__error nameProfile-error"></span>
            <input type="text" id="infoProfile" name="infoProfile" className="popup__input popup__input_info" minlength="2" maxlength="200" required />
            <span className="popup__error infoProfile-error"></span>
            <button type="submit" className="popup__button-submit button">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_card_add">
        <div className="popup__content">
          <button className="popup__close button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form novalidate action="" className="popup__form popup__form-cardAdd">
            <input type="text" placeholder="Название" id="InfoCard" name="name" className="popup__input popup__input_info-card" minlength="2" maxlength="30" required />
            <span className="popup__error InfoCard-error"></span>
            <input type="url" placeholder="Ссылка на картинку" id="srcCard" name="link" className="popup__input popup__input_src-card" required />
            <span className="popup__error srcCard-error"></span>
            <button type="submit" disabled="true" className="popup__button-submit button popup__button-submit_disable">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_edit_img">
        <div className="popup__content">
          <button className="popup__close button"></button>
          <h2 class="popup__title popup__title_left">Обновить аватар</h2>
          <form novalidate action="" className="popup__form popup__form-editImg">
            <input type="url" placeholder="Ссылка на аватар" id="srcAvatar" name="link" className="popup__input popup__input_src-avatar" required/>
              <span className="popup__error srcAvatar-error"></span>
              <button type="submit" disabled="true" className="popup__button-submit button popup__button-submit_disable">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_submit">
        <div className="popup__content">
          <button className="popup__close button"></button>
          <h2 className="popup__title popup__title_left">Вы уверены?</h2>
          <form novalidate action="" className="popup__form popup__form-submit">
            <button type="submit" className="popup__button-submit button">Да</button>
          </form>
        </div>
      </div>

      <div className="popup popup_card-img">
        <div className="popup__content popup__content_card">
          <button className="popup__close button"></button>
          <img src="" alt="" className="popup__img"/>
            <h2 className="popup__title popup__title_img"></h2>
        </div>
      </div>

    </div>
  );
}

export default App;
