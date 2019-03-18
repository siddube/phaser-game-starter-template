var StateMain = {

	preload: function () {
		game.load.spritesheet('button', 'assets/images/buttons-blue.png', 265, 75);
	},

	create: function () {
		var titleText = game.add.text(game.world.centerX, game.world.centerY - 100, 'GAME SCREEN');
		titleText.fill = '#ffffff';
		titleText.anchor.set(0.5, 0.5);

		var exitText = game.add.text(game.world.centerX, game.world.height - 350 , 'EXIT GAME?');
		exitText.fill = '#ffffff';
		exitText.anchor.set(0.5, 0.5);

		this.btnExit = game.add.button(game.world.centerX, game.world.height - 250, 'button', this.endGame, this, 3, 2, 3);
		this.btnExit.anchor.set(0.5, 0.5);

		this.btnDontExit = game.add.button(game.world.centerX, game.world.height - 150, 'button', this.stayInGame, this, 5, 4, 5);
		this.btnDontExit.anchor.set(0.5, 0.5);
	},

	update: function () {

	},

	endGame: function () {
		game.state.start("StateGameOver");
	},

	stayInGame: function () {
		return;
	}

}