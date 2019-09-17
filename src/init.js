const playerInfo = data => ({
  getPlayers: () => {
    fetch('https://www.balldontlie.io/api/v1/players')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        data.playerData = myJson.data;
        data.playerDataMeta = myJson.meta;
      });
  }
});

export default playerInfo;
