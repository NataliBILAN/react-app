import React from 'react';

const OrderHistoryList = ({ orderHistory, onDelete, onShowMoreInfo }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Price</th>
        <th>Delivery adress</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      {orderHistory.map(order => (
        <tr key={order.id}>
          <td>{order.date}</td>
          <td>{order.price}</td>
          <td>{order.address}</td>
          <td>{order.rating}</td>
          <td>
            <button type="button" onClick={() => onDelete(order.id)}>
              Удалить
            </button>
          </td>
          <td>
            <button type="button" onClick={() => onShowMoreInfo(order.id)}>
              Детальнее
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default OrderHistoryList;
