function MenuOption(x, y, width, heigth, color, text, action) {
    this.x         = x;
    this.y         = y;
    this.width     = width;
    this.height    = heigth;
    this.text      = text;
    this.action    = action;
    this.color     = color;

    this.selected  = false;
    this.pressed   = false;
};

MenuOption.prototype.draw = function(ctx) {
    var border = 6;
    var font_size = (this.height - 5 * border);

    /* Draw Button */
    var in_color;
    this.drawPath(ctx, this.color.out, 2);

    if(this.selected) {
        in_color = this.color.selected;
    } else {
        in_color = this.color.in;
    }
    this.drawPath(ctx, in_color,  border);

    /* Write text */
    ctx.font = font_size + 'px sans-serif';
    ctx.fillStyle = this.color.text;
    ctx.fillText(
        this.text,
        (this.width  - ctx.measureText(this.text).width)/2,
        (this.height + font_size)/2 - 3
    );
};

MenuOption.prototype.drawPath = function(ctx, style, border) {
    var size = this.height - 2 * border;

    ctx.beginPath();
        ctx.arc(
            this.height/2, this.height/2,
            size/2,
            Math.PI/2, 3*Math.PI/2
        );

        ctx.rect(
            this.height/2,            border,
            this.width - this.heigth, size
        );

        ctx.arc(
            this.width - this.height/2, this.height/2,
            size/2,
            3*Math.PI/2, 5*Math.PI/2
        );
    ctx.closePath();

    ctx.fillStyle = style;
    ctx.fill();
};
