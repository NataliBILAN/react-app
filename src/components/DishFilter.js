import React from 'react';

const DishFilter = ({filter, onFilterChange}) =>(
    <div>
<h4>Enter what you want to try</h4>    
<input 
type="text"
value={filter}
onChange={onFilterChange}
autoFocus
/>
</div>
)

export default DishFilter;