import CotaData from './CotaData';
import Pagination from './Pagination';

const PlayerInfo = {
  getPlayers(page) {
    let playersUrl = CotaData.apiUrl + `?page=${page}&per_page=${CotaData.limitPerPage}`;

    fetch(playersUrl)
      .then(response => response.json())
      .then(players => {
        this.renderPlayers(players.data);
        
        let pageRange = Pagination.generatePageRange(page, players.meta.total_pages);
        
        Pagination.renderPagination(pageRange);
      });
  },
  renderPlayers(players) {
    const playersContainer = document.querySelector('.players');

    // need to empty out the player container
    while (playersContainer.firstChild) {
      playersContainer.removeChild(playersContainer.firstChild);
    }

    players.forEach(player => {
      let playerUI = document.createElement('div');
      playerUI.innerHTML = `${player.first_name} ${player.last_name}`;
      playerUI.style.cssText = 'color: slate; border: 1px solid lightgray; padding: 5px; margin: 5px 0';
      playersContainer.append(playerUI);
    });
  }
};

export default PlayerInfo;
