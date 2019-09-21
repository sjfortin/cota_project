const playerInfo = {
  currentPage: 1,
  playerData: [],
  limitPerPage: 100,
  numberOfPlayersPerPage: 10,
  apiUrl: 'https://www.balldontlie.io/api/v1/players',
  async getPlayers(currentPage) {
    let actualUrl = this.apiUrl + `?page=${this.currentPage}&per_page=${this.limitPerPage}`;

    var apiResults = await fetch(actualUrl).then(resp => {
      return resp.json();
    });

    return apiResults;
  },
  async getAllPlayers() {
    if (this.currentPage >= 10) {
      return;
    }
    const results = await this.getPlayers(this.currentPage);

    this.playerData = this.playerData.concat(results.data);

    console.log(this.playerData);

    if (this.currentPage === 1) {
      this.renderPlayers(results.data);
    }

    this.currentPage++;

    this.getAllPlayers();
  },
  renderPlayers(players) {
    const playersContainer = document.querySelector('.players');

    // need to empty out the player container
    while (playersContainer.firstChild) {
      playersContainer.removeChild(playersContainer.firstChild);
    }

    for (let i = 0; i < this.numberOfPlayersPerPage; i++) {
      let player = players[i];
      let playerUI = document.createElement('div');
      playerUI.innerHTML = `${player.first_name} ${player.last_name}`;
      playerUI.style.cssText = 'color: slate; border: 1px solid lightgray; padding: 5px; margin: 5px 0';
      playersContainer.append(playerUI);
    }

    // players.forEach(player => {
    //   let playerUI = document.createElement('div');
    //   playerUI.innerHTML = `${player.first_name} ${player.last_name}`;
    //   playerUI.style.cssText = 'color: slate; border: 1px solid lightgray; padding: 5px; margin: 5px 0';
    //   playersContainer.append(playerUI);
    // });
  },
  sortPlayersAsc(players) {
    return players.sort((a, b) => (a.last_name > b.last_name ? 1 : -1));
  },
  sortPlayersDesc(players) {
    return players.sort((a, b) => (a.last_name > b.last_name ? -1 : 1));
  }
};

export default playerInfo;
