/** Enemy
 *
 * Enemy Base Object.
 * Enemy objects inherit from this.
 */
function Enemy(x, y, size, life) {
    Creature.call(this, x, y, size, life);
};
Enemy.prototype = Object.create(Creature.prototype);


Enemy.prototype.draw = function(ctx) {
    ctx.fillStyle = 'rgb(150, 10, 50)';
    
    ctx.beginPath();
        ctx.arc(0, 0, this.width/2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
};
