class Line {

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");


    constructor(stations, color) {
        this.stations = stations;
        this.color = color;
    }

    get stations_on_line() { return this.stations; }
    get lineColor() { return this.color; }

    drawLine() {
        for (i = 0; i < this.stations_on_line.length - 1; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.stations_on_line[i].PosX, this.stations_on_line[i].PosY);
            this.ctx.lineTo(this.stations_on_line[i + 1].PosX, this.stations_on_line[i + 1].PosY);
            this.ctx.lineWidth = 3;
            this.ctx.strokeStyle = this.color;
            this.ctx.stroke();
        }
    }
}