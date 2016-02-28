function getTime() {
    return (new Date()).getTime();
}

function limit(a, b, c) {
    return Math.min(Math.max(a, b), c);
}

function clearScreen(canvas, style) {
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = style;
    ctx.fillRect (0, 0, canvas.width, canvas.height);
}
