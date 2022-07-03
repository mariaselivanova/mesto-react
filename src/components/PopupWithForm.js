function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__form"
          onSubmit={props.onSubmit}
          name={props.name}
          noValidate>
          {props.children}
          <button
            className="popup__save"
            type="submit">
            {props.buttonText}
          </button>
        </form>
        <button
          type="button"
          onClick={props.onClose}
          aria-label="Закрыть"
          className="popup__close-button">
        </button>
      </div>
    </div>
  )
}

export default PopupWithForm
