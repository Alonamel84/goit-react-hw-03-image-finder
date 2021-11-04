import { Component } from 'react';
export default class ModalWin extends Component {
  handleKeyDown= e => {
      if (e.code === 'Escape') {
        this.props.onClose()
      }
    }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown )
  }
  componentWillUnmount() {
   window.removeEventListener('keydown', this.handleKeyDown)
  }
  render() {
    return (
      <div className="Overlay">
        <div className="Modal" onClick={ this.props.onClose} >
          <img src={this.props.hits} alt={ this.props.hits} />
        </div>
      </div>
    )
  }
};
