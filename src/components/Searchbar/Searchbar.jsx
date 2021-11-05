import Button from "../Button";

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
  contact: PropTypes.array,
  onSubmit: PropTypes.func,
};
    export default Searchbar;