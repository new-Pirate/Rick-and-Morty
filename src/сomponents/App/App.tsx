import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Search from '../Search/Search';
import Pagination from '../Pagination/Pagination';
import CardList from '../CardList/CardList';
import { gerCharactersList } from '../../store/actions/characters';
import { useDebounced } from '../../hooks/useDebounce'
import { RootState } from '../../store';

import './App.scss';

function App() {
  const dispatch = useDispatch();
  const characters = useSelector((state: RootState) => state.charactersReduser.charactersList);
  const pages = useSelector((state: RootState) => state.charactersReduser.pages);
  const [term, setTerm] = useState<string>('');
  const [arrPages, setArrPages] = useState<Array<number>>([]);

  useEffect(() => {
    if (term.length > 2) {
      dispatch(gerCharactersList(term));
    } else if (term === '') {
      dispatch(gerCharactersList(''));
    }
  }, [dispatch, term]);

  useEffect(() => {
    const arr = Array(pages).fill(null).map((page, i) => i + 1);
    setArrPages(arr);
  }, [pages]);

  const onSearch = useDebounced((e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  });

  return (
    <div className="app">
      <Search onSearch={onSearch} />
      <Pagination pagesList={arrPages} term={term} />
      <CardList cardList={characters} />
    </div>
  );
};

export default App;
