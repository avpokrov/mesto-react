import api from '../../utils/Api';
import Card from '../Card/Card'
import { useState, useEffect } from 'react';


function Main({openProfilePopupOpen, openAddPlacePopupOpen, openEditAvatarPopupOpen}) {
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
            <section className='profile ident-top40px'>
                <div className='profile_box'>
                    <div onClick={() => openEditAvatarPopupOpen(true)} className='profile__wrapper'>
                        <img className='profile__image' src={userData.avatar} alt='avatar' />
                    </div>
                    <div className='profile__info'>
                        <div className='profile__name-box'>
                            <h1 className='profile__name'>{userData.name}</h1>
                            <button onClick={() => openProfilePopupOpen(true)} className='button button_editProfile active-element'></button>
                        </div>
                        <p className='profile__description'>{userData.about}</p>
                    </div>
                </div>
                <button onClick={() => openAddPlacePopupOpen(true)} className='button button_addCard active-element'></button>
            </section>
            <ul className='cards ident-top40px'>
                {cards.map((item) => (
                    <Card key={item._id} userId={userData._id} {...item} />
                ))}
            </ul>
        </>
    );
}

export default Main;