function EnemyGenerator(width, height) {
    this.width  = width;
    this.height = height;

    this.POSITIONS = [
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
};

EnemyGenerator.prototype.SIZES = [14, 20, 40, 60, 100];

EnemyGenerator.prototype.generate = function() {
    var pos       = randomN(4);
    var x         = this.POSITIONS[pos].x || randomN(this.width);
    var y         = this.POSITIONS[pos].y || randomN(this.height);
    var size      = EnemyGenerator.prototype.SIZES[randomN(EnemyGenerator.prototype.SIZES.length)];
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
