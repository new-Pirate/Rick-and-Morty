export const filterPagination = (pagesList, currentPage) => {
  if (pagesList.length !== 0 && pagesList.length !== 1) {
    if (currentPage === 1) {
      return [currentPage, pagesList[1], pagesList[pagesList.length - 1]];
    } else if (currentPage === pagesList[pagesList.length - 1]) {
      return [pagesList[0], pagesList[pagesList.length - 2], currentPage];
    } else if (currentPage === pagesList[1]) {
      return [pagesList[0], currentPage, currentPage + 1, pagesList[pagesList.length - 1]];
    } else if (currentPage === pagesList[pagesList.length - 2]) {
      return [pagesList[0], currentPage - 1, currentPage, pagesList[pagesList.length - 1]];
    } else {
      return [pagesList[0], currentPage - 1, currentPage, currentPage + 1, pagesList[pagesList.length - 1]];
    };
  } else {
    return [];
  };
};
