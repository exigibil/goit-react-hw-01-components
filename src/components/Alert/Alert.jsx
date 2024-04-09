
import styles from "./Alert.module.css"
import clsx from "clsx" 
import PropTypes from "prop-types";

function Alert({ variant = "info", children}) {
    return <p className={clsx(styles.alert, styles[variant])}>{children}</p>;
};

alert.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.string,

};

export default Alert;