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
  content:PropTypes.element,
  onClick:PropTypes.func,
  className:PropTypes.string, 
  type:PropTypes.string
};

Button.defaultProps={
  type:"button",
}