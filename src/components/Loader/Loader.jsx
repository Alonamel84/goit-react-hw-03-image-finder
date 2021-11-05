import LoaderIcon from "./LoaderIcon.jsx";
const Loader = ({ onClick, onChange }) => {
 
    return (
        <button type='button' onClick={onClick} onChange={ onChange}>Load More
        {/* <LoaderIcon/> */}
        </button>
        
    )
};

export default Loader;