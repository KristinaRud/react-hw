import "./Button.scss";
import PropTypes from "prop-types";

const Button =({ text, onClick, className, type})=> {
  return (
    <>
      <button type={type}
        className={className}
        onClick={onClick}
      >
        <span className="innerFill">{text}</span>
      </button>
    </>
  );    
}

export default Button;

Button.propTypes = {
  isModal: PropTypes.func,
  currentComics: PropTypes.func,
  text:PropTypes.string,
};

Button.defaultProps={
  type:"button",
}