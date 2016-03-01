function Player(kbh, x, y, size, life, player) {
    Creature.call(this, x, y, size, life);
    this.kbh      = kbh;

    this.controls = this.CONTROL_P1;

    if(player) {
        if(player == 'both') {
            for(var control in this.CONTROL_P2) {
                this.controls[control] = this.CONTROL_P2[control];
            }
        } else {
            this.controls = this['CONTROL_P' + player];
        }
    }

    this.max_life = life;
    this.magnet   = this.INITIAL_MAGNET;
};

Player.prototype = Object.create(Creature.prototype);

Player.prototype.MAX_VX = 10;
Player.prototype.MAX_VY = 10;
Player.prototype.ACC_X  = 0.2;
Player.prototype.ACC_Y  = 0.2;
Player.prototype.RET_X  = 0.05;
Player.prototype.RET_Y  = 0.05;
Player.prototype.INITIAL_MAGNET = 100;

Player.prototype.CONTROL_P1 = { // Arrow Keys
    37 : 'left',
    38 : 'up',
    39 : 'right',
    40 : 'down'
};

Player.prototype.CONTROL_P2 = {}; // WASD
Player.prototype.CONTROL_P2['A'.charCodeAt(0)] = 'left';
Player.prototype.CONTROL_P2['W'.charCodeAt(0)] = 'up';
Player.prototype.CONTROL_P2['D'.charCodeAt(0)] = 'right';
Player.prototype.CONTROL_P2['S'.charCodeAt(0)] = 'down';


Player.prototype.updateEnabledDirections = function() {
    this.enabledDirections = [];
    for(var control in this.controls) {
        if(this.kbh.isPressed(control)) {
            this.enabledDirections.push(this.controls[control]);
        }
    }
};

Player.prototype.draw = function(ctx) {
    ctx.beginPath();
        ctx.arc(0, 0, this.width/2, 0, 2 * Math.PI);
    ctx.closePath();

    ctx.fillStyle   = 'rgb(0, 90, 50)';
    ctx.fill();
};
