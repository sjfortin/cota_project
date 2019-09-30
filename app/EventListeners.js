import Sorter from './Sorter';
import CotaData from './CotaData';
import PlayerInfo from './PlayerInfoPromise';
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
      console.log(event); // TODO: work on event delegation for the pagination
      if (event.target !== false) {
        return
      }
      PlayerInfo.renderPlayers(Pagination.getPlayersToRenderByPage(event.target.dataset.page));
    });
  }
};

export default EventListeners;
