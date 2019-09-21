const PlayerInfo = {
  async getPlayers(currentPage) {
    let actualUrl = this.settings.apiUrl + `?page=${this.settings.currentPage}&per_page=${this.settings.limitPerPage}`;

    let apiResults = await fetch(actualUrl).then(resp => {
      return resp.json();
    });

    return apiResults;
  },
  async getAllPlayers() {
    if (this.settings.currentPage >= 10) {
      return;
    }
    const results = await this.getPlayers(this.settings.currentPage);

    this.state.playerData = this.state.playerData.concat(results.data);

    console.log(this.state.playerData);

    if (this.settings.currentPage === 1) {
      this.renderPlayers(results.data);
    }

    this.settings.currentPage++;

    this.getAllPlayers();
  },
  renderPlayers(players) {
    const playersContainer = document.querySelector('.players');

    // need to empty out the player container
    while (playersContainer.firstChild) {
      playersContainer.removeChild(playersContainer.firstChild);
    }

    for (let i = 0; i < this.settings.numberOfPlayersPerPage; i++) {
      let player = players[i];
      let playerUI = document.createElement('div');
      playerUI.innerHTML = `${player.first_name} ${player.last_name}`;
      playerUI.style.cssText = 'color: slate; border: 1px solid lightgray; padding: 5px; margin: 5px 0';
      playersContainer.append(playerUI);
    }
  }
};

export default PlayerInfo;
