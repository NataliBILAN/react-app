import React from 'react';

const NoteFilter = ({ value = '', onChange = () => null }) => (
  <input
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
    placeholder="Search"
  />
);
export default NoteFilter;
