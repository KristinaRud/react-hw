import cx from "classnames";
import PropTypes from "prop-types";
import {Field, ErrorMessage} from "formik";

import './Input.scss';

const Input = ({label, type, classNames, name, placeholder, error, ...restProps}) => {
	return (
		<label className={cx("form-item", classNames, {"has-validation":error})}>
			<p className="form-label">{label}</p>

			<Field type={type} className="form-control" name={name} placeholder={placeholder} {...restProps} />
			<ErrorMessage name={name} className={'error-message'} component={"p"}/>
		</label>

	)
}
export default Input;

Input.defaultProps = {
	type: "text",
	classNames:""
}

Input.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	classNames: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	error: PropTypes.bool,
}

