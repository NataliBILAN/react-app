import React from 'react';

const CategorySelector = ({ value, onChange, options }) => (
  <select value={value} onChange={e => onChange(e.target.value)}>
    {options.map(opt => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);
export default CategorySelector;
