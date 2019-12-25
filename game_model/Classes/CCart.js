class Cart{

	constructor(line){
		this.line = line;
		this.start = 0;
		this.direction = 1;
		this.passengers = [];
		this.line.addCarts(this);
		this.newmetro = document.createElement("div");
    document.getElementById("myMap").appendChild(this.newmetro);
    this.newmetro.setAttribute("class", "metro");
    this.canvas = document.createElement("canvas");
    this.newmetro.appendChild(this.canvas);
    this.canvas.width = this.newmetro.clientWidth;
    this.canvas.height = this.newmetro.clientHeight;
    this.ctx = this.canvas.getContext("2d");
    this.newmetro.style.backgroundColor = this.line.color;
	}

	operating(){
    let now_duration = 10 * this.line.stations[this.start].position.distance(this.line.stations[this.start + this.direction].position);
		this.animating(this.newmetro, now_duration);
    setTimeout(function(that){
      that.passengers_deal_off(that.line.stations[that.start + that.direction]);
      that.passengers_deal_on(that.line.stations[that.start + that.direction]);
      that.start = that.start + that.direction;
      if (that.start == 0 || that.start == that.line.stations.length - 1){
        that.direction = -that.direction;
      }
      that.operating()
    }, now_duration, this);
	}

	animating(metro, now_duration){
    let now_position = new Position(this.line.stations[this.start].position.x - this.newmetro.clientWidth / 2, this.line.stations[this.start].position.y - this.newmetro.clientHeight / 2);
    let now_speed = this.direction * this.line.stations[this.start].position.distance(this.line.stations[this.start + this.direction].position);
    let now_rotation = this.line.stations[this.start].position.rotation(this.line.stations[this.start + this.direction].position);
		animate({
    	duration: now_duration,
    	timing: function(timeFraction) {
    		if(timeFraction < 0.5){
    			return 2 * Math.pow(timeFraction, 2);
    		}
    		else{
    			return -2 * Math.pow(timeFraction, 2) + 4 * timeFraction - 1;
    		}
    	},
    	draw: function(progress) {
      	metro.style.left = now_position.x + progress * now_speed * Math.cos(now_rotation) + 'px';
      	metro.style.top = now_position.y + progress * now_speed * Math.sin(now_rotation) + 'px';
      	metro.style.transform = "rotate(" + now_rotation * 180 / Math.PI + "deg)";
    	}
    });
	}

	passengers_deal_on(station) {
      let temp = this.passengers.length;
      let how_many_new = Math.min(6 - temp, station.passengers.length);
      for (let i = 0; i < how_many_new; i++) {
          station.passengers[i].status = EPstatus.ON;
          this.passengers[i + temp] = station.passengers[i];
      }
      this.showPassengers();
      station.checkPassengers();
    }

  passengers_deal_off(station) {
    this.passengers.forEach(element => {
        if (element.shape == station.shape) { element.status = EPstatus.OFF; }
    })
    let i = 0;
    while (i != this.passengers.length) {
        if (this.passengers[i].status == EPstatus.OFF) {
            this.passengers.splice(i, 1);
            i--;
        }
        i++;
    }
    this.showPassengers();
  }

  showPassengers() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = 0; i < this.passengers.length; i++) {
        this.passengers[i].drawPassenger(this.ctx, new Position(10 + (i % 3) * 8, 10 + ((i - i % 3) / 2) * 8), "white");
    }
  }
	
}