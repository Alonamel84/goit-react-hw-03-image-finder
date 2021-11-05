import { Component } from 'react';
import PropTypes from 'prop-types';
export default class ModalWin extends Component {
  handleKeyDown = e => {
    e.preventDefault()

    if (e.target === e.currentTarget) {
        this.props.onModalClose()
      }
  }
  closeByKey = (e) => {
  e.code === 'Escape' && this.props.onModalClose()
  }
  componentDidMount() {
    window.addEventListener('keydown', this.closeByKey)
    const body = document.querySelector('body');
    body.style.overflow = "hidden";  
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByKey)
     const body = document.querySelector('body');
    body.style.overflow = "auto";
    
  }
  render() {
    return (
      <div className="Overlay" onClick= {this.handleKeyDown} >
        <div className="Modal"  >
          <img src={this.props.hits} alt={ this.props.hits} />
        </div>
      </div>
    )
  }
};
ModalWin.propTypes = {
    hits: PropTypes.string,
    onModalClose: PropTypes.func,
};