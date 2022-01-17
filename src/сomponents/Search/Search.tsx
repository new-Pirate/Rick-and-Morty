import React from 'react';

import './Search.scss';

interface ISearch {
  onSearch: () => void;
}

function Search({onSearch}: ISearch) {
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
};

export default Search;
