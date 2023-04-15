import "./Modal.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Modal = ({modalTitle, closeModal, handlerModal, content, buttonContent}) => {
  const { title, img, creators, price } = content;
  return (
    <div className="modal-wrapper" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="detail-item-bg">
          <img className="back-img" src={img.url + img.background} />
        </div>
        <div className="modal-box">
          {/* надо поменять на компонент button */}
          <button type="button" onClick={closeModal} className="modal-close">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path
                fill="#E62429"
                d="m9.3 8 6.1-6.1c.4-.4.4-.9 0-1.3s-.9-.4-1.3 0L8 6.7 1.9.6C1.6.3 1 .3.6.6c-.3.4-.3 1 0 1.3L6.7 8 .6 14.1c-.4.4-.3.9 0 1.3l.1.1c.4.3.9.2 1.2-.1L8 9.3l6.1 6.1c.4.4.9.4 1.3 0s.4-.9 0-1.3L9.3 8z"
              />
            </svg>
          </button>
          {modalTitle}
          <div className="modal-header">
            <h4>{title}</h4>
          </div>
          <div className="modal-content">
            <div>
              <img
                className="item-img"
                alt={title}
                title={title}
                src={img.url + img.clean}
              />
            </div>
            <div>
              <h3>Creators</h3>
              <p>{creators}</p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="button-wrapper">
            <Button
              className="btn-buy"
              onClick={() => {
                handlerModal();
                closeModal();
              }}
              content={ buttonContent!=="Delete"? <span className="innerFill">Buy ${price}</span> : <span className="innerFill">{buttonContent}</span>}
            />
            {/* <button className="btn" onClick={closeModal} type="button">Cancel</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  handlerModal: PropTypes.func.isRequired,
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.shape({
      url: PropTypes.string,
      portrait_uncanny: PropTypes.string,
      background: PropTypes.string,
      clean: PropTypes.string,
    }).isRequired,
    creators: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};
