import axios from 'axios';
const API_KEY = '23793325-ff2052386c334e2849b34704b';

//pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
axios.defaults.baseURL = 'https://pixabay.com/api/';
const setParams = params => (axios.defaults.params = { key: API_KEY, ...params });

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
};
// getImages();
