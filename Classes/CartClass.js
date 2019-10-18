class Cart {

    newmetro;
    pass;
    pass_station;
    next_station;
    posX;
    posY;
    passengers;

    constructor(line, start, direction) {
        this.line = line;
        this.start = start;
        this.direction = direction;
    }

    initialize() {
        this.newmetro = document.createElement("div");
        this.newmetro.setAttribute("class", "metro");
        document.getElementById("myMap").appendChild(this.newmetro);
        this.posX = this.start.PosX - METRO_WIDTH / 2;
        this.posY = this.start.PosY - METRO_HEIGHT / 2;
        this.newmetro.style.left = this.posX + "px";
        this.newmetro.style.top = this.posY + "px";
        this.newmetro.style.backgroundColor = this.line.lineColor;
        this.pass = findInArray(this.start, this.line.stations_on_line);
        this.pass_station = this.line.stations_on_line[this.pass];
        this.next_station = this.line.stations_on_line[this.pass + this.direction];
        this.newmetro.style.transform = "rotate(" + rotate(this.pass_station.PosX, this.pass_station.PosY,
            this.next_station.PosX, this.next_station.PosY) + "deg)";
    }

    update() {
        var slopex = slopeX(this.pass_station.PosX, this.pass_station.PosY, this.next_station.PosX, this.next_station.PosY);
        var slopey = slopeY(this.pass_station.PosX, this.pass_station.PosY, this.next_station.PosX, this.next_station.PosY);
        if (((this.next_station.PosX - this.pass_station.PosX > 0) && (this.posX > this.next_station.PosX - METRO_WIDTH / 2)) ||
            ((this.next_station.PosX - this.pass_station.PosX < 0) && (this.posX < this.next_station.PosX - METRO_WIDTH / 2))) {
            this.pass = this.pass + this.direction;
            if (this.pass == this.line.stations_on_line.length - 1 || this.pass == 0) {
                this.direction = - this.direction;
            }
            this.pass_station = this.line.stations_on_line[this.pass];
            this.next_station = this.line.stations_on_line[this.pass + this.direction];
            slopex = slopeX(this.pass_station.PosX, this.pass_station.PosY, this.next_station.PosX, this.next_station.PosY);
            slopey = slopeY(this.pass_station.PosX, this.pass_station.PosY, this.next_station.PosX, this.next_station.PosY);
            this.newmetro.style.transform = "rotate(" + rotate(this.pass_station.PosX, this.pass_station.PosY,
                this.next_station.PosX, this.next_station.PosY) + "deg)";
        }
        this.posX += slopex;
        this.posY += slopey;
        this.newmetro.style.left = this.posX + 'px';
        this.newmetro.style.top = this.posY + 'px';
    }

    passengers_deal(station) {

    }
}           