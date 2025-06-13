function Card({ likes, link, name, owner, userId, handleCardClick}) {    
    return (
        <li className={'card'} onClick={() => handleCardClick(link)}>
            <div className={'trash active-element'}></div>
            <img className={'card__img'} src={link} alt='' />
            <div className={'card__info'}>
                <h2 className={'card__name'}>{name}</h2>
                <div className={'like__block'}>
                    <div className={'like active-element'}></div>
                    <div className={'like__sum'}>{likes.length}</div>
                </div>
            </div>
        </li>
    )

}

export default Card;