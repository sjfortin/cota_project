import PlayerInfo from './PlayerInfo';
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
    this.playerInfo.getPlayers(1);
    this.eventListeners.bindEvents();
  }
};

export default CotaComponent;
