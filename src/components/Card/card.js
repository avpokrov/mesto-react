function Card({ card, onOpen }) {
    return (
        <li className="card">
            <button className="card__button-del button"></button>
            <img className="card__img" src={card.link} alt="" onClick={() => {onOpen(card)}}/>
            <figure className="card__img-signature">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-container">
                    <button className="button-like button"></button>
                    <div className="card__likes">{card.likes.length}</div>
                </div>
            </figure>
        </li>
    )
}

export default Card;