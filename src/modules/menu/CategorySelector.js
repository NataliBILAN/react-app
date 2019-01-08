import React from 'react';
import Select from 'react-select';

const CategorySelector = ({ value, options, onChange }) => (
  <Select
    value={value}
    onChange={onChange}
    options={options}
    placeholder="Категория"
  />
);

export default CategorySelector;
