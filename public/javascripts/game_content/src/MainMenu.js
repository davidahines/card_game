
BasicGame.MainMenu = function (game) {

    this.bg;
    this.titleText;

};

BasicGame.MainMenu.prototype = {

    create: function () {
        this.bg = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'tileableBackground');
        this.titleText = this.add.sprite(0, 0, 'titleText');
    },

    update: function () {

    },

    resize: function (width, height) {
        this.bg.width = width;
        this.bg.height = height;
    }

};