function Game(canvas_id) {   
    this.canvas = document.getElementById(canvas_id);
    this.ctx = this.canvas.getContext('2d');

    this.cnt = 0;

    this.player = new Creature(5, 5);
};

Game.prototype.update = function() {
    this.draw(this.ctx);
};

Game.prototype.draw = function(ctx) {
    ctx.fillStyle = 'rgb(0, 0, 40)';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.save();
        ctx.translate(this.player.x, this.player.y);

        this.player.draw(ctx);
    ctx.restore();
};
