import React from 'react';

const CurrentFilter = ({ category, onClear }) => (
  <div>
    <p>Текущий фильтр:{category}</p>
    <button type="button" onClick={onClear}>
      Очистить фильтр
    </button>
  </div>
);

export default CurrentFilter;
