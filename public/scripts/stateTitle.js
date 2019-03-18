var StateTitle = {

  preload: function () {
    game.load.spritesheet('button', 'assets/images/buttons-blue.png', 265, 75);
    if (screen.width < 769) {
      game.scale.forceOrientation(false, true);
    }
  },

  create: function () {
    var titleText = game.add.text(game.world.centerX, game.world.centerY - 100, 'GAME LOGO');
    titleText.fill = '#ffffff';
    titleText.anchor.set(0.5, 0.5);

    this.btnStart = game.add.button(game.world.centerX, game.world.height - 150, 'button', this.startGame, this, 7, 6, 7);
    this.btnStart.anchor.set(0.5, 0.5);
    this.setListeners();
  },

  update: function () {

  },

  setListeners: function () {
    if (screen.width < 768) {
      game.scale.enterIncorrectOrientation.add(this.wrongWay, this);
      game.scale.leaveIncorrectOrientation.add(this.rightWay, this);
    }
  },

  wrongWay: function () {
    document.getElementById('wrong-way').style.display = 'block';
  },

  rightWay: function () {
    document.getElementById('wrong-way').style.display = 'none';
  },

  startGame: function () {
    game.state.start("StateMain");
  }

}