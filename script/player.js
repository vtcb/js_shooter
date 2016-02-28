// TODO: Creature inheritance
function Player(kbh, x, y) {
    this.x = x;
    this.y = y;
    this.kbh = kbh;

    this.vx = 0;
    this.vy = 0;

    this.controls = this.CONTROL_P1;
};

Player.prototype.MAX_VX = 10;
Player.prototype.MAX_VY = 10;
Player.prototype.ACC_X  = 0.2;
Player.prototype.ACC_Y  = 0.2;
Player.prototype.RET_X  = 0.05;
Player.prototype.RET_Y  = 0.05;

Player.prototype.ACC_DIR = {
    left  : {x: -1, y:  0},
    up    : {x:  0, y: -1},
    right : {x:  1, y:  0},
    down  : {x:  0, y:  1}
};

Player.prototype.CONTROL_P1 = { // Arrow Keys
    left  : 37,
    up    : 38,
    right : 39,
    down  : 40
};

Player.prototype.CONTROL_P2 = { // WASD
    left  : 'A'.charCodeAt(0),
    up    : 'W'.charCodeAt(0),
    right : 'D'.charCodeAt(0),
    down  : 'S'.charCodeAt(0)
};

Player.prototype.accelerate = function(dx, dy) {
    this.vx = limit(this.vx + dx * this.ACC_X, -this.MAX_VX, this.MAX_VX);
    this.vy = limit(this.vy + dy * this.ACC_Y, -this.MAX_VY, this.MAX_VY);
};

Player.prototype.retard = function() {
    if(Math.abs(this.vx) <= this.RET_X) {
        this.vx = 0;
    } else {
        var dx = this.vx > 0 ? 1 : this.vx < 0 ? -1 : 0;
        this.vx = limit(this.vx - dx * this.RET_X, -this.MAX_VX, this.MAX_VX);
    }

    if(Math.abs(this.vy) <= this.RET_Y) {
        this.vy = 0;
    } else {
        var dy = this.vy > 0 ? 1 : this.vy < 0 ? -1 : 0;
        this.vy = limit(this.vy - dy * this.RET_Y, -this.MAX_VY, this.MAX_VY);
    }
};

Player.prototype.move = function() {
    // Check for collision
    this.x += this.vx;
    this.y += this.vy;
};

Player.prototype.update = function() {
    for(var direction in this.controls) {
        if(this.kbh.isPressed(this.controls[direction])) {
            this.accelerate(
                this.ACC_DIR[direction].x,
                this.ACC_DIR[direction].y
            );
        }
    }
    this.move();
    this.retard();
};

Player.prototype.draw = function(ctx) {
    ctx.fillStyle = 'rgb(0, 90, 50)';
    ctx.fillRect(0, 0, 50, 50);
};
