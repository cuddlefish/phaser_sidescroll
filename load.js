var load_state = {

	// Function called first to load all the assets
	preload: function() {
		this.game.state.backgroundColor = '#71c5cf';
		this.game.load.image('bird', 'assets/bird.png');
		this.game.load.image('pipe', 'assets/pipe.png');
		this.game.load.audio('jump', 'assets/jump.wav')
	},

	// Fuction called after 'preload' to setup the game
	create: function() { 

		// go to game menu
		this.game.state.start('menu');
	}


};
