function Card(props) {

  function handleClick() {
    props.onCardClick(props.card)
  }

  return (
    <div className='element'>
      <img alt={props.card.name} src={props.card.link} className="element__image" onClick={handleClick} />
      <button type="button" aria-label="Удалить" className="element__delete-button"></button>
      <div className="element__caption">
        <h2 className="element__paragraph">{props.card.name}</h2>
        <div className="element__info">
          <button type="button" aria-label="Лайк" className="element__like-button"></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
