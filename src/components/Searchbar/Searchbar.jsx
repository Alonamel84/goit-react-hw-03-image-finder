import Button from "../Button";
import PropTypes from 'prop-types';
import { Component } from 'react';


class Searchbar extends Component {
    state = {
         inputText: '',
    }
     handleChange = e => {
    this.setState({ inputText: e.target.value });
    };
     handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputText === '') return alert('Please insert your query for search');
    this.props.onSubmit(this.state.inputText)
    this.setState({ inputText:""});
  };
   
    render() {
        return (
            <>
                <header className="Searchbar">
                    <form className="SearchForm" onSubmit={this.handleSubmit}>
              
                        <Button />
                        <input
                            className="SearchForm-input"
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            value={this.state.inputText}
                            onChange={this.handleChange}
                        />
                    </form>
                </header>
            </>
        )
    }
};
Searchbar.propTypes = {
  valueInput: PropTypes.string,
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
 
};
    export default Searchbar;