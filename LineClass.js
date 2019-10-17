class Line {

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");


    constructor(stations, color, number) {
        this.stations = stations;
        this.color = color;
        this.number = number;
    }

    get stations_on_line() { return this.stations; }
    get lineColor() { return this.color; }
    get Number() { return this.number; }

    drawLine() {
        for (i = 0; i < this.stations_on_line.length - 1; i++) {
            this.ctx.beginPath();
            if (this.stations_on_line[i].PosX < this.stations_on_line[i + 1].PosX) {
                this.ctx.moveTo(this.stations_on_line[i].PosX + 15, this.stations_on_line[i].PosY);
                this.ctx.lineTo(this.stations_on_line[i + 1].PosX - 15, this.stations_on_line[i + 1].PosY);
            }
            else if (this.stations_on_line[i].PosX > this.stations_on_line[i + 1].PosX) {
                this.ctx.moveTo(this.stations_on_line[i].PosX - 15, this.stations_on_line[i].PosY);
                this.ctx.lineTo(this.stations_on_line[i + 1].PosX + 15, this.stations_on_line[i + 1].PosY);
            }
            else if (this.stations_on_line[i].PosY < this.stations_on_line[i + 1].PosY) {
                this.ctx.moveTo(this.stations_on_line[i].PosX, this.stations_on_line[i].PosY + 15);
                this.ctx.lineTo(this.stations_on_line[i + 1].PosX, this.stations_on_line[i + 1].PosY - 15);
            }
            else {
                this.ctx.moveTo(this.stations_on_line[i].PosX, this.stations_on_line[i].PosY - 15);
                this.ctx.lineTo(this.stations_on_line[i + 1].PosX, this.stations_on_line[i + 1].PosY + 15);
            }
            this.ctx.lineWidth = 3;
            this.ctx.strokeStyle = this.color;
            this.ctx.stroke();
        }
    }
}