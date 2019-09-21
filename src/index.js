import playerInfo from './playerInfo';
// import gameInfo from './gameInfo';

window.CotaApp = Object.create(playerInfo);

CotaApp.version = '1.0.0';

// init code
CotaApp.getAllPlayers();
// CotaApp.getGames();
