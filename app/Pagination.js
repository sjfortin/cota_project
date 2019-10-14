import CotaData from './CotaData';

const Pagination = {
  generatePageRange(currentPage, lastPage) {
    const delta = 2;

    const range = [];

    // TODO: Need to fix the number of pages coming back to the generation here
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(lastPage - 1, currentPage + delta); i += 1) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      range.unshift('...');
    }

    if (currentPage + delta < lastPage - 1) {
      range.push('...');
    }

    range.unshift(1);

    if (lastPage !== 1) {
      range.push(lastPage);
    }

    return range;
  },
  renderPagination(pageRange) {
    // TODO: need to remove the data page from non page buttons. e.g the ellipses...
    let pageRangeForDisplay = `<ul style="list-style-type: none; margin: 0; padding: 0; display: flex; justify-content: center;">
        ${pageRange.map(item => `<li><button data-page=${item}>${item}</button></li>`).join('')}
      </ul>`;

    document.getElementById('pagination').innerHTML = pageRangeForDisplay;
  }
};

export default Pagination;
