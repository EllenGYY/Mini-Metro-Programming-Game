class Station {

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    constructor(x, y, shape) {
        this.x = x;
        this.y = y;
        this.shape = shape;
    }

    get PosX() { return this.x; }
    get PosY() { return this.y; }
    get Shape() { return this.shape; }

    drawStation() {
        if (this.shape == "circle") { this.drawCircle(this.ctx, this.x, this.y); }
        if (this.shape == "square") { this.drawSquare(this.ctx, this.x, this.y); }
        if (this.shape == "triangle") { this.drawTriangle(this.ctx, this.x, this.y); }
    }

    drawTriangle(ctx, x, y) {
        ctx.beginPath();
        ctx.moveTo(x, y - 10);
        ctx.lineTo(x - 8.66, y + 5);
        ctx.lineTo(x + 8.66, y + 5);
        ctx.lineTo(x, y - 10);
        ctx.stroke();
    }

    drawSquare(ctx, x, y) {
        ctx.beginPath();
        ctx.rect(x - 8, y - 8, 16, 16);
        ctx.stroke();
    }

    drawCircle(ctx, x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.stroke();
    }
}