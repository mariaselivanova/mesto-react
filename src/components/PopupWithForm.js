function PopupWithForm({ name, isOpen, title, onSubmit, children, buttonText, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          onSubmit={onSubmit}
          name={name}
          noValidate>
          {children}
          <button
            className="popup__save"
            type="submit">
            {buttonText}
          </button>
        </form>
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="popup__close-button">
        </button>
      </div>
    </div>
  )
}

export default PopupWithForm
