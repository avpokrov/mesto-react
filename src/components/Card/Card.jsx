import currentUserContext from "../../contexts/currentUserContexts";
import { useContext } from "react";
function Card({card, handleCardClick, handleClickLike, handleCardDelete}) {
    const currentUser = useContext(currentUserContext);
    const isOwn = currentUser._id === card.owner;
    const isLiked = card.likes.some(i => i === currentUser._id);

    return (
        <li className={'card'}>
            {isOwn && <div className={'trash active-element'} onClick = {() => handleCardDelete(card)}></div>}
            <img className={'card__img'} src={card.link} onClick={() => handleCardClick(card)} alt='' />
            <div className={'card__info'}>
                <h2 className={'card__name'}>{card.name}</h2>
                <div className={'like__block'}>
                    <div className={`like active-element ${isLiked ? 'like_active' : ''}  `} onClick={() => handleClickLike(card)}></div>
                    <div className={'like__sum'}>{card.likes.length}</div>
                </div>
            </div>
        </li>
    )

}

export default Card;