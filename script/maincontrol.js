function MainControl(canvas, FPS) {
    var self      = this;
    var ctx       = canvas.getContext('2d');

    this.canvas   = canvas;
    this.FPS      = FPS;

    this.kbh      = new KBHandler();
    this.fps_ctrl = new FPSController(FPS, function() { self.update(); self.draw(ctx); });
    this.game     = new Game(canvas, this.kbh, this.control);
    this.menu     = new MainMenu(
        canvas, this.kbh,
        50, 50, 200, 400, 50,
        {
            in       : 'rgb(0, 130, 130)',
            out      : 'rgb(0, 70, 70)',
            selected : 'rgb(0, 170, 170)',
            text     : 'rgb(0, 0, 20)'
        },
        this.game
    );

    this.state    = 'start screen';
};

MainControl.prototype.run = function() {
    this.fps_ctrl.run();
};

MainControl.prototype.update = function() {
    var next_state = '';

    switch(this.state) {
        case 'start screen':
            this.state = 'main menu';
            break;
        case 'main menu':
            this.menu.update();
            if(this.menu.start_game) {
                next_state = 'playing';
            }
            break;
        case 'playing':
            this.game.update();
            break;
        default:
            // TODO throw
            console.log('Invalid state at main control! Something really wrong is happening!');
            break;
    }

    if(next_state) {
        this.state = next_state;

        switch(this.state) {
            case 'start screen':
                break;
            case 'main menu':
                this.menu.reset();
                break;
            case 'playing':
                //this.game.update();
                break;
            default:
                break;
        }
    }
};

MainControl.prototype.draw = function(ctx) {
    clearScreen(this.canvas, 'rgb(20, 20, 70)');

    switch(this.state) {
        case 'start screen':
            break;
        case 'main menu':
            this.menu.draw(ctx);
            this.drawFPS(ctx);
            break;
        case 'playing':
            this.game.draw(ctx);
            this.drawFPS(ctx);
    }
};

MainControl.prototype.drawFPS = function(ctx) {
    ctx.save();
        ctx.translate(this.canvas.width - 50, 10);

        ctx.fillStyle = 'rgb(20, 20, 20)';
        ctx.fillRect(0, 0, 40, 20);
        ctx.fillStyle = 'rgb(200, 200, 200)';
        ctx.fillText(this.fps_ctrl.getSlowFPS(), 5, 14);
    ctx.restore();
};
