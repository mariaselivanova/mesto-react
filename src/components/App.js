import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from './../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState('');
  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (!isLiked) {
      api.addLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log(err));
    } else {
      api.deleteLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log(err));
    }
  };

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => (c._id !== card._id && c)));
      })
      .catch((err) => console.log(err));
  };

  function handleAddPlaceSubmit(name, link) {
    api.addNewCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    api.getAllCards()
      .then((res) => {
        setCards(res)
      })
      .catch((err) => console.log(err))
  }, []);

  useEffect(() => {
    api.handleUserInfo()
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => console.log(err))
  }, []);


  function openEditProfilePopup() {
    setIsEditProfilePopupOpen(true);
  };

  function openAddPlacePopup() {
    setIsAddPlacePopupOpen(true);
  };

  function openEditAvatarPopup() {
    setIsEditAvatarPopupOpen(true);
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(null)
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function handleUpdateUser(user) {
    api.changeUserInfo(user.name, user.about)
      .then((res) => {
        setCurrentUser(res)
        closeAllPopups()
      })
      .catch((err) => console.log(err))
  };

  function handleUpdateAvatar(user) {
    api.changeUserAvatar(user.avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />

        <Main
          onEditProfile={openEditProfilePopup}
          onEditAvatar={openEditAvatarPopup}
          onAddPlace={openAddPlacePopup}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser} />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit} />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar} />

        <ImagePopup
          onClose={closeAllPopups}
          card={selectedCard}
        >
        </ImagePopup>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
