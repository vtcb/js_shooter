function main(canvas_id, FPS) {
    var canvas = document.getElementById(canvas_id);
    // new MainControl(canvas, FPS).run()

    /* Debug */
    ctx = canvas.getContext('2d');

    control = new MainControl(canvas, FPS);
    control.run();
}
