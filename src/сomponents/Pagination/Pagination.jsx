import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { gerCharactersList } from '../../store/actions/characters.js';

import './Pagination.scss';

function Pagination({ pagesList, term }) {
  const dispatch = useDispatch();
  const arrPages = Array(pagesList).fill(null).map((page, i) => i + 1);
  const [currentPage, setCurrentPage] = useState(1);

  const activePage = (page) => {
    setCurrentPage(page);
    if (term.length > 2) {
      dispatch(gerCharactersList(term, page));
    } else if (term === '') {
      dispatch(gerCharactersList('', page));
    };
  };

  return (
    <div className="pagination">
      {
        arrPages.map((page) => {
          return <div
            className={currentPage === page ? 'pagination__page pagination__page_active' : 'pagination__page'}
            key={page}
            onClick={() => activePage(page)}
          >
            {page}
          </div>
        })
      }
    </div>
  );
};

export default Pagination;
