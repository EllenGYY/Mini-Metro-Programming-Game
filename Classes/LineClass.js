class Line {

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");


    constructor(stations, color, number) {
        this.stations = stations;
        this.color = color;
        this.number = number;
    }

    get StationsOnLine() { return this.stations; }
    get LineColor() { return this.color; }
    get Number() { return this.number; }

    drawLine() {
        for (let i = 0; i < this.StationsOnLine.length - 1; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.StationsOnLine[i].PosX, this.StationsOnLine[i].PosY);
            this.ctx.lineTo(this.StationsOnLine[i + 1].PosX, this.StationsOnLine[i + 1].PosY);
            this.ctx.lineWidth = 3;
            this.ctx.strokeStyle = this.color;
            this.ctx.stroke();
        }
    }
}