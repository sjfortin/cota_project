import _ from 'lodash';
import playerInfo from './init';
import gameInfo from './game';

const CotaApp = () => {
  let data = {
    playerData: [],
    gameData: []
  };

  return Object.assign(data, playerInfo(data), gameInfo(data));
};

window.Cota = CotaApp();

Cota.getPlayers();
Cota.getGames();
