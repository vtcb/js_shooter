function main(canvas_id, FPS) {
    /* Final version uses var */
    kbh = new KBHandler();
    game = new Game(canvas_id, kbh);

    control = new FPSController(FPS, function() { game.update(); });
    control.run();

    /* Debug variables */
    ctx = document.getElementById(canvas_id).getContext('2d');
}
