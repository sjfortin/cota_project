import PlayerInfo from './PlayerInfoPromise';
import Settings from './Settings';
import Sorter from './Sorter';
import CotaData from './CotaData';
import EventListeners from './EventListeners';
import Pagination from './Pagination';

const CotaComponent = {
  cotaData: CotaData,
  playerInfo: PlayerInfo,
  sorter: Sorter,
  eventListeners: EventListeners,
  pagination: Pagination,
  start() {
    this.playerInfo.getAllPlayers();
    this.eventListeners.bindEvents();
  }
};

export default CotaComponent;
