import CotaData from './CotaData';
import Pagination from './Pagination';

const PlayerInfo = {
  pageToGet: 1,
  getPlayers(currentPage) {
    let playersUrl = CotaData.apiUrl + `?page=${currentPage}&per_page=${CotaData.limitPerPage}`;

    return fetch(playersUrl).then(resp => {
      return resp.json();
    });
  },
  getAllPlayers() {
    if (CotaData.playerMetaData && this.pageToGet > CotaData.playerMetaData.total_pages) {
      return;
    }

    this.getPlayers(this.pageToGet).then(response => {
      if (this.pageToGet === 1) {
        CotaData.playerMetaData = response.meta;
        this.renderPlayers(response.data);
        CotaData.pageRange = Pagination.generatePageRange(
          CotaData.playerMetaData.current_page,
          CotaData.playerMetaData.total_pages
        );
        Pagination.renderPagination();
      }

      CotaData.playerData = CotaData.playerData.concat(response.data);
      this.pageToGet++;
      this.getAllPlayers();
    });
  },
  renderPlayers(players) {
    let numOfPlayersToRender =
      players.length < CotaData.numberOfPlayersPerPage ? players.length : CotaData.numberOfPlayersPerPage;

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
