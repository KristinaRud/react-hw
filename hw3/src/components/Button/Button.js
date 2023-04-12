import "./Button.scss";
import PropTypes from "prop-types";

const Button =({ content, onClick, className, type})=> {
  return (
    <>
      <button type={type}
        className={className}
        onClick={onClick}
      >
       {content}
      </button>
    </>
  );    
}

export default Button;

Button.propTypes = {
  isModal: PropTypes.func,
  currentComics: PropTypes.func,
  content:PropTypes.element,
};

Button.defaultProps={
  type:"button",
}