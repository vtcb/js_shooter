function KBHandler() {
    var pressed = {};
    var qty = 0;

    this.keydown_listener = function(event) {
        var code = event.keyCode;

        if(!pressed[code]) qty++;

        pressed[code] = true;
    };

    this.keyup_listener = function(event) {
        var code = event.keyCode;

        if(pressed[code]) qty--;

        pressed[code] = false;
    };

    window.addEventListener('keydown', this.keydown_listener, false);
    window.addEventListener('keyup',   this.keyup_listener,   false);

    this.isPressed = function(code) {
        return pressed[code];
    };

    this.release = function(code) {
        if(pressed[code]) qty--;

        pressed[code] = false;
    };

    this.anythingPressed = function() {
        return qty > 0;
    };

    this.getPressed = function() {
        return pressed;
    };
}
