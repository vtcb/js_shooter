var Coin = function(x, y, size, life, vx, vy) {
    Creature.call(this, x, y, size, life);

    this.vx = vx;
    this.vy = vy;
};
Coin.prototype = Object.create(Creature.prototype);

Coin.prototype.MAX_VX = 6;
Coin.prototype.MAX_VY = 6;
Coin.prototype.ACC_X  = 0.3;
Coin.prototype.ACC_Y  = 0.3;
Coin.prototype.RET_X  = 0.1;
Coin.prototype.RET_Y  = 0.1;

Coin.prototype.setSpeed = function(vx, vy) {
    this.vx = vx;
    this.vy = vy;
};

Coin.prototype.draw = function(ctx) {
    ctx.fillStyle = 'rgb(170, 170, 10)';
    
    ctx.beginPath();
        ctx.arc(0, 0, this.width/2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
};


var CoinGenerator = function(x, y) {
    this.x = x;
    this.y = y;
};

CoinGenerator.prototype.generate = function(a, b) {
    var x = this.x;
    var y = this.y;
    var size = randomN(10);
    var life = 1;
    var vx = randomN(-3, 3);
    var vy = randomN(-3, 3);

    var coin = new Coin(x, y, size, life, vx, vy);

    return coin;
};
