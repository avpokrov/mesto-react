function Main({onEditProfile, onAddPlace, onEditAvatar}) {

    return (
        <main>
            <section className="profile section">
                <div className="profile__edit-box">
                    <img className="profile__avatar-img" src="" alt="Кусто" />
                    <div className="profile__edit-img button" onClick={onEditAvatar}></div>
                </div>
                <div>
                    <div className="profile__info">
                        <h1 className="profile__title">Жак Ив Кусто</h1>
                        <button className="profile__edit-button button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__subtitle">Исследователь океана</p>
                </div>
                <button className="profile__add-button button" onClick={onAddPlace}></button>
            </section>
            <section className="cards-section section">
                <ul className="cards">
                </ul>
            </section>
        </main>
    );
}

export default Main;