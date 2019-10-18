class Station {

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    shape;
    passengers = [];

    constructor(x, y, number) {
        this.x = x;
        this.y = y;
        this.number = number;
        var s = Math.random();
        if (s < 1 / 3) { this.shape = "circle"; }
        if (s >= 1 / 3 && s < 2 / 3) { this.shape = "square"; }
        if (s >= 2 / 3) { this.shape = "triangle"; }
    }

    get PosX() { return this.x; }
    get PosY() { return this.y; }
    get Shape() { return this.shape; }
    get Passengers() { return this.passengers; }
    get Number() { return this.number; }

    spawnPassengers() {
        this.passengers[this.passengers.length] = new Passenger(this.shape);
    }

    showPassengers() {
        this.ctx.strokeStyle = "antiquewhite";
        drawSquare(this.ctx, this.x + 39, this.y, 14.5, "antiquewhite");
        for (i = 0; i < this.passengers.length; i++) {
            this.passengers[i].drawPassenger(this.ctx, this.x + 20 + (i % 4) * 10, this.y + ((i - i % 4) / 4) * 10, "black");
        }
    }

    checkPassengers() {
        var i = 0;
        while (i != this.passengers.length) {
            if (this.passengers[i].PassengerStatus == "on") {
                this.passengers.splice(i, 1);
                i--;
            }
            i++;
        }
    }

    drawStation() {
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "black";
        if (this.shape == "circle") { drawCircle(this.ctx, this.x, this.y, 10, "antiquewhite"); }
        if (this.shape == "square") { drawSquare(this.ctx, this.x, this.y, 10, "antiquewhite"); }
        if (this.shape == "triangle") { drawTriangle(this.ctx, this.x, this.y, 10, "antiquewhite"); }
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = "black";
        this.ctx.fillText(this.number, this.x, this.y + 4);
    }

}