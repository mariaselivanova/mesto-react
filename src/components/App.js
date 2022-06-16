import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState } from 'react';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function openEditProfilePopup() {
    setIsEditProfilePopupOpen(true);
  }

  function openAddPlacePopup() {
    setIsAddPlacePopupOpen(true);
  }

  function openEditAvatarPopup() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard(null)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={openEditProfilePopup}
        onEditAvatar={openEditAvatarPopup}
        onAddPlace={openAddPlacePopup}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name='profile'
        isOpen={isEditProfilePopupOpen}
        title='Редактировать профиль'
        buttonText='Сохранить'
        onClose={closeAllPopups}
      >
        <input id="name-input" className="popup__input popup__input_type_name" type="text" minLength="2" maxLength="40"
          required name="userName" placeholder="Имя" />
        <span className="popup__input-error name-input-error"></span>
        <input id="profession-input" className="popup__input popup__input_type_profession" type="text" minLength="2"
          maxLength="200" required name="userInfo" placeholder="О себе" />
        <span className="popup__input-error profession-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name='add'
        isOpen={isAddPlacePopupOpen}
        title='Новое место'
        buttonText='Создать'
        onClose={closeAllPopups}
      >
        <input id="title-input" className="popup__input popup__input_type_title" type="text" minLength="2" maxLength="30"
          required name="title" placeholder="Название" />
        <span className="popup__input-error title-input-error"></span>
        <input id="link-input" className="popup__input popup__input_type_link" type="url" required name="link"
          placeholder="Ссылка на картинку" />
        <span className="popup__input-error link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name='avatar'
        isOpen={isEditAvatarPopupOpen}
        title='Обновить аватар'
        buttonText='Сохранить'
        onClose={closeAllPopups}
      >
        <input id="avatar-input" className="popup__input popup__input_type_avatar" type="url" required name="avatar"
          placeholder="Ссылка на аватар" />
        <span className="popup__input-error avatar-input-error"></span>
      </PopupWithForm>

      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
      >
      </ImagePopup>
    </div>
  );
}

export default App;
