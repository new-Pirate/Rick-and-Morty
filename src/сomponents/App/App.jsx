import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Search from '../Search/Search';
import Pagination from '../Pagination/Pagination';
import CardList from '../CardList/CardList';
import { gerCharactersList } from '../../store/actions/characters.js';

import'./App.scss';

function App() {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.charactersReduser.charactersList);
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length > 2) {
      dispatch(gerCharactersList(term));
    } else if(term ==='') {
      dispatch(gerCharactersList(''));
    }
  }, [term]);

  const onSearch = (e) => {
    setTerm(e.target.value);

  }

  return (
    <div className="app">
      <Search onSearch={onSearch} />
      <Pagination />
      <CardList cardList={characters} />
    </div>
  );
}

export default App;
