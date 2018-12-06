import React, { Component, createRef } from 'react';

const styles = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    maxWidth: 600,
    minHeight: 300,
    backgroundColor: '#fff',
    padding: 16,
  },
};

export default class OrderModal extends Component {
  containerRef = createRef();

  componentWillMount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }

  handleBackDropClick = e => {
    if (e.target !== this.containerRef.current) return;
    this.props.onClose();
  };

  handleEscape = e => {
    if (e.code !== 'Escape') return;
    this.props.onClose();
  };

  render() {
    const { onClose } = this.props;

    return (
      <div
        style={styles.backdrop}
        onClick={this.handleBackDropClick}
        ref={this.containerRef}
      >
        <div style={styles.modal}>
          {this.props.children}
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
