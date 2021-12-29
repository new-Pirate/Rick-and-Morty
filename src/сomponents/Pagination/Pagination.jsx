import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { gerCharactersList } from '../../store/actions/characters.js';

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
    filterPagination();
  }, [pagesList]);

  const filterPagination = () => {
    if (pagesList.length !== 0 && pagesList.length !== 1) {
      if (currentPage === 1) {
        setFilterPages([currentPage, pagesList[1], pagesList[pagesList.length - 1]]);
      } else if (currentPage === pagesList[pagesList.length - 1]) {
        setFilterPages([pagesList[0], pagesList[pagesList.length - 2], currentPage]);
      } else if (currentPage === pagesList[1]) {
        setFilterPages([pagesList[0], currentPage, currentPage + 1, pagesList[pagesList.length - 1]]);
      } else if (currentPage === pagesList[pagesList.length - 2]) {
        setFilterPages([pagesList[0], currentPage - 1, currentPage, pagesList[pagesList.length - 1]]);
      } else {
        setFilterPages([pagesList[0], currentPage - 1, currentPage, currentPage + 1, pagesList[pagesList.length - 1]]);
      };
    };
  };

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
