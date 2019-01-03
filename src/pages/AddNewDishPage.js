import React from 'react';
// import Select from 'react-select';
import { addNewDish } from '../api/api';
import AddNewDishForm from '../components/AddNewDishForm';

const AddNewDishPage = props => (
  <AddNewDishForm onAddNewDish={addNewDish} history={props.history} />
);
export default AddNewDishPage;
