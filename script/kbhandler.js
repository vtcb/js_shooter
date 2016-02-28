function KBHandler() {
    var pressed = {};

    this.keydown_listener = function(event) {
        var code = event.keyCode;

        pressed[code] = true;
    };

    this.keyup_listener = function(event) {
        var code = event.keyCode;

        pressed[code] = false;
    };

    window.addEventListener('keydown', this.keydown_listener, false);
    window.addEventListener('keyup',   this.keyup_listener,   false);

    this.isPressed = function(code) {
        return pressed[code];
    };
}
