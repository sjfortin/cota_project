import PlayerInfo from './PlayerInfo';
import PlayerInfoPromise from './PlayerInfoPromise';
import Sorter from './Sorter';
import State from './State';

const settings = {
  currentPage: 1,
  limitPerPage: 100,
  numberOfPlayersPerPage: 10,
  apiUrl: 'https://www.balldontlie.io/api/v1/players'
};

const Controller = Object.create(PlayerInfoPromise);

Controller.sorter = Sorter;

Controller.settings = settings;

Controller.state = State;

export default Controller;
