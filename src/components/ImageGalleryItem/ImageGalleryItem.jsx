import { Component } from "react";
import ModalWin from "../Modal/Modal.jsx";
class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false
    }
    onToggleModal = (e) => {
        console.log(e)
        this.setState({ isModalOpen: !this.state.isModalOpen})
    }

    render() {
        const { id, src, alt, largeImageURL } = this.props;
          return (
        
              <li className="ImageGalleryItem"  id={id} onClick={ this.onToggleModal}>
            <img src={src} alt={ alt} className="ImageGalleryItem-image" />
         {this.state.isModalOpen && <ModalWin onModalClose={this.onToggleModal} hits={largeImageURL}/>}
        </li >
            
 
    )
    }
}

export default ImageGalleryItem;