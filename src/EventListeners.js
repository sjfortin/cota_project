const EventListeners = {
  bindEvents() {
    const sortPlayersSelect = document.getElementById('sortPlayers');

    sortPlayersSelect.addEventListener('change', event => {
      switch (sortPlayersSelect.value) {
        case 'asc':
          this.sortPlayersAsc(this.playerData);
          break;

        case 'desc':
          this.sortPlayersDesc(this.playerData);
          break;

        default:
          break;
      }

      this.renderPlayers(this.playerData);
    });
  }
};

export default EventListeners;
