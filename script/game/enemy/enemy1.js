function Enemy1(x, y, size, life, direction) {
    Enemy.call(this, x, y, size, life);
    this.enabledDirections = [direction];
};
Enemy1.prototype = Object.create(Enemy.prototype);