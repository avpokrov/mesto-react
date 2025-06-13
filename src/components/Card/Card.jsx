import currentUserContext from "../../contexts/currentUserContexts";
import { useContext } from "react";
function Card({ likes, link, name, owner, userId, handleCardClick}) {
    const currentUser = useContext(currentUserContext);
    const isOwn = currentUser._id === owner;
    const isLiked = likes.some(i => i === currentUser._id);

    return (
        <li className={'card'} onClick={() => handleCardClick(link)}>
            {isOwn && <div className={'trash active-element'}></div>}
            <img className={'card__img'} src={link} alt='' />
            <div className={'card__info'}>
                <h2 className={'card__name'}>{name}</h2>
                <div className={'like__block'}>
                    <div className={`like active-element ${isLiked ? 'like_active' : ''}  `}></div>
                    <div className={'like__sum'}>{likes.length}</div>
                </div>
            </div>
        </li>
    )

}

export default Card;