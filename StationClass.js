class Station {

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    constructor(x, y, shape, number) {
        this.x = x;
        this.y = y;
        this.shape = shape;
        this.number = number;
    }

    get PosX() { return this.x; }
    get PosY() { return this.y; }
    get Shape() { return this.shape; }
    get Number() { return this.number; }

    drawStation() {
        if (this.shape == "circle") { this.drawCircle(this.ctx, this.x, this.y); }
        if (this.shape == "square") { this.drawSquare(this.ctx, this.x, this.y); }
        if (this.shape == "triangle") { this.drawTriangle(this.ctx, this.x, this.y); }
        this.ctx.textAlign = "center";
        this.ctx.fillText(this.number, this.x, this.y + 4);
    }

    drawTriangle(ctx, x, y) {
        ctx.beginPath();
        ctx.moveTo(x, y - 20);
        ctx.lineTo(x - 17.3, y + 10);
        ctx.lineTo(x + 17.3, y + 10);
        ctx.lineTo(x, y - 20);
        ctx.stroke();
    }

    drawSquare(ctx, x, y) {
        ctx.beginPath();
        ctx.rect(x - 15, y - 15, 30, 30);
        ctx.stroke();
    }

    drawCircle(ctx, x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, 2 * Math.PI);
        ctx.stroke();
    }
}