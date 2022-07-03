import Card from './Card';
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div
            className="profile__wrap"
            onClick={props.onEditAvatar}>
            <img
              src={currentUser.avatar}
              alt="Аватар"
              className="profile__avatar" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              onClick={props.onEditProfile}
              type="button"
              aria-label="Изменить профиль"
              className="profile__edit-button"></button>
            <p className="profile__profession">{currentUser.about}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} type="button" aria-label="Добавить" className="profile__add-button"></button>
      </section>
      <section className="elements">
        {props.cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  )
}

export default Main
