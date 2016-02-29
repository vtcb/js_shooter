function Game(canvas, kbh, fps_ctrl, width, height) {
    this.canvas   = canvas
    this.ctx      = this.canvas.getContext('2d');
    this.fps_ctrl = fps_ctrl

    this.width    = width  || canvas.width;
    this.height   = height || canvas.height;

    this.kbh      = kbh;

    this.player1  = new Player(kbh, this.canvas.width/2, this.canvas.height/2, 20, 'both');

    this.player   = this.player1;
    this.enemies  = [];

    this.creatures = [
        this.player,
        new Creature(30, 30, 50),
        (new Enemy1Generator(this.width, this.height)).generate()
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

    /* Remove enemies out of screen */
    //this.enemies = this.enemies.filter( this.enemyFilter );
    for(var i in this.enemies) {
        if(this.enemyFilter(this.enemies[i])) {
            this.enemies[i].remove = true;
        }
    }
    this.enemies   = this.enemies.filter( function(elem) { return !elem.remove; });

    while(this.enemies.length < 10) {
        var new_enemy = (new Enemy1Generator(this.width, this.height)).generate();
        this.enemies.push( new_enemy );
        this.creatures.push( new_enemy );
    }

    this.creatures = this.enemies.concat([this.player]);
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
};
