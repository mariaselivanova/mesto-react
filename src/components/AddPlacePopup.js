import PopupWithForm from "./PopupWithForm";
import React from "react";

export default function AddPlacePopup(props) {

  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  };

  function handleLinkChange(e) {
    setLink(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace(name, link);
  };

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name='add'
      title='Новое место'
      buttonText='Создать'
    >
      <input
        id="title-input"
        onChange={handleNameChange}
        className="popup__input popup__input_type_title"
        type="text" minLength="2"
        maxLength="30"
        required
        name="title"
        placeholder="Название" />
      <span className="popup__input-error title-input-error"></span>
      <input
        id="link-input"
        onChange={handleLinkChange}
        className="popup__input popup__input_type_link"
        type="url"
        required
        name="link"
        placeholder="Ссылка на картинку" />
      <span className="popup__input-error link-input-error"></span>
    </PopupWithForm>
  )
}
