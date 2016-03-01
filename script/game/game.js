function Game(canvas, kbh, fps_ctrl, width, height) {
    this.canvas    = canvas;
    this.ctx       = this.canvas.getContext('2d');
    this.fps_ctrl  = fps_ctrl;

    this.width     = width  || canvas.width;
    this.height    = height || canvas.height;

    this.kbh       = kbh;

    this.player1   = new Player(kbh, this.canvas.width/2, this.canvas.height/2, 20, 100, 'both');

    this.player    = this.player1;
    this.enemies   = [];
    this.coins     = [];

    this.creatures = [
        this.player,
        new Creature(30, 30, 50)
    ];
};

Game.prototype.enemyFilter = function(elem) {
    return !valid(
        elem.x, elem.y,
        this.width + this.canvas.width, this.height + this.canvas.height,
        -this.canvas.width, -this.canvas.height
    );
};

Game.prototype.update = function() {
    /* Update creatures */
    for(var creature of this.creatures) {
        creature.update();
    }

    for(var i = 0; i < this.enemies.length; i++) {
        var enemy = this.enemies[i];
        if(this.player.collide(enemy)) {
            this.player.life -= 20;
            this.coins = this.coins.concat(enemy.kill());
            this.enemies.splice(i, 1); i--;
        }
    }

    /* Remove enemies out of screen */
    for(var i = 0; i < this.enemies.length; i++) {
        if(this.enemyFilter(this.enemies[i])) {
            this.enemies.splice(i, 1); i--;
        }
    }

    /* Gerenerate more enemies */
    while(this.enemies.length < 30) {
        var new_enemy = (new EnemyGenerator(this.width, this.height)).generate();
        this.enemies.push( new_enemy );
    }

    this.creatures = [];
    this.creatures = this.creatures.concat(this.coins);
    this.creatures = this.creatures.concat(this.enemies);
    this.creatures = this.creatures.concat([this.player]);
};

Game.prototype.draw = function(ctx) {
    ctx.save();
        /* Centralize player */
        var dx = limit(
            this.player.x,
            0          + this.canvas.width/2,
            this.width - this.canvas.width/2
        ) - this.canvas.width/2;

        var dy = limit(
            this.player.y,
            0           + this.canvas.height/2,
            this.height - this.canvas.height/2
        ) - this.canvas.height/2;

        ctx.translate(-dx, -dy);


        ctx.fillStyle = 'rgb(200, 200, 200)';
        /* Draw grid */
        for(var i = 0; i < this.width; i += 50) {
            ctx.fillRect(i, 0, 1, this.height);
        }
        for(var i = 0; i < this.height; i += 50) {
            ctx.fillRect(0, i, this.width, 1);
        }

        /* Draw creatures */
        for(var creature of this.creatures) {
            ctx.save();
                ctx.translate(creature.x, creature.y);

                creature.draw(ctx);
            ctx.restore();
        }
    ctx.restore();

    ctx.save();
        ctx.fillStyle = '#222222';
        ctx.fillRect(10, 10, 104, 20);
        ctx.fillStyle = '#CC0000';
        ctx.fillRect(12, 12, 100 * this.player.life/this.player.max_life, 16);
    ctx.restore();
};
