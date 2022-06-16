function ImagePopup(props) {
  return (
    <div className={`popup popup_type_pic ${props.link && 'popup_opened'}`}>
      <div className="popup__wrap">
        <img alt='' src={props.link} className="popup__image" />
        <h2 className="popup__caption"></h2>
        <button onClick={props.onClose} type="button" aria-label="Закрыть" className="popup__close-button popup__close-button_type_pic"></button>
      </div>
    </div>
  )
}

export default ImagePopup
