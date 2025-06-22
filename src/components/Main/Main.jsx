import currentUserContext from '../../contexts/currentUserContexts';
import Card from '../Card/Card'
import { useContext } from 'react';


function Main({ cards, openProfilePopupOpen, openAddPlacePopupOpen, openEditAvatarPopupOpen, handleCardClick, handleClickLike, handleCardDelete }) {
    const currentUser = useContext(currentUserContext);
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
                    <Card key={item._id}
                        card={item}
                        handleCardClick={handleCardClick}
                        handleClickLike={handleClickLike}
                        handleCardDelete={handleCardDelete}
                    />
                ))}
            </ul>
        </>
    );
}

export default Main;