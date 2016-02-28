/** Creature
 *
 * Base object for players and enemies.
 */
function Creature(x, y) {
    this.x = x;
    this.y = y;
};

Creature.prototype.draw = function(ctx) {
    ctx.fillStyle = 'rgb(0, 90, 50)';
    ctx.rect(0, 0, 50, 50);
    ctx.fill();
};

Creature.prototype.opa = function() {
    console.log("opa");
};