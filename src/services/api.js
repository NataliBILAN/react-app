import axios from 'axios';

const BASE_URL = 'http://localhost:3000/orders';

const getAllOrders = () => axios.get(BASE_URL).then(response => response.data);

const getOrdersById = id =>
  axios.get(`${BASE_URL}/${id}`).then(response => response.data);

const deleteOrder = id =>
  axios.delete(`${BASE_URL}/${id}`).then(response => response.status === 200);

const addNewOrder = order =>
  axios.post(BASE_URL, order).then(response => response.data);

export { getAllOrders, getOrdersById, deleteOrder, addNewOrder };
