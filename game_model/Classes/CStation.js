class Station{

	constructor(position, shape){
		this.canvas = document.getElementById("canvas");
		this.ctx = canvas.getContext("2d");
		this._position = position;
		this._shape = shape;
		this._passengers = [];
		this._lines = [];
        this.markID;
        this.drawStation();
	}

	get position(){ return this._position; }
	get shape(){ return this._shape; }
	get passengers(){ return this._passengers; }
	get lines(){ return this._lines; }

	addLines(l){
		this._lines[this._lines.length] = l;
	}

	drawStation(){
		this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = "black";
        if (this._shape == Eshape.CIRCLE) { drawCircle(this.ctx, this._position, 6, "antiquewhite"); }
        if (this._shape == Eshape.SQUARE) { drawSquare(this.ctx, this._position, 6, "antiquewhite"); }
        if (this._shape == Eshape.TRIANGLE) { drawTriangle(this.ctx, this._position, 6, "antiquewhite"); }

        this.ownDiv = document.createElement("div");
        document.getElementById("myMap").appendChild(this.ownDiv);
        this.ownDiv.setAttribute("class", "blank");

        this.ownCanvas = document.createElement("canvas");
        this.ownDiv.appendChild(this.ownCanvas);
        this.ownCanvas.width = this.ownDiv.clientWidth;
        this.ownCanvas.height = this.ownDiv.clientHeight;
        this.ownCtx = this.ownCanvas.getContext("2d");

        this.ownDiv.style.left = (this._position.x + 12) + "px";
        this.ownDiv.style.top = (this._position.y - 12) + "px";
	}

	spawnPassengers() {
		let choices = [Eshape.CIRCLE, Eshape.SQUARE, Eshape.TRIANGLE];
        choices.splice(findInArray(this.shape, choices), 1);
        let s = Math.random();
        if (s < 1 / 2) { this._passengers[this._passengers.length] = new Passenger(choices[0]); }
        if (s >= 1 / 2) { this._passengers[this._passengers.length] = new Passenger(choices[1]); }
        this.showPassengers();
    }

    spawnPassengersInterval(){
        this.markID = setInterval(function (that) {that.spawnPassengers();}, 3000, this);
    }

    clearPassengersInterval(){
        clearInterval(this.markID);
    }

    checkPassengers() {
        let i = 0;
        while (i != this._passengers.length) {
            if (this._passengers[i].status == EPstatus.ON) {
                this._passengers.splice(i, 1);
                i--;
            }
            i++;
        }
        this.showPassengers();
    }

    showPassengers() {
        this.ownCtx.clearRect(0, 0, this.ownCanvas.width, this.ownCanvas.height);
        for (let i = 0; i < this._passengers.length; i++) {
            this._passengers[i].drawPassenger(this.ownCtx, new Position(10 + (i % 4) * 8, 10 + ((i - i % 4) / 4) * 8), "black");
        }
        if(this._passengers.length > 8){
            level_gameEnd();
        }
    }

    deleteDivs(){
        this.ownDiv.removeChild(this.ownCanvas);
        document.getElementById("myMap").removeChild(this.ownDiv);
    }

}