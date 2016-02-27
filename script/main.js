function main(canvas_id, FPS) {
    /* Final version uses var */
    game = new Game(canvas_id);

    control = new FPSController(FPS, function() { game.update(); });
    control.run();

    /* Debug variables */
    ctx = document.getElementById(canvas_id).getContext('2d');
}
