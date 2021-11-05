import Button from "../Button";
import PropTypes from 'prop-types';

const Searchbar = ({onSubmit, valueInput, onChange}) => {
    return (
        <>
        <header className="Searchbar">
                <form className="SearchForm" onSubmit={ onSubmit}>
              
                    <Button />
                <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={valueInput}
                        onChange={onChange}
                />
            </form>
        </header>
        </>
    )
};
Searchbar.propTypes = {
  valueInput: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
 
};
    export default Searchbar;