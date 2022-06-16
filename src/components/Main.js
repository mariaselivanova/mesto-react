import { useEffect, useState } from 'react'
import api from '../utils/Api'
import Card from './Card'

function Main(props) {

  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    api.handleUserInfo()
      .then((res) => {
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    api.getAllCards()
      .then((res) => {
        setCards(res)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__wrap" onClick={props.onEditAvatar}><img src={userAvatar} alt="Аватар" className="profile__avatar" /></div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={props.onEditProfile} type="button" aria-label="Изменить профиль" className="profile__edit-button"></button>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} type="button" aria-label="Добавить" className="profile__add-button"></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  )
}

export default Main
