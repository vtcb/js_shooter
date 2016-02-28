// TODO: Creature inheritance
function Player(x, y) {
    this.x = x;
    this.y = y;

    this.vx = 0;
    this.vy = 0;

    var controls = {
        left  : 37,
        up    : 38,
        right : 39,
        down  : 40
    };

    var self = this;

    this.listener = function(event) {
        var code = event.keyCode;

        switch(code) {
            case controls.left:
                self.accelerate(-1,  0);
                break;
            case controls.up:
                self.accelerate( 0, -1);
                break;
            case controls.right:
                self.accelerate( 1,  0);
                break;
            case controls.down:
                self.accelerate( 0,  1);
                break;
        }
    };

    window.addEventListener('keydown', this.listener, false);
};

Player.prototype.MAX_VX = 4;
Player.prototype.MAX_VY = 4;
Player.prototype.ACC_X  = 0.2;
Player.prototype.ACC_Y  = 0.2;
Player.prototype.RET_X  = 0.02;
Player.prototype.RET_Y  = 0.02;

Player.prototype.accelerate = function(dx, dy) {
    this.vx = limit(this.vx + dx * this.ACC_X, -this.MAX_VX, this.MAX_VX);
    this.vy = limit(this.vy + dy * this.ACC_Y, -this.MAX_VY, this.MAX_VY);
};

Player.prototype.retard = function() {
    var dx = this.vx > 0 ? 1 : this.vx < 0 ? -1 : 0;
    var dy = this.vy > 0 ? 1 : this.vy < 0 ? -1 : 0;

    this.vx = limit(this.vx - dx * this.RET_X, -this.MAX_VX, this.MAX_VX);
    this.vy = limit(this.vy - dy * this.RET_Y, -this.MAX_VY, this.MAX_VY);
};

Player.prototype.move = function() {
    // Check for collision
    this.x += this.vx;
    this.y += this.vy;
};

Player.prototype.update = function() {
    this.move();
    this.retard();
};

Player.prototype.draw = function(ctx) {
    ctx.fillStyle = 'rgb(0, 90, 50)';
    ctx.fillRect(0, 0, 50, 50);
};
