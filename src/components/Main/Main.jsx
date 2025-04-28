import api from '../../utils/Api';
import Card from '../Card/Card'
import { useState, useEffect } from 'react';

function handleEditAvatarClick() {
    const editAvatarPopup = document.querySelector('.popup-editProfile');
    editAvatarPopup.classList.add('popup_opened');
}



function Main() {
    useEffect(() => {
        Promise.all([api.getMyInfo(), api.getCards()])
            .then(([userData, cards]) => {
                setUserData(userData);
                setCards(cards);
            })
            .catch((err) => console.log(err));
    }, [])
    const [userData, setUserData] = useState({});
    const [cards, setCards] = useState([]);

    return (
        <>
            <section class="profile ident-top40px">
                <div class="profile_box">
                    <div class="profile__wrapper">
                        <img class="profile__image" src={userData.avatar} alt="avatar" />
                    </div>
                    <div class="profile__info">
                        <div class="profile__name-box">
                            <h1 class="profile__name">{userData.name}</h1>
                            <button onClick={handleEditAvatarClick} class="button button_editProfile active-element"></button>
                        </div>
                        <p class="profile__description">{userData.about}</p>
                    </div>
                </div>
                <button class="button button_addCard active-element"></button>
            </section>
            <ul class="cards ident-top40px">
                {cards.map((item) => (
                    <Card key={item._id} userId={userData._id} {...item}/>
                ))} 
            </ul>
        </>
    );
}

export default Main;