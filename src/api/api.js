import axios from 'axios';
const API_KEY = '23793325-ff2052386c334e2849b34704b';
// const API_KEY = '9a3e6cf9d6c643e5a70b43ecc2de2e2f';
// const API_KEY = '79fa6b1eb30a455588335102c0b1e4d1';

//pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.baseURL = 'https://newsapi.org/v2';
const setParams = params => (axios.defaults.params = { key: API_KEY, ...params });
// const setParams = params => (axios.defaults.params = { apiKey: API_KEY, ...params });
export const getImages = (query, page = 1) => {
  setParams({
    q: query,
    webformatURL: '',
    largeImageURL: '',
    id: '',
    per_page: 12,
    page,
  });
  return axios
    .get()
    .then(({ data }) => data.hits)
    .catch(err => {
      throw err;
    });
  // return axios.get('everything').then(({ data }) =>
  //   data.articles.map(({ urlToImage, title }) => ({
  //     webformatURL: urlToImage,
  //     tags: title,
  //     largeImageURL: urlToImage,
  //   })),
  // );
};
