let currentPage = 1;
let playerData = [];
const limitPerPage = 50;
const apiUrl = 'https://www.balldontlie.io/api/v1/players';

const getPlayers = async function(currentPage) {
  let actualUrl = apiUrl + `?page=${currentPage}&per_page=${limitPerPage}`;
  var apiResults = await fetch(actualUrl).then(resp => {
    return resp.json();
  });

  return apiResults;
};

const getAllPlayers = async () => {
  if (currentPage >= 10) {
    return;
  }
  const results = await getPlayers(currentPage);
  currentPage++;
  playerData = playerData.concat(results.data);
  console.log(playerData);
  renderPlayers(results.data);
  getAllPlayers();
};

const renderPlayers = players => {
  const playersContainer = document.querySelector('.players');

  players.forEach(player => {
    let playerUI = document.createElement('div');
    playerUI.innerHTML = `${player.first_name} ${player.last_name}`;
    playerUI.style.cssText = 'color: slate; border: 1px solid lightgray; padding: 5px; margin: 5px 0';
    playersContainer.append(playerUI);
  });
};

export default getAllPlayers;
