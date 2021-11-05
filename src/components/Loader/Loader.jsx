import LoaderIcon from "./LoaderIcon.jsx";
import PropTypes from 'prop-types';
const Loader = ({ onClick, onChange }) => {
 
    return (
        <button type='button' onClick={onClick} onChange={ onChange}>Load More
        </button>
        
    )
};
Loader.propTypes = {
    onclick: PropTypes.func,
    onChange: PropTypes.func,
 
};
export default Loader;