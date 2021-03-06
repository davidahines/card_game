
BasicGame.Preloader = function (game) {

    this.background = null;
    this.preloadBar = null;
    this.preloadBarFill = null;

    this.ready = false;

};

BasicGame.Preloader.prototype = {

    preload: function () {

        this.background = this.add.sprite(0, 0, 'preloaderBackground');
        this.preloadBar = this.add.sprite(300, 400, 'preloaderBarEmpty');
        this.preloadBarFill = this.add.sprite(300, 400, 'preloaderBarFill');

        this.load.setPreloadSprite(this.preloadBarFill);

        //	Here we load the rest of the assets our game needs.
        //	You can find all of these assets in the Phaser Examples repository
        this.load.image('worldmapTileset', './javascripts/game_content/assets/images/tilesets/worldmapTiles.png');
        this.load.image('blondeAdventurer', './javascripts/game_content/assets/images/sprites/blondeAdventurer.png');
        this.load.image('tileableBackground', './javascripts/game_content/assets/images/sprites/tileableBackground.png');
        this.load.image('titleText', './javascripts/game_content/assets/images/sprites/titleText.png');

    },

    create: function () {

        this.state.start('MainMenu');

    }

};