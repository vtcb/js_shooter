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
    /* Draw creatures */
    for(var creature of this.creatures) {
        ctx.save();
            ctx.translate(creature.x, creature.y);

            creature.draw(ctx);
        ctx.restore();
    }
};
