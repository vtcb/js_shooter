function Menu(canvas, kbh, x, y, width, height, option_heigth, color) {
    this.canvas        = canvas;
    this.ctx           = canvas.getContext('2d');
    this.kbh           = kbh;
    this.x             = x;
    this.y             = y;
    this.width         = width;
    this.height        = height;
    this.option_heigth = option_heigth;
    this.color         = color;

    this.options       = [];
    this.selected      = 0;

    this.pressed       = {};
};

Menu.prototype.reset = function() {
    this.selected = 0;
    this.pressed  = {}

    for(var option of this.options) {
        option.selected = false;
        option.pressed  = false;
    }
};

Menu.prototype.addOption = function(text, action) {
    var new_option = new MenuOption(
        0,          this.options.length * this.option_heigth,
        this.width, this.option_heigth,
        this.color,
        text,       action
    );

    this.options.push(new_option);
    if(this.options.length == 1) {
        new_option.selected = true;
    }
};

Menu.prototype.changeSelection = function(dx) {
    this.options[this.selected].selected = false;
    this.selected = (this.selected + dx) % this.options.length;
    if(this.selected < 0) {
        this.selected += this.options.length;
    }
    this.options[this.selected].selected = true;
};

Menu.prototype.moveUp = function() {
    this.changeSelection(-1);
};

Menu.prototype.moveDown = function() {
    this.changeSelection( 1);
};

Menu.prototype.select = function() {
    this.options[this.selected].pressed = true;
    if(this.options[this.selected].action) {
        this.options[this.selected].action();
    }
};

Menu.prototype.controls = {
    38 : 'moveUp',   // Up   Arrow
    40 : 'moveDown', // Down Arrow
    13 : 'select'    // Enter
};

Menu.prototype.checkStateChange = function() {
};

Menu.prototype.update = function() {
    for(var key in this.controls) {
        if(this.kbh.isPressed(key)) {
            if(!this.pressed[key]) {
                this.pressed[key] = true;
                this[this.controls[key]]();
            }
        } else {
            this.pressed[key] = false;
        }
    };

    this.checkStateChange();
};

Menu.prototype.draw = function(ctx) {
    for(var option of this.options) {
        ctx.save();
            ctx.translate(option.x, option.y);

            option.draw(ctx);
        ctx.restore();
    }
};
