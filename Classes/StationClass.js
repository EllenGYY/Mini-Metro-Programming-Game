class Station {

    constructor(x, y, number) {
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.number = number;
        var s = Math.random();
        if (s < 1 / 3) { this.shape = "circle"; }
        if (s >= 1 / 3 && s < 2 / 3) { this.shape = "square"; }
        if (s >= 2 / 3) { this.shape = "triangle"; }
        this.passengers = [];
        this.ownDiv;
        this.ownCanvas;
        this.ownCtx;
    }

    /*
    * get methods
    * Posx,Posy position on canvas
    * Shape shape
    * Passengers passengers at the station
    * Number (use for blockly which doesn't support OOP)
    */
    get PosX() { return this.x; }
    get PosY() { return this.y; }
    get Shape() { return this.shape; }
    get Passengers() { return this.passengers; }
    get Number() { return this.number; }

    spawnPassengers() {
        this.passengers[this.passengers.length] = new Passenger(this.shape);
    }

    showPassengers() {
        this.ownCtx.clearRect(0, 0, this.ownCanvas.width, this.ownCanvas.height);
        for (let i = 0; i < this.passengers.length; i++) {
            this.passengers[i].drawPassenger(this.ownCtx, 10 + (i % 4) * 8, 10 + ((i - i % 4) / 4) * 8, "black");
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
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = "black";
        if (this.shape == "circle") { drawCircle(this.ctx, this.x, this.y, 8, "antiquewhite"); }
        if (this.shape == "square") { drawSquare(this.ctx, this.x, this.y, 8, "antiquewhite"); }
        if (this.shape == "triangle") { drawTriangle(this.ctx, this.x, this.y, 8, "antiquewhite"); }

        this.ownDiv = document.createElement("div");
        document.getElementById("myMap").appendChild(this.ownDiv);
        this.ownDiv.setAttribute("class", "blank");

        this.ownCanvas = document.createElement("canvas");
        this.ownDiv.appendChild(this.ownCanvas);
        this.ownCanvas.width = 50;
        this.ownCanvas.height = 50;
        this.ownCtx = this.ownCanvas.getContext("2d");

        this.ownDiv.style.left = (this.x + 15) + "px";
        this.ownDiv.style.top = (this.y - 15) + "px";
    }
}
