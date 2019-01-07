import React from 'react';
// import Select from 'react-select';
import { addNewDish, getCategories } from '../api/api';
import AddNewDishForm from '../components/AddNewDishForm';

const AddNewDishPage = props => (
  <AddNewDishForm
    onAddNewDish={addNewDish}
    onGetCatergories={getCategories}
    history={props.history}
  />
);
export default AddNewDishPage;
