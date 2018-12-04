import React from 'react';

// const styles = {
//   backdrop: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100vw',
//     height: '100vh',
//     backgroundColor: 'rgba(0, 0, 0, 0.2)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modal: {
//     maxWidth: 400,
//     minHeight: 200,
//     backgroundColor: '#fff',
//     padding: 16,
//   },
// };

const OrderMoreInfo = ({ orders, onClose }) => (
  <div onClick={onClose}>
    <div>
      <p>Date: {orders}</p>

      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  </div>
);
export default OrderMoreInfo;
