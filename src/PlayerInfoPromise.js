const PlayerInfo = {
  getPlayers(currentPage) {
    let playersUrl = this.apiUrl + `?page=${this.currentPage}&per_page=${this.limitPerPage}`;

    return fetch(playersUrl).then(resp => {
      return resp.json();
    });
  },
  getAllPlayers() {
    if (this.currentPage >= 10) {
      return;
    }

    this.getPlayers(this.currentPage).then(response => {
      this.playerData = this.playerData.concat(response.data);

      console.log(this.playerData);

      if (this.currentPage === 1) {
        this.renderPlayers(response.data);
      }

      this.currentPage++;
      this.getAllPlayers();
    });
  },
  renderPlayers(players) {
    let numOfPlayersToRender =
      players.length < this.numberOfPlayersPerPage ? players.length : this.numberOfPlayersPerPage;

    const playersContainer = document.querySelector('.players');

    // need to empty out the player container
    while (playersContainer.firstChild) {
      playersContainer.removeChild(playersContainer.firstChild);
    }

    for (let i = 0; i < numOfPlayersToRender; i++) {
      let player = players[i];
      let playerUI = document.createElement('div');
      playerUI.innerHTML = `${player.first_name} ${player.last_name}`;
      playerUI.style.cssText = 'color: slate; border: 1px solid lightgray; padding: 5px; margin: 5px 0';
      playersContainer.append(playerUI);
    }
  }
};

export default PlayerInfo;
