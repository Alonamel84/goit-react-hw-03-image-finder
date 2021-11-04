import { Component } from "react";
import ModalWin from "../Modal/Modal.jsx";
class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false
    }
    onToggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen})
    }

    render() {
        const { id, src, alt, largeImageURL } = this.props;
          return (
        
        <li className="ImageGalleryItem" id={id} onClick={ this.onToggleModal}>
            <img src={src} alt={ alt} className="ImageGalleryItem-image" />
         {this.state.isModalOpen && <ModalWin  onClose={this.onToggleModal} hits={largeImageURL}/>}
        </li >
            
 
    )
    }
}
// const ImageGalleryItem = ({ src, alt, id, showModal, largeImageURL, onClose }) => {
//     return (
        
//         <li className="ImageGalleryItem" id={id} onClick={ onClose}>
//             <img src={src} alt={ alt} className="ImageGalleryItem-image" />
//          {showModal && <ModalWin  onClose={onClose} hits={largeImageURL}/>}
//         </li >
            
 
//     )
// };
export default ImageGalleryItem;