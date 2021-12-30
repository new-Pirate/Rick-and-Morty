import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { gerCharactersList } from '../../store/actions/characters.js';
import { filterPagination } from '../../hooks/filterPagination';

import './Pagination.scss';

function Pagination({ pagesList, term }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.charactersReduser.loading);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterPages, setFilterPages] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
  }, [term]);

  useEffect(() => {
    setFilterPages(filterPagination(pagesList, currentPage));
  }, [pagesList]);

  const activePage = (page) => {
    setCurrentPage(page);
    if (term.length > 2) {
      dispatch(gerCharactersList(term, page));
    } else if (term === '') {
      dispatch(gerCharactersList('', page));
    };
  };

  return (
    <div className={loading ? 'pagination pagination_hide' : 'pagination'}>
      {
        filterPages.map((page) => {
          if (page > 2 && page < currentPage) {
            return <div className='pagination__page' key={page}>
              <div className='pagination__dots'>...</div>
              <div
                className={currentPage === page ? 'pagination__number pagination__number_active' : 'pagination__number'}
                key={page}
                onClick={() => activePage(page)}
              >
                {page}
              </div>
            </div>
          } else if (page < pagesList.length - 1 && page > currentPage) {
            return <div className='pagination__page' key={page}>
              <div
                className={currentPage === page ? 'pagination__number pagination__number_active' : 'pagination__number'}
                onClick={() => activePage(page)}
              >
                {page}
              </div>
              <div className='pagination__dots'>...</div>
            </div>
          } else {
            return <div className='pagination__page' key={page}>
              <div
                className={currentPage === page ? 'pagination__number pagination__number_active' : 'pagination__number'}
                onClick={() => activePage(page)}
              >
                {page}
              </div>
            </div>
          }
        })
      }
    </div>
  );
};

export default Pagination;
