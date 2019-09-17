const gameInfo = data => ({
  getGames: () => {
    fetch('https://www.balldontlie.io/api/v1/games')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        data.gameData = myJson.data;
        data.gameDataMeta = myJson.meta;
      });
  }
});

export default gameInfo;
