import PropTypes from 'prop-types';
import s from '../Loader/Loader.module.css'
const Loader = ({ onClick, onChange }) => {
 
    return (
        <button className={ s.loadMoreBtn}type='button' onClick={onClick} onChange={ onChange}>Load More
        </button>
        
    )
};
Loader.propTypes = {
    onclick: PropTypes.func,
    onChange: PropTypes.func,
 
};
export default Loader;