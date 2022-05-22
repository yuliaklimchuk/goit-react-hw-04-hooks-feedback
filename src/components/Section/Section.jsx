import style from './section.module.css';
import PropTypes from "prop-types";


export const Section = ({ title, children }) => { 
    return <section className={style.container}>
        <h2 className={style.title}>{ title}</h2>
        { children}
    </section>
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired
};