import style from './feedbackOptions.module.css';
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => { 
    const keys = Object.keys(options);
    return <div>
        {keys.map((item) => (
            <button
                key={item}
                type="button"
                className={style.button}
                name={item}
                onClick={() => onLeaveFeedback(item)}
            >
            {item}
            </button>
        ))}
    </div>
}

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired,
};