import { Component } from "react";
import './Button.scss';

class Button extends Component{
    render(){
        const {backgroundColor, text, onClick}=this.props;
        return (
            <>
            <button className="btn" style={{backgroundColor}} onClick={onClick}>{text}</button>
            </>
        )
    }
}

export default Button;