import './App.css';
import './styles/styles.css';
import Loader from './components/Loader';
import Searchbar from './components/Searchbar';
import LoaderIcon from './components/Loader/LoaderIcon';
import ImageGallery from './components/ImageGallery';
import { getImages } from './api/api';
import { Component } from 'react';

class App extends Component {
  state = {
    hits: [],
    query: 'all',
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query || this.state.page !== prevState.page) {
      this.getGallery();
    }
  }

  handleSubmit = query => {
    this.setState({ query: query, page: 1, hits: [] });
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
      .finally(() => {
        if (this.state.page >= 2) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
        this.setState({ isLoading: false });
      });
  };
  handleChangePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { hits } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery hits={hits} />
        {this.state.isLoading && <LoaderIcon />}
        {this.state.hits.length && this.state.hits !== [] && (
          <Loader onClick={this.handleChangePage} onChange={this.getGallery} />
        )}
      </div>
    );
  }
}

export default App;
