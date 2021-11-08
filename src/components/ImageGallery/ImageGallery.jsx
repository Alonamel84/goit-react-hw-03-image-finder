import ImageGalleryItem from '../ImageGalleryItem'
import PropTypes from 'prop-types';

const ImageGallery = ({  hits }) => {
    return (
        <ul className="ImageGallery" >
            {hits.map(item => (
                <ImageGalleryItem
                    key={item.webformatURL}
                    id={item.id}
                    src={item.webformatURL}
                    largeImageURL={item.largeImageURL}
                     alt={item.tags}
                ></ImageGalleryItem >
            ))}</ul>
    )
 
};
   ImageGallery.propTypes = {
  hits: PropTypes.array, 
};
export default ImageGallery;