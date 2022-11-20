import {useContext} from 'react';
import Card from '../Card/card';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick,cards, onCardLike, onCardDelete }) {

    const currentUser = useContext(CurrentUserContext);

    return (
        <main>
            <section className="profile section">
                <div className="profile__edit-box">
                    <img className="profile__avatar-img" src={currentUser.avatar} alt="Кусто" />
                    <div className="profile__edit-img button" onClick={onEditAvatar}></div>
                </div>
                <div>
                    <div className="profile__info">
                        <h1 className="profile__title">{currentUser.name}</h1>
                        <button className="profile__edit-button button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button className="profile__add-button button" onClick={onAddPlace}></button>
            </section>
            <section className="cards-section section">
                <ul className="cards">
                    {cards.map((item, i) => (
                        <Card
                            onCardLike={onCardLike}
                            onCardDelete={onCardDelete}
                            key={item._id} card={item}
                            onOpen={onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;