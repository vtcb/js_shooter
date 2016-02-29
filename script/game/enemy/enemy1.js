function Enemy1(x, y, size, life, direction) {
    Enemy.call(this, x, y, size, life);
    this.enabledDirections = [direction];
};
Enemy1.prototype = Object.create(Enemy.prototype);

Enemy1.prototype.SIZES = [15, 20, 40, 60, 100, 150];

function Enemy1Generator(width, height) {
    var POSITIONS = [
        {
            x : -200,
            y : undefined
        },
        {
            x : width + 200,
            y : undefined
        },
        {
            x : undefined,
            y : -200
        },
        {
            x : undefined,
            y : height + 200
        }
    ];

    this.generate = function() {
        var pos       = randomN(4);
        var x         = POSITIONS[pos].x || randomN(width);
        var y         = POSITIONS[pos].y || randomN(height);
        var size      = Enemy1.prototype.SIZES[randomN(Enemy1.prototype.SIZES.length)];
        var life      = size;
        var direction = Creature.prototype.DIRECTIONS[randomN(4)];

        return new Enemy1(
            x,
            y,
            size,
            life,
            direction
        );
    };

};
