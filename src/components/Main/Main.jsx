import currentUserContext from '../../contexts/currentUserContexts';
import api from '../../utils/Api';
import Card from '../Card/Card'
import { useState, useEffect } from 'react';
import { useContext } from 'react';


function Main({openProfilePopupOpen, openAddPlacePopupOpen, openEditAvatarPopupOpen, handleCardClick}) {
    const currentUser = useContext(currentUserContext);
    useEffect(() => {
        api.getCards()
            .then((cards) => {
                setCards(cards);
            })
            .catch((err) => console.log(err));
    }, [])
    const [cards, setCards] = useState([]);

    return (
        <>
            <section className='profile ident-top40px'>
                <div className='profile_box'>
                    <div onClick={() => openEditAvatarPopupOpen(true)} className='profile__wrapper'>
                        <img className='profile__image' src={currentUser.avatar} alt='avatar' />
                    </div>
                    <div className='profile__info'>
                        <div className='profile__name-box'>
                            <h1 className='profile__name'>{currentUser.name}</h1>
                            <button onClick={() => openProfilePopupOpen(true)} className='button button_editProfile active-element'></button>
                        </div>
                        <p className='profile__description'>{currentUser.about}</p>
                    </div>
                </div>
                <button onClick={() => openAddPlacePopupOpen(true)} className='button button_addCard active-element'></button>
            </section>
            <ul className='cards ident-top40px'>
                {cards.map((item) => (
                    <Card key={item._id} userId={currentUser._id} {...item} handleCardClick={handleCardClick}/>
                ))}
            </ul>
        </>
    );
}

export default Main;