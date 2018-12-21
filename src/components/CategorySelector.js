import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'soup', label: 'soup' },
  { value: 'dessert', label: 'dessert' },
  { value: 'salad', label: 'salad' },
  { value: 'main course', label: 'main course' },
];
const CategorySelector = ({ value, onChange }) => (
  // <Select value={value} onChange={e => onChange(e.target.value)}>
  //   {options.map(opt => (
  //     <option key={opt.id} value={opt.name}>
  //       {opt.name}
  //     </option>
  //   ))}
  // </Select>

  <Select value={value} onChange={onChange} options={options} />
);
export default CategorySelector;
