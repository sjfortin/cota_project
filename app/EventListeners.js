import Sorter from './Sorter';
import CotaData from './CotaData';
import PlayerInfo from './PlayerInfo';
import Pagination from './Pagination';

const EventListeners = {
  bindEvents() {
    const sortPlayersSelect = document.getElementById('sortPlayers');
    const pagination = document.getElementById('pagination');

    sortPlayersSelect.addEventListener('change', event => {
      switch (sortPlayersSelect.value) {
        case 'asc':
          Sorter.sortPlayersAsc(CotaData.playerData);
          break;

        case 'desc':
          Sorter.sortPlayersDesc(CotaData.playerData);
          break;

        default:
          break;
      }

      PlayerInfo.renderPlayers(CotaData.playerData);
    });

    pagination.addEventListener('click', event => {
      console.log(event.target.dataset.page); // TODO: work on event delegation for the pagination
      PlayerInfo.getPlayers(event.target.dataset.page);
    });
  }
};

export default EventListeners;
