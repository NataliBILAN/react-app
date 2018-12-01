import React, { Component } from 'react';

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
    maxWidth: 300,
    minHeight: 200,
    backgroundColor: '#fff',
    padding: 16,
  },
};

export default class OrderMoreInfo extends Component {
  render() {
    const { date, price, address, rating, onClose } = this.props;

    return (
      <div style={styles.backdrop} onClick={onClose} ref={this.containerRef}>
        <div style={styles.modal}>
          <p>Date: {date}</p>
          <p>Price: {price}</p>
          <p>Address: {address}</p>
          <p>Rating: {rating}</p>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
