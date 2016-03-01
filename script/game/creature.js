/** Creature
 *
 * Base object for players and enemies.
 */
function Creature(x, y, size, life) {
    this.x        = x;
    this.y        = y;

    this.size     = size;
    this.width    = size;
    this.height   = size;

    this.life     = life;

    this.vx       = 0;
    this.vy       = 0;

    this.controls = this.CONTROL_P1;
    this.enabledDirections = [];

    this.enabledDirections.push('right');
};

Creature.prototype.MAX_VX = 3;
Creature.prototype.MAX_VY = 3;
Creature.prototype.ACC_X  = 3;
Creature.prototype.ACC_Y  = 3;
Creature.prototype.RET_X  = 0;
Creature.prototype.RET_Y  = 0;

Creature.prototype.ACC_DIR = {
    left   : {x: -1, y:  0},
    up     : {x:  0, y: -1},
    right  : {x:  1, y:  0},
    down   : {x:  0, y:  1}
};

Creature.prototype.DIRECTIONS = [
    'left',
    'up',
    'right',
    'down'
];

Creature.prototype.accelerate = function(dx, dy) {
    this.vx = limit(this.vx + dx * this.ACC_X, -this.MAX_VX, this.MAX_VX);
    this.vy = limit(this.vy + dy * this.ACC_Y, -this.MAX_VY, this.MAX_VY);
};

Creature.prototype.retard = function() {
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

Creature.prototype.move = function() {
    this.x += this.vx;
    this.y += this.vy;
};

Creature.prototype.collide = function(that) {
    return 2 * Math.sqrt(sqr(this.x - that.x) + sqr(this.y - that.y)) <= this.size + that.size;
};

Creature.prototype.checkDirection = function(direction) {
    return this.enabledDirections.indexOf(direction) > -1;
};

Creature.prototype.updatePosition = function() {
    for(var direction of this.DIRECTIONS) {
        if(this.checkDirection(direction)) {
            this.accelerate(
                this.ACC_DIR[direction].x,
                this.ACC_DIR[direction].y
            );
        }
    }
    this.move();
    this.retard();
};

Creature.prototype.updateEnabledDirections = function() {
};

Creature.prototype.update = function() {
    this.updateEnabledDirections();
    this.updatePosition();
};

Creature.prototype.draw = function(ctx) {
    ctx.fillStyle = 'rgb(150, 150, 150)';
    ctx.fillRect(-this.width/2, -this.height/2, this.width, this.height);
};
