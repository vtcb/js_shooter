function getTime() {
    return (new Date()).getTime();
}

function limit(a, b, c) {
    return Math.min(Math.max(a, b), c);
}