import style from './notification.module.css';
import PropTypes from "prop-types";

export const Notification = ({ message }) => { 
    return <p className={ style.message}>{ message}</p>
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};