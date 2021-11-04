import './App.css';
import './styles/styles.css';
import Loader from './components/Loader';
import Searchbar from './components/Searchbar';
import { Rings } from './components/Loader/LoaderImg';
import ImageGallery from './components/ImageGallery';
import { getImages } from './api/api';
import { Component } from 'react';

class App extends Component {
  state = {
    hits: [],
    query: 'all',
    inputText: '',
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query || this.state.page !== prevState.page) {
      this.getGallery();
    }
  }

  handleChange = e => {
    this.setState({ inputText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ query: this.state.inputText, page: 1, hits: [] });
  };

  getGallery = () => {
    this.setState({ isLoading: true });
    getImages(this.state.query, this.state.page)
      .then(hits =>
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
        })),
      )
      .catch(err => this.setState({ error: err }))
      .finally(() => this.setState({ isLoading: false }));
  };
  handleChangePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { hits, inputText } = this.state;
    return (
      <div className="App">
        {this.state.isLoading && <div>{Rings}</div>}
        <Searchbar
          onSubmit={this.handleSubmit}
          valueInput={inputText}
          onChange={this.handleChange}
        />
        <ImageGallery hits={hits} />
        {this.state.hits.length % 12 === 0 && <Loader />}
      </div>
    );
  }
}

export default App;
