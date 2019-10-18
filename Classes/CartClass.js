class Cart {

    newmetro;
    pass;
    pass_station;
    next_station;
    posX;
    posY;
    passengers = [];
    canvas;
    ctx;

    constructor(line, start, direction) {
        this.line = line;
        this.start = start;
        this.direction = direction;
    }

    initialize() {
        this.newmetro = document.createElement("div");
        this.newmetro.setAttribute("class", "metro");
        document.getElementById("myMap").appendChild(this.newmetro);

        this.canvas = document.createElement("canvas");
        this.newmetro.appendChild(this.canvas);
        this.canvas.width = METRO_WIDTH;
        this.canvas.height = METRO_HEIGHT;
        this.ctx = this.canvas.getContext("2d");

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
            this.passengers_deal_off(this.pass_station);
            this.passengers_deal_on(this.pass_station);
            this.showPassengers();
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

    passengers_deal_on(station) {
        var temp = this.passengers.length;
        if (6 - temp >= station.Passengers.length) {
            for (i = 0; i < station.Passengers.length; i++) {
                station.Passengers[i].PassengerStatus = "on";
                this.passengers[i + temp] = station.Passengers[i];
            }
        }
        else {
            for (i = temp; i < 6; i++) {
                station.Passengers[i - temp].PassengerStatus = "on";
                this.passengers[i] = station.Passengers[i - temp];
            }
        }
        station.checkPassengers();
        station.showPassengers();
    }

    passengers_deal_off(station) {
        this.passengers.forEach(element => {
            if (element.PassengerShape == station.Shape) { element.PassengerStatus = "arrived"; }
        })
        var i = 0;
        while (i != this.passengers.length) {
            if (this.passengers[i].PassengerStatus == "arrived") {
                this.passengers.splice(i, 1);
                i--;
            }
            i++;
        }
    }

    showPassengers() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (i = 0; i < this.passengers.length; i++) {
            this.passengers[i].drawPassenger(this.ctx, 10 + (i % 3) * 8, 10 + ((i - i % 3) / 2) * 8, "white");
        }
    }
}           