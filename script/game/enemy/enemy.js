/** Enemy
 *
 * Enemy Base Object.
 * Enemy objects inherit from this.
 */
function Enemy(x, y, size, life) {
    Creature.call(this, x, y, size, life);
};

Enemy.prototype = Object.create(Creature.prototype);


Enemy.prototype.kill = function() {
    var qty = randomIn(2, 10);
    var coins = [];
    var generator = new CoinGenerator(this.x, this.y);

    for(var times = 0; times < qty; times++) {
        coins.push(generator.generate());
    }

    return coins;
};

Enemy.prototype.draw = function(ctx) {
    ctx.fillStyle = 'rgb(150, 10, 50)';
    
    ctx.beginPath();
        ctx.arc(0, 0, this.width/2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
};
