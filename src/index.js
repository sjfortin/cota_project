import Controller from './Controller';

window.CotaApp = Object.create(Controller)

CotaApp.version = '1.0.0';

// init code
CotaApp.getAllPlayers();
CotaApp.bindEvents();