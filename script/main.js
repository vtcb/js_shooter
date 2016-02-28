function main(canvas_id, FPS) {
    /* Final version uses var */
    canvas = document.getElementById(canvas_id);
    ctx = canvas.getContext('2d');

    kbh     = new KBHandler();
    control = new FPSController(FPS, function() { menu.update(); menu.draw(ctx)});
    game    = new Game(canvas, kbh, control);
    menu    = new MainMenu(
        canvas, kbh,
        50, 50, 200, 400, 50,
        {
            in       : 'rgb(0, 130, 130)',
            out      : 'rgb(0, 70, 70)',
            selected : 'rgb(0, 170, 170)',
            text     : 'rgb(0, 0, 20)'
        },
        game
    );

    control.run();

}
