import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'soup', label: 'soup' },
  { value: 'dessert', label: 'dessert' },
  { value: 'salad', label: 'salad' },
  { value: 'main course', label: 'main course' },
];
const CategorySelector = ({ value, onChange }) => (
  <Select
    value={value}
    onChange={onChange}
    options={options}
    placeholder="Категория"
  />
);
export default CategorySelector;
