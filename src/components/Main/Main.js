import React, { useState, useEffect } from 'react';
import api from '../../utils/Api';
import Card from '../Card/card';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    useEffect(() => {
        api.getUserInfo()
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })
    }, []);

    useEffect(() => {
        api.getAllCard()
            .then((data) => {
                setCards(data);
            })
    }, []);

    return (
        <main>
            <section className="profile section">
                <div className="profile__edit-box">
                    <img className="profile__avatar-img" src={userAvatar} alt="Кусто" />
                    <div className="profile__edit-img button" onClick={onEditAvatar}></div>
                </div>
                <div>
                    <div className="profile__info">
                        <h1 className="profile__title">{userName}</h1>
                        <button className="profile__edit-button button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button className="profile__add-button button" onClick={onAddPlace}></button>
            </section>
            <section className="cards-section section">
                <ul className="cards">
                    {cards.map((item, i) => (
                        <Card key={item._id} card={item}/>
 
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;