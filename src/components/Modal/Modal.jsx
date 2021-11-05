import { Component } from 'react';
export default class ModalWin extends Component {
  handleKeyDown = e => {
    e.preventDefault()
    if (e.target !== e.currentTarget) {
      console.log(e.target.nodeName !== "IMG")
        this.props.onModalClose()
      }
  }
  closeByKey = (e) => {
  e.code === 'Escape' && this.props.onModalClose()
  }
  componentDidMount() {
    window.addEventListener('keydown', this.closeByKey)
    //  window.addEventListener('click', this.handleKeyDown)
  
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByKey)
    //  window.addEventListener('click', this.handleKeyDown)
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
