import React from 'react';
import '../App.css';

const FilterBox = ({ filterText, setFilterText }) => {
  return (
    <div className="filter-box">
      <input
        type="text"
        placeholder="Filter by name..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="filter-input"
      />
    </div>
  );
};

export default FilterBox;
