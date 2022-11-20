import React from 'react'; 
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Card({ card, onOpen, onCardLike,onCardDelete }) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `card__button-del button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
      );
      const isLiked = card.likes.some(i => i._id === currentUser._id);
      const cardLikeButtonClassName = `button-like button ${isLiked ? 'buttton-like_enable' : 'buttton-like_disable' }`;
    return (
        <li className="card">
            <button className={cardDeleteButtonClassName} onClick={() => onCardDelete(card)} ></button>
            <img className="card__img" src={card.link} alt="" onClick={() => {onOpen(card)}}/>
            <figure className="card__img-signature">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-container">
                    <button className={cardLikeButtonClassName} onClick={() => {onCardLike(card)}} ></button>
                    <div className="card__likes">{card.likes.length}</div>
                </div>
            </figure>
        </li>
    )
}

export default Card;