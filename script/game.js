function Game(canvas, kbh, fps_ctrl) {
    this.canvas   = canvas
    this.ctx      = this.canvas.getContext('2d');
    this.fps_ctrl = fps_ctrl

    this.kbh = kbh;

    this.player1 = new Player(kbh, this.canvas.width/2, this.canvas.height/2, 20, 'both');

    this.player = this.player1;
    this.creatures = [
        this.player,
        new Creature(30, 30, 50)
    ];
};

Game.prototype.update = function() {
    /* Update creatures */
    for(var creature of this.creatures) {
        creature.update();
    }
};

Game.prototype.draw = function(ctx) {
    /* Clear screen */
    ctx.fillStyle = 'rgb(20, 20, 70)';
    //ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillRect (0, 0, this.canvas.width, this.canvas.height);

    /* Draw creatures */
    for(var creature of this.creatures) {
        ctx.save();
            ctx.translate(creature.x, creature.y);

            creature.draw(ctx);
        ctx.restore();
    }

    /* Draw FPS Display */
    ctx.save();
        ctx.translate(this.canvas.width - 50, 10);

        this.drawFPS(ctx);
    ctx.restore();
};

Game.prototype.drawFPS = function(ctx) {
    ctx.fillStyle = 'rgb(20, 20, 20)';
    ctx.fillRect(0, 0, 40, 20);
    ctx.fillStyle = 'rgb(200, 200, 200)';
    ctx.fillText(this.fps_ctrl.getSlowFPS(), 5, 14);
};
