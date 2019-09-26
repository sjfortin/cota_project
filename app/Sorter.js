const Sorter = {
  sortPlayersAsc(players) {
    return players.sort((a, b) => (a.last_name > b.last_name ? 1 : -1));
  },
  sortPlayersDesc(players) {
    return players.sort((a, b) => (a.last_name > b.last_name ? -1 : 1));
  }
};

export default Sorter;
