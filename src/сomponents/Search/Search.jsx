import './Search.scss';

function Search() {
  return (
    <div className="search">
      <input
        type="text"
        placeholder='Поиск персонажей'
        className='search__input'
      />
    </div>
  );
}

export default Search;
