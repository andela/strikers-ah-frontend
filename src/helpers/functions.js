export const paginate = (pageSize = 10, currentPage = 0, elements = []) => {
  const startIndex = currentPage * pageSize;
  const finalIndex = startIndex + pageSize;
  const currentPageElements = elements.slice(startIndex, finalIndex);
  return currentPageElements;
};
export const page = 5;
