class Line{
	
	constructor(stations, color){
		this._stations = stations;
		this._color = color;
		this._carts = [];
		this.canvas = document.getElementById("canvas");
		this.ctx = canvas.getContext("2d");
		this._stations.forEach(element => element.addLines(this));
		this.drawLine();
	}

	get stations(){ return this._stations; }
	get color(){ return this._color; }

	drawLine() {
        for (let i = 0; i < this._stations.length - 1; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(this._stations[i].position.x, this._stations[i].position.y);
            this.ctx.lineTo(this._stations[i + 1].position.x, this._stations[i + 1].position.y);
            this.ctx.lineWidth = 5;
            this.ctx.strokeStyle = this.color;
            this.ctx.stroke();
        }
    }

    addCarts(cart){
    	this._carts[this._carts.length] = cart;
    }
    
}