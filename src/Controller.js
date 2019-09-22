import PlayerInfo from './PlayerInfoPromise';
import Settings from './Settings';
import Sorter from './Sorter';
import State from './State';
import EventListeners from './EventListeners';

let Controller = Object.create(null);

Controller = { ...Controller, ...PlayerInfo, ...Sorter, ...Settings, ...State, ...EventListeners };

export default Controller;
