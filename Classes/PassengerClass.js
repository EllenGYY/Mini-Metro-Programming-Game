class Passenger {

    shape;
    status;

    constructor(impossi) {
        var possi = ["circle", "square", "triangle"];
        possi.splice(findInArray(impossi, possi), 1);
        var s = Math.random();
        if (s < 1 / 2) { this.shape = possi[0]; }
        if (s >= 1 / 2) { this.shape = possi[1]; }
        this.status = "wait";
    }

    get PassengerShape() { return this.shape; }
    get PassengerStatus() { return this.status; }
    set PassengerStatus(s) { this.status = s; }

    drawPassenger(ctx, x, y, fillstyle) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = fillstyle;
        if (this.shape == "circle") { drawCircle(ctx, x, y, 2, fillstyle); }
        if (this.shape == "square") { drawSquare(ctx, x, y, 2, fillstyle); }
        if (this.shape == "triangle") { drawTriangle(ctx, x, y, 2, fillstyle); }
        ctx.fillStyle = fillstyle;
    }
}