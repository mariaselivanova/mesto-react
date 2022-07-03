function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_pic  ${card && 'popup_opened'}`}>
      <div className="popup__wrap">
        <img alt={card && card.name} src={card && card.link} className="popup__image" />
        <h2 className="popup__caption">{card && card.name}</h2>
        <button onClick={onClose} type="button" aria-label="Закрыть" className="popup__close-button popup__close-button_type_pic"></button>
      </div>
    </div>
  )
}

export default ImagePopup
