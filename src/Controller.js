import PlayerInfo from './PlayerInfo';
import Sorter from './Sorter';

const settings = {
  currentPage: 1,
  limitPerPage: 100,
  numberOfPlayersPerPage: 10,
  apiUrl: 'https://www.balldontlie.io/api/v1/players'
};

const state = {
  playerData: [],
  gameData: []
};

const Controller = Object.create(PlayerInfo);

Controller.sorter = Object.create(Sorter);

Controller.settings = settings;

Controller.state = state;

export default Controller;
