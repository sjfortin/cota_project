const PlayerInfo = {
  pageToGet: 1,
  getPlayers(currentPage) {
    let playersUrl = this.apiUrl + `?page=${currentPage}&per_page=${this.limitPerPage}`;

    return fetch(playersUrl).then(resp => {
      return resp.json();
    });
  },
  getAllPlayers() {
    if (this.playerMetaData && this.pageToGet > this.playerMetaData.total_pages) {
      return;
    }

    this.getPlayers(this.pageToGet).then(response => {
      
      if (this.pageToGet === 1) {
        this.playerMetaData = response.meta;
        this.renderPlayers(response.data);
        console.log(this.generatePageRange(this.playerMetaData.current_page, this.playerMetaData.total_pages));
      }
      
      this.playerData = this.playerData.concat(response.data);
      this.pageToGet++;
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
