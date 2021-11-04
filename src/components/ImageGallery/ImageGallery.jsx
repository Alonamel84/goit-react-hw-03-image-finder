import ImageGalleryItem from '../ImageGalleryItem'

const ImageGallery = ({ children, hits, onClose }) => {
    return (
        <ul className="ImageGallery" >
            {hits.map(item => (
                <ImageGalleryItem
                    onClose={onClose}
                    key={item.id}
                    id={item.id}
                    src={item.webformatURL}
                    largeImageURL={item.largeImageURL}
                     alt={item.tags}
                    // showModal={ showModal}
                ></ImageGalleryItem >
            ))}</ul>
    )
};
export default ImageGallery;