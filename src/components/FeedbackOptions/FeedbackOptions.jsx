import style from './feedbackOptions.module.css';
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => { 
    return <div>
        {options.map((item) => (
            <button
                key={item.name}
                type="button"
                className={style.button}
                name={item.name}
                onClick={() => onLeaveFeedback(item)}
            >
            {item.name}
            </button>
        ))}
    </div>
}

FeedbackOptions.propTypes = {
    options:  PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.number,
            onChange: PropTypes.func,
    })),
    onLeaveFeedback: PropTypes.func.isRequired,
};