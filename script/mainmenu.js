function MainMenu(canvas, kbh, x, y, width, height, option_heigth, color, game) {
    Menu.call(this, canvas, kbh, x, y, width, height, option_heigth, color);

    this.game = game;
    this.start_game = false;

    this.addOption('Start Game',  undefined);
    this.addOption('Instruction', this.credits);
    this.addOption('Credits',     this.credits);
};
MainMenu.prototype = Object.create(Menu.prototype);

MainMenu.prototype.credits = function() {
    console.log("Credits");
    console.log("Everything: vtcb (a.k.a. Bolado)");
};

MainMenu.prototype.checkStateChange = function() {
    if(this.options[0].pressed) {
        this.start_game = true;
    }
};
