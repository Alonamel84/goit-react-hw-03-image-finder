import { Component } from "react";
import PropTypes from 'prop-types';
import ModalWin from "../Modal/Modal.jsx";
class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false
    }
    onToggleModal = () => {
        this.setState(({ isModalOpen }) => ({
            isModalOpen: !isModalOpen
        }))
    }

    render() {
        const { id, src, alt, largeImageURL } = this.props;
          return (
        
              <li className="ImageGalleryItem"  id={id}>
            <img src={src} alt={ alt}  onClick={ this.onToggleModal} className="ImageGalleryItem-image" />
         {this.state.isModalOpen && <ModalWin onModalClose={this.onToggleModal} hits={largeImageURL}/>}
        </li >
            
 
    )
    }
}
 ImageGalleryItem.propTypes = {
     alt: PropTypes.string,
     id: PropTypes.number,
     largeImageURL: PropTypes.string,
     src: PropTypes.string,
             
};

export default ImageGalleryItem;