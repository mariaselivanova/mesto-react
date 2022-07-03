import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardDeleteButtonClassName = (
    `element__delete-button ${isOwn ? 'element__delete-button_active' : 'element__delete-button'}`
  );
  const cardLikeButtonClassName = (
    `element__like-button ${isLiked ? 'element__like-button_active' : 'element__like-button'}`
  );

  function handleClick() {
    props.onCardClick(props.card)
  };

  function handleLikeClick() {
    props.onCardLike(props.card)
  };

  function handleDeleteClick() {
    props.onCardDelete(props.card)
  };

  return (
    <div className='element'>
      <img
        alt={props.card.name}
        src={props.card.link}
        className="element__image"
        onClick={handleClick} />
      <button
        type="button"
        aria-label="Удалить"
        onClick={handleDeleteClick}
        className={cardDeleteButtonClassName}></button>
      <div className="element__caption">
        <h2 className="element__paragraph">{props.card.name}</h2>
        <div className="element__info">
          <button
            type="button"
            onClick={handleLikeClick}
            aria-label="Лайк"
            className={cardLikeButtonClassName}></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
