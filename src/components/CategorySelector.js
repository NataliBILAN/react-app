import React from 'react';

const CategorySelector = ({ value, onChange, options }) => (
  <select value={value} onChange={e => onChange(e.target.value)}>
    {options.map(opt => (
      <option key={opt.id} value={opt.name}>
        {opt.name}
      </option>
    ))}
  </select>
);
export default CategorySelector;
