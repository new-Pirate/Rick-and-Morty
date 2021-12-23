import React from 'react';

import './Search.scss';

function Search({onSearch}) {

  return (
    <div className="search">
      <input
        type="text"
        placeholder='Поиск персонажей'
        className='search__input'
        onChange={onSearch}
      />
    </div>
  );
}

export default Search;
