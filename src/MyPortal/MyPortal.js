import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

class MyPortal extends Component {
  constructor(props) {
    super(props);
    this.overlayContainer = document.createElement('div');
    document.body.appendChild(this.overlayContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.overlayContainer);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="overlay">
        <span onClick={this.props.onClose}>x</span>
        {this.props.children}
      </div>,
      this.overlayContainer
    );
  }
}

export default MyPortal;
