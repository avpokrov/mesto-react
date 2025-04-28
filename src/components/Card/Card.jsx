function Card({ likes, link, name, owner, userId }) {
    return (
        <li class="card">
            <div class="trash active-element"></div>
            <img class="card__img" src={link} alt="" />
            <div class="card__info">
                <h2 class="card__name">{name}</h2>
                <div class="like__block">
                    <div class="like active-element"></div>
                    <div class="like__sum">{likes.length}</div>
                </div>
            </div>
        </li>
    )

}

export default Card;