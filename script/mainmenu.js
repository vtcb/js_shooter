function MainMenu(canvas, kbh, x, y, width, height, option_heigth, color, game) {
    Menu.call(this, canvas, kbh, x, y, width, height, option_heigth, color);

    this.game = game;
    this.playing = false;

    this.addOption('Start Game',  this.startGame);
    this.addOption('Instruction', this.credits);
    this.addOption('Credits',     this.credits);
};
MainMenu.prototype = Object.create(Menu.prototype);

MainMenu.prototype.startGame = function() {
    this.playing = true;
};

MainMenu.prototype.credits = function() {
    console.log("Credits");
    console.log("Everything: vtcb (a.k.a. Bolado)");
};

/*
MainMenu.prototype.update = function() {
    if(this.playing) {
        this.game.update();
        this.game.draw(this.ctx);
    }
};
*/
