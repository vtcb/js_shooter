function Game(canvas_id, kbh) {
    this.canvas = document.getElementById(canvas_id);
    this.ctx = this.canvas.getContext('2d');

    this.kbh = kbh;

    this.player1 = new Player(kbh,   5,   5, 1);
    //this.player2 = new Player(kbh, 555, 555, 2);

    this.player = this.player1;
    this.players = [
        this.player1
    ];
};

Game.prototype.update = function() {
    for(player of this.players) {
        player.update();
    }

    this.draw(this.ctx);
};

Game.prototype.draw = function(ctx) {
    ctx.fillStyle = 'rgb(0, 0, 40)';
    //ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillRect (0, 0, this.canvas.width, this.canvas.height);

    for(player of this.players) {
        ctx.save();
            ctx.translate(player.x, player.y);

            player.draw(ctx);
        ctx.restore();
    }
};
