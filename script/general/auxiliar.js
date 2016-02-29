/** Auxiliar functions
 */
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

function randomIn(a, b) { // [a, b)
    return a + Math.floor(Math.random() * (b - a));
}

function randomN(b) { // [0, b)
    return Math.floor(Math.random() * b);
}

function remove(arr, n) {
    return arr.filter( function(elem) { return elem != n; } );
}

function valid(x, y, n, m, n_, m_) {
    return x >= (n_ || 0) && y >= (m_ || 0) && x < n && y < m;
}