function Game(canvas_id) {   
    this.canvas = document.getElementById(canvas_id);
    this.ctx = this.canvas.getContext('2d');

    this.cnt = 0;
};

Game.prototype.update = function() {
    //console.log("oi")
    this.draw();
};

Game.prototype.draw = function() {
    this.ctx.fillStyle = 'rgb(0, 0, 40)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

};
