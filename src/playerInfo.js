const playerInfo = {
  currentPage: 1,
  playerData: [],
  limitPerPage: 50,
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
    this.currentPage++;
    this.playerData = this.playerData.concat(results.data);
    console.log(this.playerData);
    this.renderPlayers(results.data);
    this.getAllPlayers();
  },
  renderPlayers(players) {
    const playersContainer = document.querySelector('.players');

    players.forEach(player => {
      let playerUI = document.createElement('div');
      playerUI.innerHTML = `${player.first_name} ${player.last_name}`;
      playerUI.style.cssText = 'color: slate; border: 1px solid lightgray; padding: 5px; margin: 5px 0';
      playersContainer.append(playerUI);
    });
  }
};

export default playerInfo;
