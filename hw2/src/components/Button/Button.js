import { Component } from "react";
import "./Button.scss";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const { text, onClick} = this.props;
    return (
      <>
        <button
          className="btn-buy"
          onClick={onClick}
        >
          <span className="innerFill">{text}</span>
        </button>
      </>
    );
  }
}

export default Button;

Button.propTypes = {
  isModal: PropTypes.func,
  currentComics: PropTypes.func,
  text:PropTypes.string
};
