var StateGameOver = {

  preload: function () {
    game.load.spritesheet('button', 'assets/images/buttons-blue.png', 265, 75);
  },

  create: function () {
    var titleText = game.add.text(game.world.centerX, game.world.centerY - 100, 'GAME OVER');
    titleText.fill = '#ffffff';
    titleText.anchor.set(0.5, 0.5);

    this.btnRePlay = game.add.button(game.world.centerX, game.world.height - 150, 'button', this.restartGame, this, 1, 0, 1);
    this.btnRePlay.anchor.set(0.5, 0.5);
  },

  update: function () {

  },

  restartGame: function () {
    game.state.start("StateMain");
  }

}