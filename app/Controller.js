import PlayerInfo from './PlayerInfoPromise';
import Settings from './Settings';
import Sorter from './Sorter';
import CotaData from './CotaData';
import EventListeners from './EventListeners';
import Pagination from './Pagination';

let Controller = Object.create(null);

Controller = {
  ...Controller,
  ...PlayerInfo,
  ...Sorter,
  ...Settings,
  ...CotaData,
  ...EventListeners,
  ...Pagination,
  start() {
    this.getAllPlayers();
    this.bindEvents();
  }
};

export default Controller;
