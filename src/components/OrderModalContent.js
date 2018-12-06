import React from 'react';

const OrderModalContent = ({ selectedItem }) => (
  <div>
    <p>ID: {selectedItem.id}</p>
    <p>Date of order: {selectedItem.date}</p>
    <p>Order price: {selectedItem.price}</p>
    <p>Delivery address: {selectedItem.address}</p>
    <p>Rating: {selectedItem.rating}</p>
  </div>
);
export default OrderModalContent;
